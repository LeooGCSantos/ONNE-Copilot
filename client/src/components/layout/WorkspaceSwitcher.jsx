import { ChevronDown } from "lucide-react";

export default function WorkspaceSwitcher() {
  return (
    <button className="flex w-full items-center gap-2.5 rounded-[var(--radius-sm)] px-2 py-1.5 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-[background] duration-150">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white">
        O
      </div>
      <span className="flex-1 text-left truncate">ONNE Tecnologia</span>
      <ChevronDown size={14} className="text-[var(--text-muted)] shrink-0" />
    </button>
  );
}
