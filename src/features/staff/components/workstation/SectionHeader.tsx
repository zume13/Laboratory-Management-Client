interface SectionHeaderProps {
  number: number;
  title: string;
  action?: React.ReactNode;
}

export function SectionHeader({ number, title, action }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700 text-xs font-semibold text-white">
          {number}
        </span>
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
      </div>
      {action}
    </div>
  );
}