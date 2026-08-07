import {
  Users,
  Shield,
  Building2,
  Cpu,
  Bot,
  Plug,
} from "lucide-react";

export const settingsSections = [
  {
    id: "usuarios",
    title: "Usuários",
    description: "Gerenciar contas e acessos da equipe.",
    icon: Users,
  },
  {
    id: "permissoes",
    title: "Permissões",
    description: "Configurar perfis e níveis de acesso.",
    icon: Shield,
  },
  {
    id: "empresas",
    title: "Empresas",
    description: "Cadastro de empresas atendidas.",
    icon: Building2,
  },
  {
    id: "openrouter",
    title: "OpenRouter",
    description: "Configuração de API e limites de consumo.",
    icon: Cpu,
  },
  {
    id: "modelos",
    title: "Modelos de IA",
    description: "Seleção e parâmetros dos modelos.",
    icon: Bot,
  },
  {
    id: "integracoes",
    title: "Integrações",
    description: "Conexões com sistemas externos.",
    icon: Plug,
  },
];
