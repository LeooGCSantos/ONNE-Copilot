import { useState, useMemo } from "react";
import {
  Ticket,
  Search,
  Bot,
  History,
  ThumbsUp,
  ThumbsDown,
  X,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import StatusBadge from "../components/ui/StatusBadge";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import { tickets, ticketFilters } from "../data/tickets";

const priorityLabels = { high: "Alta", medium: "Média", low: "Baixa" };
const statusLabels = { all: "Todos", open: "Aberto", in_progress: "Em andamento", resolved: "Resolvido" };

export default function TicketsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      const matchSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.company.toLowerCase().includes(search.toLowerCase()) ||
        String(t.id).includes(search);
      const matchStatus = statusFilter === "all" || t.status === statusFilter;
      const matchPriority = priorityFilter === "all" || t.priority === priorityFilter;
      return matchSearch && matchStatus && matchPriority;
    });
  }, [search, statusFilter, priorityFilter]);

  const selectedTicket = selected
    ? tickets.find((t) => t.id === selected)
    : null;

  return (
    <div>
      <PageHeader
        title="Tickets"
        description="Gerenciamento de chamados de suporte técnico."
        actions={<Badge variant="accent">Extensão Chrome</Badge>}
      />

      <div className="flex gap-6">
        <div className={`flex-1 min-w-0 ${selectedTicket ? "hidden lg:block lg:max-w-[calc(100%-420px)]" : ""}`}>
          <Input
            icon={Search}
            placeholder="Pesquisar tickets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />

          <div className="flex flex-wrap gap-2 mb-4">
            {ticketFilters.status.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 text-xs font-medium rounded-[var(--radius-sm)] transition-colors ${
                  statusFilter === s
                    ? "bg-[var(--bg-active)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
                }`}
              >
                {statusLabels[s]}
              </button>
            ))}
            <span className="w-px h-6 bg-[var(--border-subtle)] mx-1 self-center" />
            {ticketFilters.priority.map((p) => (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`px-3 py-1.5 text-xs font-medium rounded-[var(--radius-sm)] transition-colors ${
                  priorityFilter === p
                    ? "bg-[var(--bg-active)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
                }`}
              >
                {p === "all" ? "Prioridade" : priorityLabels[p]}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              icon={Ticket}
              title="Nenhum ticket encontrado"
              description="Ajuste os filtros ou termos de pesquisa."
            />
          ) : (
            <div className="space-y-2">
              {filtered.map((ticket) => (
                <Card
                  key={ticket.id}
                  hoverable
                  className={`p-4 cursor-pointer ${
                    selected === ticket.id ? "border-[var(--accent)]" : ""
                  }`}
                  onClick={() => setSelected(ticket.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-[var(--text-muted)]">
                          #{ticket.id}
                        </span>
                        <StatusBadge status={ticket.status} />
                        <Badge>{priorityLabels[ticket.priority]}</Badge>
                      </div>
                      <h3 className="text-sm font-medium text-[var(--text-primary)] truncate">
                        {ticket.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">
                        {ticket.company} · {ticket.category}
                      </p>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] shrink-0">
                      {ticket.assignee}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {selectedTicket && (
          <div className="w-full lg:w-[400px] shrink-0">
            <Card className="sticky top-4 p-0 overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-[var(--border-subtle)]">
                <div>
                  <span className="text-xs text-[var(--text-muted)]">
                    #{selectedTicket.id}
                  </span>
                  <h2 className="text-sm font-medium text-[var(--text-primary)] mt-0.5">
                    {selectedTicket.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] lg:hidden"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status={selectedTicket.status} />
                  <Badge>{priorityLabels[selectedTicket.priority]}</Badge>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Resumo
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {selectedTicket.summary}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Bot size={14} className="text-[var(--accent)]" />
                    <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                      Resposta IA
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] bg-[var(--bg-active)] rounded-[var(--radius-sm)] p-3">
                    {selectedTicket.aiResponse}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <History size={14} className="text-[var(--text-muted)]" />
                    <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                      Histórico
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {selectedTicket.history.map((entry) => (
                      <div key={entry.id} className="text-xs">
                        <span className="text-[var(--text-primary)]">{entry.action}</span>
                        <span className="text-[var(--text-muted)]"> · {entry.user}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Feedback
                  </h3>
                  {selectedTicket.feedback ? (
                    <div className="flex items-start gap-2">
                      {selectedTicket.feedback.rating === "positive" ? (
                        <ThumbsUp size={14} className="text-emerald-400 mt-0.5" />
                      ) : (
                        <ThumbsDown size={14} className="text-red-400 mt-0.5" />
                      )}
                      <p className="text-sm text-[var(--text-secondary)]">
                        {selectedTicket.feedback.comment}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp size={14} /> Útil
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ThumbsDown size={14} /> Não útil
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
