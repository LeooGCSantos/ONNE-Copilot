import { useState } from "react";
import {
  Plus,
  Users,
  Shield,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Tabs from "../components/ui/Tabs";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import StatusBadge from "../components/ui/StatusBadge";
import EmptyState from "../components/ui/EmptyState";
import { reimbursementRequests } from "../data/financeiro";

const tabs = [
  { id: "analista", label: "Analista" },
  { id: "rh", label: "RH" },
  { id: "admin", label: "Admin" },
];

function AnalistaArea() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-[var(--text-primary)]">
          Solicitar reembolso
        </h2>
        <Button size="sm" onClick={() => setShowForm(!showForm)}>
          <Plus size={16} />
          Nova solicitação
        </Button>
      </div>

      {showForm && (
        <Card>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-[var(--text-muted)] mb-1.5 block">
                Descrição
              </label>
              <Input placeholder="Ex: Transporte — visita técnica" />
            </div>
            <div>
              <label className="text-xs text-[var(--text-muted)] mb-1.5 block">
                Valor (R$)
              </label>
              <Input placeholder="0,00" type="number" />
            </div>
            <div className="flex gap-2">
              <Button size="sm">Enviar solicitação</Button>
              <Button size="sm" variant="ghost" onClick={() => setShowForm(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div>
        <h2 className="text-sm font-medium text-[var(--text-primary)] mb-3">
          Histórico de solicitações
        </h2>
        <div className="space-y-2">
          {reimbursementRequests.map((req) => (
            <Card key={req.id} className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-[var(--text-muted)]">{req.id}</span>
                    <StatusBadge status={req.status} />
                  </div>
                  <p className="text-sm text-[var(--text-primary)]">{req.description}</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{req.date}</p>
                </div>
                <span className="text-sm font-medium text-[var(--text-primary)] shrink-0">
                  R$ {req.amount.toFixed(2)}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function RHArea() {
  return (
    <EmptyState
      icon={Users}
      title="Área RH"
      description="Funcionalidades de aprovação e gestão de reembolsos serão implementadas em breve. O controle de acesso será gerenciado por permissões."
    />
  );
}

function AdminArea() {
  return (
    <EmptyState
      icon={Shield}
      title="Área Admin"
      description="Painel administrativo financeiro com visão consolidada, relatórios e configurações será implementado em breve."
    />
  );
}

export default function FinanceiroPage() {
  const [activeTab, setActiveTab] = useState("analista");

  return (
    <div>
      <PageHeader
        title="Financeiro"
        description="Reembolsos, despesas e custos operacionais."
      />

      <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      <div className="mt-6">
        {activeTab === "analista" && <AnalistaArea />}
        {activeTab === "rh" && <RHArea />}
        {activeTab === "admin" && <AdminArea />}
      </div>
    </div>
  );
}
