import { NextResponse } from "next/server";
import { z } from "zod";
import { submitToHubSpot } from "@/lib/hubspot";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^[\d\s\-\(\)\+]+$/, "Invalid phone number"),
  vehicleYear: z.string().regex(/^\d{4}$/, "Enter a 4-digit year"),
  vehicleMake: z.string().min(1, "Make is required"),
  vehicleModel: z.string().min(1, "Model is required"),
  vehicleCondition: z.string().min(1, "Select a condition"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),
  additionalNotes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your inputs.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const result = await submitToHubSpot(parsed.data);

    if (!result.success) {
      return NextResponse.json(result, { status: 502 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}