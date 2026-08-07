export default function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-elevated)] border border-[var(--border-default)]">
          <Icon size={22} className="text-[var(--text-muted)]" />
        </div>
      )}
      <h2 className="text-base font-medium text-[var(--text-primary)]">
        {title}
      </h2>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-[var(--text-secondary)]">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
