import { Bot } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import EmptyState from "../components/ui/EmptyState";

export default function IAPage() {
  return (
    <div>
      <PageHeader
        title="IA"
        description="Inteligência artificial do ONNE Copilot."
      />
      <EmptyState
        icon={Bot}
        title="IA em desenvolvimento"
        description="Aqui será a inteligência do ONNE Copilot."
      />
    </div>
  );
}
