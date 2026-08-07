import { navigation, footerNavigation } from "../../config/navigation";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import SidebarSection from "./SidebarSection";
import SidebarNavItem from "./SidebarNavItem";

export default function Sidebar() {
  return (
    <aside className="flex w-[var(--sidebar-width)] shrink-0 flex-col border-r border-[var(--border-subtle)] bg-[var(--bg-surface)] h-screen sticky top-0">
      <div className="border-b border-[var(--border-subtle)] px-3 py-4">
        <WorkspaceSwitcher />
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-4">
        {navigation.map((section, index) => (
          <SidebarSection key={index} label={section.label}>
            {section.items.map((item) => (
              <SidebarNavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                end={item.end}
              />
            ))}
          </SidebarSection>
        ))}
      </div>

      <div className="border-t border-[var(--border-subtle)] px-2 py-3">
        {footerNavigation.map((item) => (
          <SidebarNavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </aside>
  );
}
