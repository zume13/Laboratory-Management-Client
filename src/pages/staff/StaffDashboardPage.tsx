import { useState } from "react";
import { RotateCcw, ClipboardList, Plus } from "lucide-react";
import { SecureSearchPanel } from "@/features/staff/components/workstation/SecureSearchPanel";
import { PatientVerificationCard } from "@/features/staff/components/workstation/PatientVerificationCard";
import { PatientFileHistoryTable } from "@/features/staff/components/workstation/PatientFileHistoryTable";
import { UploadFillingControlsPanel } from "@/features/staff/components/workstation/UploadFillingControlsPanel";
import { RecentlyReleasedResultsTable } from "@/features/staff/components/workstation/RecentlyReleasedResultsTable";
import { NewLabRequestModal } from "@/features/staff/components/workstation/NewLabRequestModal";
import { PendingQueueModal } from "@/features/staff/components/workstation/PendingQueueModal";
import { UploadSuccessModal } from "@/features/staff/components/workstation/UploadSuccessModal";
import { AdvancedSearchModal } from "@/features/staff/components/workstation/AdvancedSearchModal";
import {
  MOCK_FILE_HISTORY,
  MOCK_PENDING_REQUESTS,
  MOCK_RECENT_RESULTS,
  searchMockPatients,
} from "@/features/staff/workstation.mockData";
import type {
  PatientFileHistoryEntry,
  PatientSearchResult,
  PendingLabRequest,
  ReleasedResultRow,
  UploadedFile,
} from "@/features/staff/workstation.types";

export default function StaffDashboardPage() {
  // Secure search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<PatientSearchResult | null>(null);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);

  // Patient file history
  const [fileHistory] = useState<PatientFileHistoryEntry[]>(MOCK_FILE_HISTORY);

  // Upload & filling controls state
  const [pendingRequests, setPendingRequests] = useState<PendingLabRequest[]>(MOCK_PENDING_REQUESTS);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isReleasing, setIsReleasing] = useState(false);
  const [justReleasedFile, setJustReleasedFile] = useState<UploadedFile | null>(null);

  // Recently released results
  const [recentResults, setRecentResults] = useState<ReleasedResultRow[]>(MOCK_RECENT_RESULTS);

  // Modal visibility
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [isPendingQueueOpen, setIsPendingQueueOpen] = useState(false);
  const [isUploadSuccessOpen, setIsUploadSuccessOpen] = useState(false);

  const liveSearchResults = searchMockPatients(searchQuery).slice(0, 5);
  const allSearchResults = searchMockPatients(searchQuery);

  const patientFileHistory = selectedPatient
    ? fileHistory.filter((entry) => entry.patientId === selectedPatient.patientId)
    : [];

  function handleResetDashboard() {
    setSearchQuery("");
    setSelectedPatient(null);
    setSelectedRequestId(null);
    setUploadedFile(null);
  }

  function handleSelectPatient(patient: PatientSearchResult) {
    setSelectedPatient(patient);
    setSearchQuery("");
  }

  async function handleReleaseResult() {
    if (!uploadedFile || !selectedRequestId) return;
    const request = pendingRequests.find((r) => r.id === selectedRequestId);
    if (!request) return;

    setIsReleasing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      setRecentResults((prev) => [
        {
          id: `res-${Date.now()}`,
          dateTime: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
          patientName: request.patientName,
          patientId: request.patientId,
          testCategory: request.testCategory,
          releasedBy: "J.D. Muffin, RMT",
          releasedAt: new Date().toLocaleString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          }),
        },
        ...prev,
      ]);
      setPendingRequests((prev) => prev.filter((r) => r.id !== selectedRequestId));
      setJustReleasedFile(uploadedFile);
      setIsUploadSuccessOpen(true);
      setUploadedFile(null);
      setSelectedRequestId(null);
    } finally {
      setIsReleasing(false);
    }
  }

  function handleDeletePendingRequest(requestId: string) {
    setPendingRequests((prev) => prev.filter((r) => r.id !== requestId));
    if (selectedRequestId === requestId) setSelectedRequestId(null);
  }

  function handleVoidResult(resultId: string) {
    setRecentResults((prev) => prev.filter((r) => r.id !== resultId));
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <button
            type="button"
            onClick={handleResetDashboard}
            className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-gray-600"
          >
            <RotateCcw className="h-3 w-3" />
            Reset Dashboard
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPendingQueueOpen(true)}
            className="relative flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 hover:border-green-400 hover:text-green-700"
          >
            <ClipboardList className="h-4 w-4" />
            Pending Queue
            {pendingRequests.length > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                {pendingRequests.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsNewRequestModalOpen(true)}
            className="flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800"
          >
            <Plus className="h-4 w-4" />
            New Lab Request
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <SecureSearchPanel
          query={searchQuery}
          onQueryChange={setSearchQuery}
          results={liveSearchResults}
          totalMatchCount={allSearchResults.length}
          selectedPatient={selectedPatient}
          onSelectPatient={handleSelectPatient}
          onClearSelection={() => setSelectedPatient(null)}
          onViewAllResults={() => setIsAdvancedSearchOpen(true)}
          onRegisterNewPatient={() => {
          }}
        />

        <PatientVerificationCard patient={selectedPatient} onClear={() => setSelectedPatient(null)} />

        <PatientFileHistoryTable
          entries={patientFileHistory}
          hasSelectedPatient={Boolean(selectedPatient)}
          onViewAll={() => {
          }}
        />

        <UploadFillingControlsPanel
          pendingRequests={pendingRequests}
          selectedRequestId={selectedRequestId}
          onSelectRequest={setSelectedRequestId}
          uploadedFile={uploadedFile}
          onFileSelected={setUploadedFile}
          onFileRemoved={() => setUploadedFile(null)}
          onRelease={handleReleaseResult}
          isReleasing={isReleasing}
          onCreateMissingRequest={() => setIsNewRequestModalOpen(true)}
        />

        <RecentlyReleasedResultsTable
          results={recentResults}
          onVoid={handleVoidResult}
          onViewAll={() => {
          }}
        />
      </div>

      <NewLabRequestModal
        isOpen={isNewRequestModalOpen}
        onClose={() => setIsNewRequestModalOpen(false)}
        initialPatient={selectedPatient}
        onCreateRequest={({ patient, testCategoryId }) => {
          void patient;
          void testCategoryId;
        }}
        onSaveAsPending={({ patient, testCategoryId }) => {
          const category = pendingRequests[0]?.testCategory; // placeholder lookup
          setPendingRequests((prev) => [
            {
              id: `req-${Date.now()}`,
              patientId: patient.patientId,
              patientName: patient.fullName,
              testCategory: category ?? { id: testCategoryId, name: testCategoryId },
              requestedAt: "Just now",
            },
            ...prev,
          ]);
        }}
      />

      <PendingQueueModal
        isOpen={isPendingQueueOpen}
        onClose={() => setIsPendingQueueOpen(false)}
        requests={pendingRequests}
        onDeleteRequest={handleDeletePendingRequest}
      />

      <UploadSuccessModal
        isOpen={isUploadSuccessOpen}
        onClose={() => setIsUploadSuccessOpen(false)}
        file={justReleasedFile}
      />

      <AdvancedSearchModal
        isOpen={isAdvancedSearchOpen}
        onClose={() => setIsAdvancedSearchOpen(false)}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        results={allSearchResults}
        totalMatchCount={allSearchResults.length}
        onSelectPatient={handleSelectPatient}
      />
    </div>
  );
}