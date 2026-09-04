import { useState } from "react";
import { Search, UploadCloud, X, UserPlus, ChevronDown } from "lucide-react";
import { Modal } from "@/shared/components/Modal";
import { TEST_CATEGORIES, searchMockPatients } from "../../workstation.mockData";
import type { PatientSearchResult } from "../../workstation.types";

interface NewLabRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateRequest: (payload: {
    patient: PatientSearchResult;
    clinicalDetails: string;
    testCategoryId: string;
  }) => void;
  onSaveAsPending: (payload: {
    patient: PatientSearchResult;
    clinicalDetails: string;
    testCategoryId: string;
  }) => void;
  initialPatient?: PatientSearchResult | null;
}

export function NewLabRequestModal({
  isOpen,
  onClose,
  onCreateRequest,
  onSaveAsPending,
  initialPatient = null,
}: NewLabRequestModalProps) {
  const [patientQuery, setPatientQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<PatientSearchResult | null>(initialPatient);
  const [clinicalDetails, setClinicalDetails] = useState("");
  const [testCategoryId, setTestCategoryId] = useState("");

  const searchResults = searchMockPatients(patientQuery);
  const isValid = Boolean(selectedPatient && testCategoryId);

  function resetAndClose() {
    setPatientQuery("");
    setSelectedPatient(initialPatient);
    setClinicalDetails("");
    setTestCategoryId("");
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={resetAndClose} title="Create New Lab Request" widthClassName="max-w-lg">
      <div className="max-h-[75vh] overflow-y-auto px-6 py-5">
        {/* 1. Patient Identification */}
        <div className="mb-5">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-[11px] text-white">
              1
            </span>
            Patient Identification
          </p>

          {selectedPatient ? (
            <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm">
              <span className="font-medium text-gray-900">{selectedPatient.fullName}</span>
              <button
                type="button"
                onClick={() => setSelectedPatient(null)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Clear patient"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={patientQuery}
                onChange={(e) => setPatientQuery(e.target.value)}
                placeholder="Search patient by name, ID, or date of birth"
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              />
              {patientQuery && searchResults.length > 0 && (
                <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                  {searchResults.map((patient) => (
                    <button
                      key={patient.patientId}
                      type="button"
                      onClick={() => {
                        setSelectedPatient(patient);
                        setPatientQuery("");
                      }}
                      className="block w-full px-3 py-2 text-left text-sm hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-900">{patient.fullName}</span>
                      <span className="ml-2 text-xs text-gray-400">{patient.patientId}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <button
            type="button"
            className="mt-1.5 flex items-center gap-1 text-xs font-medium text-green-700 hover:text-green-800"
          >
            <UserPlus className="h-3.5 w-3.5" />
            Register New Patient
          </button>
        </div>

        {/* 2. Clinical Details */}
        <div className="mb-5">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-[11px] text-white">
              2
            </span>
            Clinical Details
          </p>
          <label className="mb-1 block text-xs text-gray-500">Suspected Diagnosis/Clinical Details</label>
          <textarea
            value={clinicalDetails}
            onChange={(e) => setClinicalDetails(e.target.value)}
            rows={3}
            placeholder="Enter suspected diagnosis, fasting hours, or special instructions…"
            className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          />
        </div>

        {/* 3. Procedure Selection */}
        <div className="mb-5">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-[11px] text-white">
              3
            </span>
            Procedure Selection
          </p>

          <div className="relative">
            <select
              value={testCategoryId}
              onChange={(e) => setTestCategoryId(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-700 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            >
              <option value="">Select test category</option>

              {TEST_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              strokeWidth={1.8}
            />
          </div>
        </div>

        {/* 4. Document Attachment */}
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-[11px] text-white">
              4
            </span>
            Document Attachment
          </p>
          <div className="flex flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-gray-300 px-4 py-6 text-center hover:border-green-400">
            <UploadCloud className="h-6 w-6 text-green-700" strokeWidth={1.5} />
            <p className="text-sm font-medium text-gray-700">Drag & Drop Laboratory Result</p>
            <p className="text-xs text-gray-400">Attach PDF generated from MS Access</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <button
          type="button"
          disabled={!selectedPatient || !testCategoryId}
          onClick={() => {
            if (!selectedPatient) return;
            onSaveAsPending({ patient: selectedPatient, clinicalDetails, testCategoryId });
            resetAndClose();
          }}
          className="rounded-md border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Pending Result
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={resetAndClose}
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={!isValid}
            onClick={() => {
              if (!selectedPatient) return;
              onCreateRequest({ patient: selectedPatient, clinicalDetails, testCategoryId });
              resetAndClose();
            }}
            className="rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Create Lab Request
          </button>
        </div>
      </div>
    </Modal>
  );
}