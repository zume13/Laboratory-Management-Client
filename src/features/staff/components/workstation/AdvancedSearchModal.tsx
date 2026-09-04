import { useState } from "react";
import { Search, UserRound } from "lucide-react";
import { Modal } from "@/shared/components/Modal";
import type { PatientSearchResult } from "../../workstation.types";

interface AdvancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  onQueryChange: (value: string) => void;
  results: PatientSearchResult[];
  totalMatchCount: number;
  onSelectPatient: (patient: PatientSearchResult) => void;
}

const PAGE_SIZE = 10;

export function AdvancedSearchModal({
  isOpen,
  onClose,
  query,
  onQueryChange,
  results,
  totalMatchCount,
  onSelectPatient,
}: AdvancedSearchModalProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const pageResults = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Search results for "${query}"`} widthClassName="max-w-3xl">
      <div className="px-6 py-4">
        <div className="relative mb-3">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              onQueryChange(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
          />
        </div>

        <p className="mb-2 text-xs text-gray-500">
          Showing {pageResults.length} of {totalMatchCount} results for "{query}"
        </p>

        <div className="max-h-96 overflow-y-auto rounded-lg border border-gray-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <th className="px-4 py-2.5">Patient</th>
                <th className="px-4 py-2.5">Patient ID</th>
                <th className="px-4 py-2.5">Date of Birth</th>
                <th className="px-4 py-2.5">Gender</th>
                <th className="px-4 py-2.5">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pageResults.map((patient) => (
                <tr
                  key={patient.patientId}
                  onClick={() => {
                    onSelectPatient(patient);
                    onClose();
                  }}
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
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`h-7 w-7 rounded-md text-sm font-medium transition-colors ${
                p === page ? "bg-green-700 text-white" : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}