export default function IconButton({ icon: Icon, label, className = "", ...props }) {
  return (
    <button
      aria-label={label}
      className={`flex items-center justify-center p-2 rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-[color,background] duration-150 ${className}`}
      {...props}
    >
      <Icon size={18} />
    </button>
  );
}
