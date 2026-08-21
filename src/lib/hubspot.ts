import type { QuoteFormData, HubSpotResponse } from "@/types";

// Public identifiers from the HubSpot form's embed code — not secrets.
// The Forms API submit endpoint is designed to be called from the browser.
const HUBSPOT_PORTAL_ID = "244881964";
const HUBSPOT_FORM_GUID = "0314cb9d-13e7-4e05-b9b9-0268c1438e06";

export async function submitToHubSpot(
  data: QuoteFormData
): Promise<HubSpotResponse> {
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
      { name: "address", value: data.streetAddress },
      { name: "city", value: data.city },
      { name: "state", value: data.state },
      { name: "zip_code", value: data.zipCode },
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
