import { BarChart3 } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import EmptyState from "../components/ui/EmptyState";

export default function RelatoriosPage() {
  return (
    <div>
      <PageHeader
        title="Relatórios"
        description="Métricas e indicadores do sistema."
      />
      <EmptyState
        icon={BarChart3}
        title="Relatórios em desenvolvimento"
        description="Métricas do sistema aparecerão aqui."
      />
    </div>
  );
}
