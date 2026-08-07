export default function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-[var(--radius-sm)] bg-[var(--bg-active)] ${className}`}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-5">
      <div className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-3 w-32" />
        </div>
        <Skeleton className="h-9 w-20" />
      </div>
    </div>
  );
}
