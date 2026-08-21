export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleCondition: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  additionalNotes?: string;
  website?: string; // honeypot — bots fill this, humans never see it
}

export interface ServiceArea {
  city: string;
  county: string;
  zipCodes: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  location: string;
}

export interface HubSpotResponse {
  success: boolean;
  message: string;
}