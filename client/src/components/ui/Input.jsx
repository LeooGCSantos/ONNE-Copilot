import { Search } from "lucide-react";

export default function Input({
  icon: Icon,
  className = "",
  ...props
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
        />
      )}
      <input
        className={`w-full bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-sm)] py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-[border-color] duration-150 focus:border-[var(--accent)] ${
          Icon ? "pl-9 pr-3" : "px-3"
        } ${className}`}
        {...props}
      />
    </div>
  );
}

export function SearchInput({ shortcut, className = "", ...props }) {
  return (
    <div className={`relative ${className}`}>
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
      />
      <input
        className={`w-full bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-sm)] pl-9 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-[border-color] duration-150 focus:border-[var(--accent)] ${shortcut ? "pr-12" : "pr-3"}`}
        {...props}
      />
      {shortcut && (
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[var(--text-muted)] border border-[var(--border-default)] rounded px-1.5 py-0.5 font-mono">
          {shortcut}
        </kbd>
      )}
    </div>
  );
}
