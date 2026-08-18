// Mirrors the three profile aggregates that can exist for a User:
// PatientProfile, ClinicalStaffProfile (with StaffRole), AdministratorProfile.
export type AppRole = "Patient" | "MedicalTechnologist" | "Pathologist" | "Phlebotomist" | "Administrator";

export interface AuthUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: AppRole;
  // Present only for patients/staff, matches the corresponding profile's id
  profileId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: AuthUser;
}
