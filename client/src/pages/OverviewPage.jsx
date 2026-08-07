import {
  Ticket,
  MessageSquare,
  Clock,
  ThumbsUp,
  CreditCard,
  Zap,
  Activity,
  Building2,
  Tag,
} from "lucide-react";
import Card from "../components/ui/Card";
import StatCard from "../components/ui/StatCard";
import StatusBadge from "../components/ui/StatusBadge";
import {
  getGreeting,
  overviewStats,
  recentActivity,
  aiFeedback,
  topCategories,
  topCompanies,
  latestTickets,
} from "../data/overview";

const iconMap = {
  Ticket,
  MessageSquare,
  Clock,
  ThumbsUp,
  CreditCard,
  Zap,
};

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
          {getGreeting()}
        </h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Aqui está o resumo da sua operação de suporte.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewStats.map((stat) => (
          <StatCard
            key={stat.key}
            icon={iconMap[stat.icon]}
            label={stat.label}
            value={stat.value}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Activity size={18} className="text-[var(--text-muted)]" />
            <h2 className="text-sm font-medium text-[var(--text-primary)]">
              Atividade recente
            </h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)] last:border-0"
              >
                <div>
                  <p className="text-sm text-[var(--text-primary)]">{item.action}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.user}</p>
                </div>
                <span className="text-xs text-[var(--text-muted)]">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <ThumbsUp size={18} className="text-[var(--text-muted)]" />
            <h2 className="text-sm font-medium text-[var(--text-primary)]">
              Feedback da IA
            </h2>
          </div>
          <div className="space-y-3">
            {aiFeedback.map((item) => (
              <div
                key={item.id}
                className="py-2 border-b border-[var(--border-subtle)] last:border-0"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    Ticket {item.ticket}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      item.rating === "positive"
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.rating === "positive" ? "Positivo" : "Negativo"}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">{item.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Tag size={18} className="text-[var(--text-muted)]" />
            <h2 className="text-sm font-medium text-[var(--text-primary)]">
              Categorias mais utilizadas
            </h2>
          </div>
          <div className="space-y-3">
            {topCategories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-[var(--text-primary)]">{cat.name}</span>
                  <span className="text-xs text-[var(--text-muted)]">{cat.count}</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--bg-active)]">
                  <div
                    className="h-full rounded-full bg-[var(--accent)]"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={18} className="text-[var(--text-muted)]" />
            <h2 className="text-sm font-medium text-[var(--text-primary)]">
              Empresas mais atendidas
            </h2>
          </div>
          <div className="space-y-2">
            {topCompanies.map((company, index) => (
              <div
                key={company.name}
                className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)] last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[var(--text-muted)] w-4">{index + 1}</span>
                  <span className="text-sm text-[var(--text-primary)]">{company.name}</span>
                </div>
                <span className="text-xs text-[var(--text-muted)]">
                  {company.tickets} tickets
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center gap-2 mb-4">
          <Ticket size={18} className="text-[var(--text-muted)]" />
          <h2 className="text-sm font-medium text-[var(--text-primary)]">
            Últimos tickets
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Título</th>
                <th className="pb-3 font-medium">Empresa</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {latestTickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="border-b border-[var(--border-subtle)] last:border-0"
                >
                  <td className="py-3 text-[var(--text-muted)]">#{ticket.id}</td>
                  <td className="py-3 text-[var(--text-primary)]">{ticket.title}</td>
                  <td className="py-3 text-[var(--text-secondary)]">{ticket.company}</td>
                  <td className="py-3">
                    <StatusBadge status={ticket.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
