const variants = {
  open: "bg-blue-500/15 text-blue-400",
  in_progress: "bg-amber-500/15 text-amber-400",
  resolved: "bg-emerald-500/15 text-emerald-400",
  pending: "bg-[var(--bg-active)] text-[var(--text-secondary)]",
  approved: "bg-emerald-500/15 text-emerald-400",
  rejected: "bg-red-500/15 text-red-400",
};

const labels = {
  open: "Aberto",
  in_progress: "Em andamento",
  resolved: "Resolvido",
  pending: "Pendente",
  approved: "Aprovado",
  rejected: "Rejeitado",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${variants[status] || variants.pending}`}
    >
      {labels[status] || status}
    </span>
  );
}
