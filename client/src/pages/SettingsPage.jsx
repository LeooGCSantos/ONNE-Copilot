import { useState } from "react";
import { ChevronRight } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import EmptyState from "../components/ui/EmptyState";
import { settingsSections } from "../data/settings";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState(null);

  const section = settingsSections.find((s) => s.id === activeSection);

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Configurações do sistema."
      />

      {!activeSection ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {settingsSections.map((item) => (
            <Card
              key={item.id}
              hoverable
              className="cursor-pointer"
              onClick={() => setActiveSection(item.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--bg-active)]">
                    <item.icon size={20} className="text-[var(--text-secondary)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-[var(--text-muted)] mt-1 shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setActiveSection(null)}
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] mb-4 transition-colors"
          >
            ← Voltar
          </button>
          <EmptyState
            icon={section.icon}
            title={section.title}
            description={`A seção "${section.title}" será configurável em breve.`}
          />
        </div>
      )}
    </div>
  );
}
