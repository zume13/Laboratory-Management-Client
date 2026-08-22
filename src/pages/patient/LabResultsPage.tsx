import { useState } from "react";
import {
  FileText,
  CalendarDays,
  Eye,
  Download,
} from "lucide-react";

type ResultStatus = "Released" | "Pending";
type ResultFilter = "All" | ResultStatus;

const labResults = [
  {
    id: 1,
    test: "Complete Blood Count",
    date: "August 18, 2026",
    status: "Released" as ResultStatus,
  },
  {
    id: 2,
    test: "Lipid Profile",
    date: "August 15, 2026",
    status: "Released" as ResultStatus,
  },
  {
    id: 3,
    test: "Fasting Blood Sugar",
    date: "August 12, 2026",
    status: "Released" as ResultStatus,
  },
  {
    id: 4,
    test: "Urinalysis",
    date: "August 22, 2026",
    status: "Pending" as ResultStatus,
  },
];

const filters: ResultFilter[] = [
  "All",
  "Released",
  "Pending",
];

export function LabResultsPage() {
  const [activeFilter, setActiveFilter] =
    useState<ResultFilter>("All");

  const filteredResults =
    activeFilter === "All"
      ? labResults
      : labResults.filter(
          (result) => result.status === activeFilter
        );

  // Sort newest date first
  const sortedResults = [...filteredResults].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Lab Results
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          View your laboratory test results and reports.
        </p>
      </div>

      {/* Results */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-green-700" />

          <h2 className="text-lg font-semibold text-gray-900">
            Laboratory Results
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          {/* Filters */}
          <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-white text-green-700 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <span className="text-sm text-gray-500">
              {sortedResults.length}{" "}
              {sortedResults.length === 1
                ? "result"
                : "results"}
            </span>
          </div>

          {/* Table */}
          {sortedResults.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 text-left">
                    {/* Laboratory Test */}
                    <th className="w-[38%] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Laboratory Test
                    </th>

                    {/* Date */}
                    <th className="w-[22%] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Date
                    </th>

                    {/* Status */}
                    <th className="w-[12%] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Status
                    </th>

                    {/* Actions */}
                    <th className="w-[28%] px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {sortedResults.map((result) => (
                    <tr
                      key={result.id}
                      className="transition-colors hover:bg-gray-50"
                    >
                      {/* Test */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                            <FileText className="h-4 w-4" />
                          </div>

                          <span className="truncate font-medium text-gray-900">
                            {result.test}
                          </span>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <CalendarDays className="h-4 w-4 shrink-0 text-gray-400" />

                          <span className="whitespace-nowrap">
                            {result.status === "Released"
                              ? `Released ${result.date}`
                              : `Collected ${result.date}`}
                          </span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                            result.status === "Released"
                              ? "bg-green-50 text-green-700"
                              : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {result.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-5">
                        <div className="flex items-center justify-end gap-2">
                          {result.status === "Released" ? (
                            <>
                              {/* Primary */}
                              <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800"
                              >
                                <Eye className="h-4 w-4" />

                                View Result
                              </button>

                              {/* Secondary */}
                              <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                              >
                                <Download className="h-4 w-4" />

                                Download
                              </button>
                            </>
                          ) : (
                            <span className="text-sm text-gray-400">
                              Result not yet available
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-10 text-center">
              <FileText className="mx-auto h-8 w-8 text-gray-400" />

              <p className="mt-3 text-sm font-medium text-gray-700">
                No {activeFilter.toLowerCase()} results
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Laboratory results matching this filter will
                appear here.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}