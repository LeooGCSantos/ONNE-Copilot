import { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Folder,
  Upload,
  FileText,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import { kbCategories, kbFolders } from "../data/knowledgeBase";

export default function KnowledgeBasePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFolders = useMemo(() => {
    return kbFolders.filter((folder) => {
      const matchSearch = folder.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategory === "all" || folder.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <div>
      <PageHeader
        title="Knowledge Base"
        description="Documentações e guias da equipe."
        actions={
          <Button>
            <Upload size={16} />
            Upload
          </Button>
        }
      />

      <Input
        icon={Search}
        placeholder="Pesquisar documentos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />

      <div className="flex gap-6">
        <div className="w-56 shrink-0">
          <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
            Categorias
          </h3>
          <div className="space-y-0.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`w-full text-left px-3 py-2 text-sm rounded-[var(--radius-sm)] transition-colors ${
                activeCategory === "all"
                  ? "bg-[var(--bg-active)] text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
              }`}
            >
              Todas
            </button>
            {kbCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-[var(--radius-sm)] transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[var(--bg-active)] text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs text-[var(--text-muted)]">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider mb-3">
            Pastas
          </h3>

          {filteredFolders.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="Nenhuma pasta encontrada"
              description="Ajuste a pesquisa ou selecione outra categoria."
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredFolders.map((folder) => (
                <Card key={folder.id} hoverable className="cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--bg-active)]">
                      <Folder size={20} className="text-[var(--text-secondary)]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-medium text-[var(--text-primary)] truncate">
                        {folder.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <FileText size={12} className="text-[var(--text-muted)]" />
                        <span className="text-xs text-[var(--text-muted)]">
                          {folder.documents} documentos
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        Atualizado em {folder.updatedAt}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
