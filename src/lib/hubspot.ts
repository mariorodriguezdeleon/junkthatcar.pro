import type { QuoteFormData, HubSpotResponse } from "@/types";

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID;

export async function submitToHubSpot(
  data: QuoteFormData
): Promise<HubSpotResponse> {
  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) {
    console.warn("HubSpot not configured — skipping submission");
    return { success: true, message: "Quote received (HubSpot not configured)" };
  }

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

  const body = {
    fields: [
      { name: "firstname", value: data.fullName.split(" ")[0] },
      { name: "lastname", value: data.fullName.split(" ").slice(1).join(" ") },
      { name: "email", value: data.email },
      { name: "phone", value: data.phone },
      { name: "vehicle_year", value: data.vehicleYear },
      { name: "vehicle_make", value: data.vehicleMake },
      { name: "vehicle_model", value: data.vehicleModel },
      { name: "vehicle_condition", value: data.vehicleCondition },
      { name: "zip", value: data.zipCode },
      { name: "notes", value: data.additionalNotes || "" },
    ],
    context: {
      pageUri: data.zipCode
        ? `https://junkthatcar.pro/get-quote?zip=${data.zipCode}`
        : "https://junkthatcar.pro/get-quote",
      pageName: "Get a Quote — Junk That Car",
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error("HubSpot submission failed:", await response.text());
    return { success: false, message: "Failed to submit. Please try again." };
  }

  return { success: true, message: "Quote submitted! We'll contact you soon." };
}