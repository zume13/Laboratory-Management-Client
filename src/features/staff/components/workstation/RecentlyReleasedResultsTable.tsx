import { Eye, Download } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { TestCategoryBadge } from "./WorkstationBadges";
import type { ReleasedResultRow } from "../../workstation.types";

interface RecentlyReleasedResultsTableProps {
  results: ReleasedResultRow[];
  onVoid: (resultId: string) => void;
  onViewAll: () => void;
}

export function RecentlyReleasedResultsTable({
  results,
  onVoid,
  onViewAll,
}: RecentlyReleasedResultsTableProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <SectionHeader number={5} title="Recently Released Results" />

      <div className="mt-3 overflow-hidden rounded-lg border border-gray-100">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-3">Date/Time</th>
              <th className="px-4 py-3">Patient</th>
              <th className="px-4 py-3">Test Category</th>
              <th className="px-4 py-3">Released by</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-gray-50">
                <td className="px-4 py-3 text-xs text-gray-500">{row.dateTime}</td>
                <td className="px-4 py-3">
                  <p className="font-medium text-gray-900">{row.patientName}</p>
                  <p className="text-xs text-gray-400">{row.patientId}</p>
                </td>
                <td className="px-4 py-3">
                  <TestCategoryBadge category={row.testCategory} />
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {row.releasedBy}
                  <span className="block text-xs text-gray-400">{row.releasedAt}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => onVoid(row.id)}
                      className="rounded-md border border-red-200 px-2.5 py-1 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
                    >
                      Void Upload
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                      aria-label="View result"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
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
      </div>

      <button
        type="button"
        onClick={onViewAll}
        className="mt-3 text-sm font-semibold text-green-700 hover:text-green-800"
      >
        View All Recently Released Results →
      </button>
    </div>
  );
}