export function getGreeting(name = "Leonardo") {
  const hour = new Date().getHours();
  let period = "Boa noite";
  if (hour < 12) period = "Bom dia";
  else if (hour < 18) period = "Boa tarde";
  return `${period}, ${name}.`;
}

export const overviewStats = [
  { key: "tickets", label: "Tickets analisados", value: "1.284", trend: 12, icon: "Ticket" },
  { key: "responses", label: "Respostas geradas", value: "3.562", trend: 8, icon: "MessageSquare" },
  { key: "time", label: "Tempo economizado", value: "142h", trend: 15, icon: "Clock" },
  { key: "approval", label: "Taxa de aprovação", value: "94,2%", trend: 2, icon: "ThumbsUp" },
  { key: "openrouter", label: "Consumo OpenRouter", value: "R$ 248,90", trend: -3, icon: "CreditCard" },
  { key: "tokens", label: "Tokens utilizados", value: "2,4M", trend: 18, icon: "Zap" },
];

export const recentActivity = [
  { id: 1, action: "Ticket #1042 resolvido", user: "Leonardo", time: "há 12 min" },
  { id: 2, action: "Resposta IA aprovada", user: "Ana", time: "há 28 min" },
  { id: 3, action: "Novo ticket criado", user: "Carlos", time: "há 45 min" },
  { id: 4, action: "Documento adicionado à KB", user: "Leonardo", time: "há 1h" },
  { id: 5, action: "Reembolso solicitado", user: "Marina", time: "há 2h" },
];

export const aiFeedback = [
  { id: 1, ticket: "#1042", rating: "positive", comment: "Resposta precisa e completa." },
  { id: 2, ticket: "#1038", rating: "positive", comment: "Boa sugestão de troubleshooting." },
  { id: 3, ticket: "#1035", rating: "negative", comment: "Faltou mencionar o procedimento de VPN." },
];

export const topCategories = [
  { name: "Rede / VPN", count: 342, percentage: 32 },
  { name: "E-mail", count: 218, percentage: 20 },
  { name: "Impressoras", count: 156, percentage: 15 },
  { name: "Software", count: 134, percentage: 13 },
  { name: "Hardware", count: 98, percentage: 9 },
];

export const topCompanies = [
  { name: "Empresa Alpha", tickets: 89 },
  { name: "Beta Corp", tickets: 67 },
  { name: "Gamma Ltda", tickets: 54 },
  { name: "Delta S.A.", tickets: 41 },
  { name: "Epsilon Tech", tickets: 38 },
];

export const latestTickets = [
  { id: 1045, title: "VPN não conecta após atualização", company: "Empresa Alpha", status: "open", priority: "high" },
  { id: 1044, title: "Outlook sincronização lenta", company: "Beta Corp", status: "in_progress", priority: "medium" },
  { id: 1043, title: "Impressora offline na filial", company: "Gamma Ltda", status: "in_progress", priority: "medium" },
  { id: 1042, title: "Acesso ao sistema ERP negado", company: "Delta S.A.", status: "resolved", priority: "high" },
  { id: 1041, title: "Instalação do FortiClient", company: "Epsilon Tech", status: "resolved", priority: "low" },
];
