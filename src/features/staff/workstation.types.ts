export interface TestCategoryOption {
  id: string;
  name: string;
}

export interface PatientSearchResult {
  patientId: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  contact: string;
}

export type FileHistoryStatus = "Released" | "Pending";

export interface PatientFileHistoryEntry {
  id: string;
  patientId: string;
  dateTime: string;
  testCategory: TestCategoryOption;
  status: FileHistoryStatus;
  releasedBy: string | null;
  pdfFileName: string | null;
}

export type LabRequestStatus =
  | "Requested"
  | "Result Pending"
  | "Ready for Release"

export interface PendingLabRequest {
  id: string;
  patientId: string;
  patientName: string;
  testCategory: TestCategoryOption;
  requestedAt: string;
  status: LabRequestStatus;
  clinicalDetails: string;
}

export interface ReleasedResultRow {
  id: string;
  dateTime: string;
  patientName: string;
  patientId: string;
  testCategory: TestCategoryOption;
  releasedBy: string;
  releasedAt: string;
}

export interface UploadedFile {
  name: string;
  sizeLabel: string;
}