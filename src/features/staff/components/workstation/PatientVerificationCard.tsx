import { UserRound, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import type { PatientSearchResult } from "../../workstation.types";

interface PatientVerificationCardProps {
  patient: PatientSearchResult | null;
  onClear: () => void;
}

export function PatientVerificationCard({ patient, onClear }: PatientVerificationCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <SectionHeader
        number={2}
        title="Patient Verification"
        action={
          patient && (
            <button
              type="button"
              onClick={onClear}
              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700"
            >
              <X className="h-3.5 w-3.5" />
              Clear Selection
            </button>
          )
        }
      />

      <div className="mt-3">
        {patient ? (
          <div className="flex items-center gap-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
              <UserRound className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div className="grid flex-1 grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="font-semibold text-gray-900">{patient.fullName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Patient ID</p>
                <p className="font-semibold text-gray-900">{patient.patientId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Date of Birth</p>
                <p className="font-semibold text-gray-900">{patient.dateOfBirth}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-400">
            No selected patient
          </div>
        )}
      </div>
    </div>
  );
}