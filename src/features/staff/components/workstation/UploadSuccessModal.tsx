import { CheckCircle2, FileText } from "lucide-react";
import { Modal } from "@/shared/components/Modal";
import type { UploadedFile } from "../../workstation.types";

interface UploadSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: UploadedFile | null;
}

export function UploadSuccessModal({ isOpen, onClose, file }: UploadSuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} widthClassName="max-w-sm">
      <div className="flex flex-col items-center gap-4 px-6 py-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle2 className="h-8 w-8" strokeWidth={1.8} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Upload Successful!</h3>
          <p className="mt-1 text-sm text-gray-500">Your file has been uploaded successfully.</p>
        </div>

        {file && (
          <div className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-left">
            <FileText className="h-7 w-7 shrink-0 text-red-500" strokeWidth={1.5} />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-900">{file.name}</p>
              <p className="text-xs text-gray-500">{file.sizeLabel} · Uploaded just now</p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full rounded-lg bg-green-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          OK
        </button>
      </div>
    </Modal>
  );
}