import { Search, X, UserRound, UserPlus } from "lucide-react";
import type { PatientSearchResult } from "../../workstation.types";

interface SecureSearchPanelProps {
  query: string;
  onQueryChange: (value: string) => void;
  results: PatientSearchResult[];
  totalMatchCount: number;
  selectedPatient: PatientSearchResult | null;
  onSelectPatient: (patient: PatientSearchResult) => void;
  onClearSelection: () => void;
  onViewAllResults: () => void;
  onRegisterNewPatient: () => void;
}

export function SecureSearchPanel({
  query,
  onQueryChange,
  results,
  totalMatchCount,
  selectedPatient,
  onSelectPatient,
  onClearSelection,
  onViewAllResults,
  onRegisterNewPatient,
}: SecureSearchPanelProps) {
  const showDropdown = query.trim().length > 0 && !selectedPatient;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-xs font-semibold text-white">
          1
        </span>
        Secure Search
      </div>

      <div className="relative mt-3">
        {selectedPatient ? (
          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-gray-700">
              <span className="font-medium text-gray-900">{selectedPatient.fullName}</span>
              <span>{selectedPatient.patientId}</span>
              <span>{selectedPatient.dateOfBirth}</span>
              <span>{selectedPatient.gender}</span>
              <span>{selectedPatient.contact}</span>
            </div>
            <button
              type="button"
              onClick={onClearSelection}
              className="rounded-md p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
              aria-label="Clear selected patient"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search patient by name, ID, or date of birth"
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-9 text-sm text-gray-900 placeholder:text-gray-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {showDropdown && (
              <div className="absolute z-20 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="px-4 py-3 text-xs text-gray-500">
                  Showing {results.length} of {totalMatchCount} results for "{query}"
                </div>

                {results.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-y border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                          <th className="px-4 py-2 font-semibold">Patient</th>
                          <th className="px-4 py-2 font-semibold">Patient ID</th>
                          <th className="px-4 py-2 font-semibold">Date of Birth</th>
                          <th className="px-4 py-2 font-semibold">Gender</th>
                          <th className="px-4 py-2 font-semibold">Contact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {results.map((patient) => (
                          <tr
                            key={patient.patientId}
                            onClick={() => onSelectPatient(patient)}
                            className="cursor-pointer transition-colors hover:bg-gray-50"
                          >
                            <td className="flex items-center gap-2 px-4 py-2.5 font-medium text-gray-900">
                              <UserRound className="h-4 w-4 text-green-700" strokeWidth={1.8} />
                              {patient.fullName}
                            </td>
                            <td className="px-4 py-2.5 text-gray-600">{patient.patientId}</td>
                            <td className="px-4 py-2.5 text-gray-600">{patient.dateOfBirth}</td>
                            <td className="px-4 py-2.5 text-gray-600">{patient.gender}</td>
                            <td className="px-4 py-2.5 text-gray-600">{patient.contact}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="px-4 pb-3 text-sm text-gray-500">No patients match "{query}".</p>
                )}

                <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 text-sm">
                  <button
                    type="button"
                    onClick={onRegisterNewPatient}
                    className="flex items-center gap-1.5 font-medium text-gray-600 hover:text-green-700"
                  >
                    <UserPlus className="h-4 w-4" />
                    Can't find the patient you're looking for? Register New Patient
                  </button>

                  {totalMatchCount > results.length && (
                    <button
                      type="button"
                      onClick={onViewAllResults}
                      className="font-semibold text-green-700 hover:text-green-800"
                    >
                      View All Results for "{query}"
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}