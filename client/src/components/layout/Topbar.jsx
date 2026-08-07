import { Bell, ChevronDown } from "lucide-react";
import { SearchInput } from "../ui/Input";
import IconButton from "../ui/IconButton";
import Avatar from "../ui/Avatar";

export default function Topbar() {
  return (
    <header className="flex h-[var(--topbar-height)] shrink-0 items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-6">
      <SearchInput
        placeholder="Pesquisar..."
        shortcut="⌘K"
        className="w-80"
      />

      <div className="flex items-center gap-2">
        <IconButton icon={Bell} label="Notificações" />

        <button className="flex items-center gap-2.5 rounded-[var(--radius-sm)] px-2 py-1.5 transition-[background] duration-150 hover:bg-[var(--bg-hover)]">
          <Avatar name="Leonardo" size="sm" />
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium text-[var(--text-primary)] leading-tight">
              Leonardo
            </p>
            <p className="text-[11px] text-[var(--text-muted)] leading-tight">
              ONNE Tecnologia
            </p>
          </div>
          <ChevronDown size={14} className="text-[var(--text-muted)]" />
        </button>
      </div>
    </header>
  );
}
