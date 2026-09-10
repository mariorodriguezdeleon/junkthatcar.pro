"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader2, Send, Car, MapPin } from "lucide-react";
import { SITE, VEHICLE_CONDITIONS } from "@/lib/constants";
import { submitToHubSpot } from "@/lib/hubspot";
import type { QuoteFormData } from "@/types";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^[\d\s\-\(\)\+]+$/, "Invalid phone number"),
  vehicleYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  vehicleMake: z.string().min(1, "Make is required"),
  vehicleModel: z.string().min(1, "Model is required"),
  vehicleCondition: z.string().min(1, "Select a condition"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"),
  additionalNotes: z.string().optional(),
  website: z.string().optional(),
});

type FormStatus = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Honeypot check — bots fill hidden fields, humans don't.
    // Pretend success so the bot thinks it worked, but skip HubSpot.
    if (data.website) {
      setStatus("success");
      setMessage("Quote submitted! We'll contact you soon.");
      reset();
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const result = await submitToHubSpot(data);

      if (result.success) {
        setStatus("success");
        setMessage(result.message || "Quote submitted! We'll contact you soon.");
        reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const isSubmitting = status === "loading";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-6"
      noValidate
    >
      {/* Status messages */}
      {status === "success" && (
        <div className="flex items-center gap-3 rounded-lg border border-green-700 bg-green-950/50 p-4 text-green-400">
          <CheckCircle className="h-5 w-5 shrink-0" />
          <span className="text-sm font-medium">{message}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 rounded-lg border border-red-700 bg-red-950/50 p-4 text-red-400">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span className="text-sm font-medium">{message}</span>
        </div>
      )}

      {/* Section: Personal Info */}
      <fieldset disabled={isSubmitting} className="space-y-6">
        {/* Honeypot field — hidden from humans, filled by bots */}
        <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
          <label>
            Leave this field empty
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("website")}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FieldWrapper label="Full Name" error={errors.fullName?.message}>
            <input
              type="text"
              autoComplete="name"
              className="input-field"
              placeholder="John Doe"
              {...register("fullName")}
            />
          </FieldWrapper>

          <FieldWrapper label="Phone" error={errors.phone?.message}>
            <input
              type="tel"
              autoComplete="tel"
              className="input-field"
              placeholder={SITE.phone}
              {...register("phone")}
            />
          </FieldWrapper>
        </div>

        <FieldWrapper label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            className="input-field"
            placeholder="you@example.com"
            {...register("email")}
          />
        </FieldWrapper>

        {/* Section: Vehicle Info */}
        <div className="pt-4 border-t border-jtc-border">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-jtc-charcoal mb-4">
            <Car className="h-5 w-5 text-brand-800" />
            Vehicle Details
          </h2>

          <div className="grid gap-4 sm:grid-cols-3">
            <FieldWrapper label="Year" error={errors.vehicleYear?.message}>
              <input
                type="text"
                inputMode="numeric"
                className="input-field"
                placeholder="2015"
                {...register("vehicleYear")}
              />
            </FieldWrapper>

            <FieldWrapper label="Make" error={errors.vehicleMake?.message}>
              <input
                type="text"
                className="input-field"
                placeholder="Honda"
                {...register("vehicleMake")}
              />
            </FieldWrapper>

            <FieldWrapper label="Model" error={errors.vehicleModel?.message}>
              <input
                type="text"
                className="input-field"
                placeholder="Civic"
                {...register("vehicleModel")}
              />
            </FieldWrapper>
          </div>

          <div className="grid gap-4 mt-4">
            <FieldWrapper
              label="Condition"
              error={errors.vehicleCondition?.message}
            >
              <select
                className="input-field appearance-none"
                {...register("vehicleCondition")}
              >
                <option value="">Select condition…</option>
                {VEHICLE_CONDITIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </FieldWrapper>
          </div>
        </div>

        {/* Section: Pickup Address */}
        <div className="pt-4 border-t border-jtc-border">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-jtc-charcoal mb-4">
            <MapPin className="h-5 w-5 text-brand-800" />
            Pickup Address
          </h2>

          <FieldWrapper
            label="Street Address"
            error={errors.streetAddress?.message}
          >
            <input
              type="text"
              autoComplete="street-address"
              className="input-field"
              placeholder="123 Main St"
              {...register("streetAddress")}
            />
          </FieldWrapper>

          <div className="grid gap-4 sm:grid-cols-3 mt-4">
            <FieldWrapper label="City" error={errors.city?.message}>
              <input
                type="text"
                autoComplete="address-level2"
                className="input-field"
                placeholder="Seattle"
                {...register("city")}
              />
            </FieldWrapper>

            <FieldWrapper label="State" error={errors.state?.message}>
              <input
                type="text"
                autoComplete="address-level1"
                className="input-field"
                placeholder="WA"
                maxLength={2}
                {...register("state")}
              />
            </FieldWrapper>

            <FieldWrapper label="ZIP Code" error={errors.zipCode?.message}>
              <input
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                className="input-field"
                placeholder="98101"
                {...register("zipCode")}
              />
            </FieldWrapper>
          </div>
        </div>

        {/* Section: Notes */}
        <div className="pt-4 border-t border-jtc-border">
          <label className="block text-sm font-medium text-jtc-charcoal mb-1.5">
            Additional Notes
          </label>
          <textarea
            rows={4}
            className="input-field resize-y"
            placeholder="Any details about the vehicle — damage, missing parts, etc."
            {...register("additionalNotes")}
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-semibold text-jtc-charcoal hover:bg-brand-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Get My Quote
              </>
            )}
          </button>
        </div>
      </fieldset>
    </form>
  );
}

/* --- internal helper --- */

function FieldWrapper({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-jtc-charcoal mb-1.5">
        {label}
      </span>
      {children}
      {error ? (
        <p className="mt-1 text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}