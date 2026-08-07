export default function Tabs({ tabs, active, onChange }) {
  return (
    <div className="flex gap-1 border-b border-[var(--border-subtle)]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
            active === tab.id
              ? "text-[var(--text-primary)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }`}
        >
          {tab.label}
          {active === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent)]" />
          )}
        </button>
      ))}
    </div>
  );
}
