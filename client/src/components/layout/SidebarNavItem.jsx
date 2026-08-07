import { NavLink } from "react-router-dom";

export default function SidebarNavItem({ to, icon: Icon, label, end = false }) {
  const className = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-[var(--radius-sm)] text-[13px] transition-[background,color] duration-150 ${
      isActive
        ? "bg-[var(--bg-active)] text-[var(--text-primary)] font-medium"
        : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
    }`;

  return (
    <NavLink to={to} end={end} className={className}>
      <Icon size={18} className="shrink-0" />
      <span>{label}</span>
    </NavLink>
  );
}
