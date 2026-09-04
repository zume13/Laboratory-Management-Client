import { useRef, useState, type DragEvent } from "react";
import { UploadCloud, FileText, Trash2, RefreshCw, Eye, Search, ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { TestCategoryBadge } from "./WorkstationBadges";
import type { PendingLabRequest, UploadedFile } from "../../workstation.types";

interface UploadFillingControlsPanelProps {
  pendingRequests: PendingLabRequest[];
  selectedRequestId: string | null;
  onSelectRequest: (requestId: string) => void;
  uploadedFile: UploadedFile | null;
  onFileSelected: (file: UploadedFile) => void;
  onFileRemoved: () => void;
  onRelease: () => void;
  isReleasing: boolean;
  onCreateMissingRequest: () => void;
}

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
}

export function UploadFillingControlsPanel({
  pendingRequests,
  selectedRequestId,
  onSelectRequest,
  uploadedFile,
  onFileSelected,
  onFileRemoved,
  onRelease,
  isReleasing,
  onCreateMissingRequest,
}: UploadFillingControlsPanelProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [requestFilter, setRequestFilter] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedRequest = pendingRequests.find((r) => r.id === selectedRequestId) ?? null;
  const filteredRequests = pendingRequests.filter((r) =>
    r.patientName.toLowerCase().includes(requestFilter.toLowerCase()),
  );

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".pdf")) return; // PdfPath.Create only accepts .pdf
    onFileSelected({ name: file.name, sizeLabel: formatFileSize(file.size) });
  }

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  const canRelease = Boolean(uploadedFile && selectedRequest) && !isReleasing;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <SectionHeader number={4} title="Upload & Filling Controls" />

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {/* Upload Module */}
        <div>
          <p className="mb-2 text-xs font-semibold text-gray-500">Upload Module</p>

          {uploadedFile ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="flex items-start gap-3">
                <FileText className="h-9 w-9 shrink-0 text-green-700" strokeWidth={1.5} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                  <p className="text-xs text-gray-500">{uploadedFile.sizeLabel} · Uploaded just now</p>
                  <div className="mt-2 flex items-center gap-4 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-1 text-gray-600 hover:text-green-700"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Replace file
                    </button>
                    <button type="button" className="flex items-center gap-1 text-gray-600 hover:text-green-700">
                      <Eye className="h-3.5 w-3.5" />
                      View File
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onFileRemoved}
                  className="rounded-md p-1 text-red-500 hover:bg-red-50"
                  aria-label="Remove file"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-10 text-center transition-colors ${
                isDragging ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-green-400"
              }`}
            >
              <UploadCloud className="h-8 w-8 text-green-700" strokeWidth={1.5} />
              <p className="text-sm font-medium text-gray-700">Drag & Drop Laboratory Result</p>
              <p className="text-xs text-gray-400">Attach PDF generated from MS Access</p>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {/* Filling Controls */}
        <div>
          <p className="mb-2 text-xs font-semibold text-gray-500">Filling Controls</p>
          <p className="mb-2 text-xs text-gray-500">Select Pending Laboratory Result</p>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((open) => !open)}
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-2.5 text-left text-sm ${
                selectedRequest
                  ? "border-green-300 bg-green-50"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {selectedRequest ? (
                <span className="flex items-center gap-2 text-gray-900">
                  <TestCategoryBadge category={selectedRequest.testCategory} />
                  <span className="font-medium">{selectedRequest.patientName}</span>
                  <span className="text-gray-400">· {selectedRequest.requestedAt}</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search or select pending laboratory result
                </span>
              )}
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="border-b border-gray-100 p-2">
                  <input
                    type="text"
                    autoFocus
                    value={requestFilter}
                    onChange={(e) => setRequestFilter(e.target.value)}
                    placeholder="Filter by patient name…"
                    className="w-full rounded-md border border-gray-200 px-2.5 py-1.5 text-sm focus:border-green-500 focus:outline-none"
                  />
                </div>
                <div className="max-h-56 overflow-y-auto">
                  {filteredRequests.length > 0 ? (
                    filteredRequests.map((request) => (
                      <button
                        key={request.id}
                        type="button"
                        onClick={() => {
                          onSelectRequest(request.id);
                          setIsDropdownOpen(false);
                          setRequestFilter("");
                        }}
                        className="flex w-full flex-col items-start gap-1 px-3 py-2.5 text-left text-sm hover:bg-gray-50"
                      >
                        <span className="flex w-full items-center justify-between">
                          <span className="font-medium text-gray-900">{request.patientName}</span>
                          <TestCategoryBadge category={request.testCategory} />
                        </span>
                        <span className="text-xs text-gray-400">{request.requestedAt}</span>
                      </button>
                    ))
                  ) : (
                    <p className="px-3 py-4 text-center text-sm text-gray-400">No pending requests match.</p>
                  )}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onCreateMissingRequest}
            className="mt-1.5 block text-xs font-medium text-green-700 hover:text-green-800"
          >
            Missing a request? Create one here.
          </button>

          <button
            type="button"
            disabled={!canRelease}
            onClick={onRelease}
            className="mt-4 w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isReleasing ? "Releasing…" : "Release Laboratory Result"}
          </button>
        </div>
      </div>
    </div>
  );
}