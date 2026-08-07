const variants = {
  default: "bg-[var(--bg-active)] text-[var(--text-secondary)]",
  accent: "bg-[var(--accent)]/15 text-[var(--accent)]",
  success: "bg-emerald-500/15 text-emerald-400",
  warning: "bg-amber-500/15 text-amber-400",
};

export default function Badge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
