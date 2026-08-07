export default function SidebarSection({ label, children }) {
  return (
    <div className={label ? "mt-6" : ""}>
      {label && (
        <p className="mb-2 px-3 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
          {label}
        </p>
      )}
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}
