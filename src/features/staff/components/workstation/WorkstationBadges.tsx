import type { FileHistoryStatus, TestCategoryOption } from "../../workstation.types";
import { TEST_CATEGORY_BADGE_CLASSES } from "../../workstation.mockData";

export function TestCategoryBadge({ category }: { category: TestCategoryOption }) {
  const badgeClass = TEST_CATEGORY_BADGE_CLASSES[category.id] ?? "bg-gray-100 text-gray-600";

  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${badgeClass}`}>
      {category.name}
    </span>
  );
}

const STATUS_CLASSES: Record<FileHistoryStatus, string> = {
  Released: "bg-green-50 text-green-700",
  Pending: "bg-amber-50 text-amber-700",
};

export function FileHistoryStatusBadge({ status }: { status: FileHistoryStatus }) {
  return (
    <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-semibold ${STATUS_CLASSES[status]}`}>
      {status}
    </span>
  );
}