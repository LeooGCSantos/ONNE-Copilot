import {
  LayoutDashboard,
  Ticket,
  Download,
  BookOpen,
  Wallet,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    items: [
      { to: "/", label: "Overview", icon: LayoutDashboard, end: true },
    ],
  },
  {
    label: "Workspace",
    items: [
      { to: "/tickets", label: "Tickets", icon: Ticket },
      { to: "/downloads", label: "Downloads", icon: Download },
      { to: "/kb", label: "Knowledge Base", icon: BookOpen },
    ],
  },
  {
    items: [
      { to: "/financeiro", label: "Financeiro", icon: Wallet },
    ],
  },
];

export const footerNavigation = [
  { to: "/settings", label: "Settings", icon: Settings },
];
