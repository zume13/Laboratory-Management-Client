import { Fragment, useState } from "react";
import { ChevronDown, ChevronUp, UploadCloud } from "lucide-react";
import { Modal } from "@/shared/components/Modal";
import { TestCategoryBadge } from "./WorkstationBadges";
import type { PendingLabRequest } from "../../workstation.types";

interface PendingQueueModalProps {
  isOpen: boolean;
  onClose: () => void;
  requests: PendingLabRequest[];
  onDeleteRequest: (requestId: string) => void;
}

export function PendingQueueModal({ isOpen, onClose, requests, onDeleteRequest }: PendingQueueModalProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Manage Pending Queue" widthClassName="max-w-2xl">
      <div className="max-h-[70vh] overflow-y-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-6 py-3">Date/Time</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Test Category</th>
              <th className="w-10" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requests.map((request) => {
              const isExpanded = expandedId === request.id;
              return (
                <Fragment key={request.id}>
                  <tr
                    onClick={() => setExpandedId(isExpanded ? null : request.id)}
                    className="cursor-pointer transition-colors hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-xs text-gray-500">{request.requestedAt}</td>
                    <td className="px-6 py-3">
                      <p className="font-medium text-gray-900">{request.patientName}</p>
                      <p className="text-xs text-gray-400">{request.patientId}</p>
                    </td>
                    <td className="px-6 py-3">
                      <TestCategoryBadge category={request.testCategory} />
                    </td>
                    <td className="px-6 py-3 text-gray-400">
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="bg-gray-50">
                      <td colSpan={4} className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-700"
                          >
                            <UploadCloud className="h-4 w-4" />
                            Upload Laboratory Result
                          </button>
                          <button
                            type="button"
                            onClick={() => onDeleteRequest(request.id)}
                            className="rounded-md border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                          >
                            Delete Request
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>

        {requests.length === 0 && (
          <p className="px-6 py-10 text-center text-sm text-gray-400">No pending requests in queue.</p>
        )}
      </div>

      <div className="flex justify-end border-t border-gray-200 px-6 py-4">
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