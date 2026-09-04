import { FileSearch, Eye, Download } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { TestCategoryBadge, FileHistoryStatusBadge } from "./WorkstationBadges";
import type { PatientFileHistoryEntry } from "../../workstation.types";

interface PatientFileHistoryTableProps {
  entries: PatientFileHistoryEntry[];
  hasSelectedPatient: boolean;
  onViewAll: () => void;
}

export function PatientFileHistoryTable({
  entries,
  hasSelectedPatient,
  onViewAll,
}: PatientFileHistoryTableProps) {
  return (
    <div
      className={`rounded-xl border bg-white p-5 shadow-sm transition-colors ${
        hasSelectedPatient ? "border-blue-400 ring-1 ring-blue-100" : "border-gray-200"
      }`}
    >
      <SectionHeader number={3} title="Patient File History" />

      <div className="mt-3 overflow-hidden rounded-lg border border-gray-100">
        {entries.length > 0 ? (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
                <th className="px-4 py-3">Date/Time</th>
                <th className="px-4 py-3">Test Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Released by</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {entries.map((entry) => (
                <tr key={entry.id} className="transition-colors hover:bg-gray-50">
                  <td className="px-4 py-3 text-xs text-gray-500">{entry.dateTime}</td>
                  <td className="px-4 py-3">
                    <TestCategoryBadge category={entry.testCategory} />
                  </td>
                  <td className="px-4 py-3">
                    <FileHistoryStatusBadge status={entry.status} />
                  </td>
                  <td className="px-4 py-3 text-gray-600">{entry.releasedBy ?? "—"}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        disabled={entry.status !== "Released"}
                        className="rounded-md border border-gray-200 p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="View result"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        disabled={entry.status !== "Released"}
                        className="rounded-md border border-gray-200 p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Download result"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-14 text-center">
            <FileSearch className="h-9 w-9 text-gray-300" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-gray-700">No patient file history found</p>
            <p className="max-w-xs text-xs text-gray-400">
              Once laboratory results are requested and released, they will appear here.
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onViewAll}
        className="mt-3 text-sm font-semibold text-green-700 hover:text-green-800"
      >
        View All Patient History →
      </button>
    </div>
  );
}