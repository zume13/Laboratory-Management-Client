import type {
  PatientSearchResult,
  PatientFileHistoryEntry,
  PendingLabRequest,
  ReleasedResultRow,
  TestCategoryOption,
} from "./workstation.types";

export const TEST_CATEGORIES: TestCategoryOption[] = [
  { id: "hematology", name: "Hematology" },
  { id: "serology", name: "Serology & Immunology" },
  { id: "special", name: "Special Examinations" },
  { id: "microscopy", name: "Clinical Microscopy" },
  { id: "chemistry", name: "Clinical Chemistry" },
];

export const TEST_CATEGORY_BADGE_CLASSES: Record<string, string> = {
  hematology: "bg-red-50 text-red-700",
  serology: "bg-amber-50 text-amber-700",
  special: "bg-purple-50 text-purple-700",
  microscopy: "bg-blue-50 text-blue-700",
  chemistry: "bg-orange-50 text-orange-700",
};

export const MOCK_PATIENTS: PatientSearchResult[] = [
  {
    patientId: "P001023",
    fullName: "Gabriel Kristoff Y. Salvador",
    dateOfBirth: "September 23, 2025",
    gender: "Male",
    contact: "0915 536 6894",
  },
  {
    patientId: "P002533",
    fullName: "Gabby L. Garcia",
    dateOfBirth: "March 14, 1998",
    gender: "Female",
    contact: "0908 365 2342",
  },
  {
    patientId: "P000567",
    fullName: "Gabino R. Bautista",
    dateOfBirth: "October 24, 1987",
    gender: "Male",
    contact: "0912 235 3477",
  },
  {
    patientId: "P001189",
    fullName: "Gabrielle M. Santos",
    dateOfBirth: "January 25, 1974",
    gender: "Female",
    contact: "0927 377 2367",
  },
  {
    patientId: "P000879",
    fullName: "Gabriel John D. Reyes",
    dateOfBirth: "December 30, 2000",
    gender: "Male",
    contact: "0922 986 0963",
  },
];

export const MOCK_FILE_HISTORY: PatientFileHistoryEntry[] = [
  {
    id: "fh-1",
    patientId: "P001023",
    dateTime: "May 19, 2026 · 07:55",
    testCategory: TEST_CATEGORIES[0],
    status: "Released",
    releasedBy: "J.D. Muffin, RMT",
    pdfFileName: "P001023_CBC_20260519.pdf",
  },
  {
    id: "fh-2",
    patientId: "P001023",
    dateTime: "May 18, 2026 · 11:11",
    testCategory: TEST_CATEGORIES[1],
    status: "Pending",
    releasedBy: null,
    pdfFileName: null,
  },
  {
    id: "fh-3",
    patientId: "P001023",
    dateTime: "February 14, 2026 · 13:43",
    testCategory: TEST_CATEGORIES[2],
    status: "Released",
    releasedBy: "J.D. Muffin, RMT",
    pdfFileName: "P001023_TFT_20260214.pdf",
  },
  {
    id: "fh-4",
    patientId: "P001023",
    dateTime: "September 13, 2025 · 09:13",
    testCategory: TEST_CATEGORIES[3],
    status: "Released",
    releasedBy: "J.D. Muffin, RMT",
    pdfFileName: "P001023_FOBT_20250913.pdf",
  },
];

export const MOCK_PENDING_REQUESTS: PendingLabRequest[] = [
  {
    id: "req-1",
    patientId: "P001023",
    patientName: "Gabriel Kristoff Y. Salvador",
    testCategory: TEST_CATEGORIES[1],
    requestedAt: "May 18, 2026 · 11:11",
  },
  {
    id: "req-2",
    patientId: "P001020",
    patientName: "Gabby L. Garcia",
    testCategory: TEST_CATEGORIES[3],
    requestedAt: "May 17, 2026 · 12:15",
  },
  {
    id: "req-3",
    patientId: "P001243",
    patientName: "Gabino R. Bautista",
    testCategory: TEST_CATEGORIES[2],
    requestedAt: "May 17, 2026 · 10:51",
  },
  {
    id: "req-4",
    patientId: "P001109",
    patientName: "Gabrielle M. Santos",
    testCategory: TEST_CATEGORIES[4],
    requestedAt: "May 17, 2026 · 08:46",
  },
  {
    id: "req-5",
    patientId: "P001357",
    patientName: "Gabrielle M. Santos",
    testCategory: TEST_CATEGORIES[0],
    requestedAt: "May 16, 2026 · 14:22",
  },
];

export const MOCK_RECENT_RESULTS: ReleasedResultRow[] = [
  {
    id: "res-1",
    dateTime: "May 19, 2026",
    patientName: "Gabriel Kristoff Y. Salvador",
    patientId: "P001023",
    testCategory: TEST_CATEGORIES[0],
    releasedBy: "J.D. Muffin, RMT",
    releasedAt: "May 19, 2026 · 09:21",
  },
  {
    id: "res-2",
    dateTime: "May 19, 2026",
    patientName: "Gabby L. Garcia",
    patientId: "P001109",
    testCategory: TEST_CATEGORIES[1],
    releasedBy: "J.D. Muffin, RMT",
    releasedAt: "May 19, 2026 · 09:05",
  },
  {
    id: "res-3",
    dateTime: "May 18, 2026",
    patientName: "Gabino R. Bautista",
    patientId: "P001067",
    testCategory: TEST_CATEGORIES[2],
    releasedBy: "J.D. Muffin, RMT",
    releasedAt: "May 10, 2026 · 06:27",
  },
  {
    id: "res-4",
    dateTime: "May 18, 2026",
    patientName: "Gabrielle M. Santos",
    patientId: "P001101",
    testCategory: TEST_CATEGORIES[3],
    releasedBy: "J.D. Muffin, RMT",
    releasedAt: "May 18, 2026 · 14:49",
  },
];

export function searchMockPatients(query: string): PatientSearchResult[] {
  if (!query.trim()) return [];
  const q = query.trim().toLowerCase();
  return MOCK_PATIENTS.filter((p) => p.fullName.toLowerCase().includes(q));
}