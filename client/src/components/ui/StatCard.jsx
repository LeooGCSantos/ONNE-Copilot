import Card from "./Card";

export default function StatCard({ icon: Icon, label, value, trend, trendLabel }) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--bg-active)]">
          <Icon size={18} className="text-[var(--text-secondary)]" />
        </div>
        {trend !== undefined && (
          <span
            className={`text-xs font-medium ${
              trend >= 0 ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {trend >= 0 ? "+" : ""}
            {trend}%
          </span>
        )}
      </div>
      <p className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{value}</p>
      <p className="mt-0.5 text-sm text-[var(--text-secondary)]">{label}</p>
      {trendLabel && (
        <p className="mt-1 text-xs text-[var(--text-muted)]">{trendLabel}</p>
      )}
    </Card>
  );
}
