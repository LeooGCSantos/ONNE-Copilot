import { useEffect, useState } from "react";
import {
  Package,
  Download,
  Globe,
  Shield,
  FileText,
  Monitor,
  Trash2,
  Archive,
} from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import EmptyState from "../components/ui/EmptyState";
import { SkeletonCard } from "../components/ui/Skeleton";
import { useToast } from "../components/ui/Toast";

function getIcon(nome) {
  const key = nome.toLowerCase();
  if (key.includes("anydesk") || key.includes("remote")) return Monitor;
  if (key.includes("chrome") || key.includes("firefox")) return Globe;
  if (key.includes("acrobat") || key.includes("adobe")) return FileText;
  if (key.includes("forti") || key.includes("vpn")) return Shield;
  if (key.includes("ccleaner") || key.includes("clean")) return Trash2;
  if (key.includes("zip") || key.includes("7-zip")) return Archive;
  return Package;
}

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/downloads")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar downloads");
        return res.json();
      })
      .then((data) => setDownloads(data))
      .catch((err) => {
        console.error(err);
        setError(err.message);
        toast("Não foi possível carregar os downloads.", "error");
      })
      .finally(() => setLoading(false));
  }, []);

  const downloadsFiltrados = downloads.filter((arquivo) =>
    arquivo.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        title="Downloads"
        description="Programas utilizados pela equipe."
      />

      <Input
        icon={Download}
        placeholder="Pesquisar programa..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mb-6"
      />

      {!loading && !error && (
        <p className="mb-4 text-sm text-[var(--text-secondary)]">
          Total de arquivos:{" "}
          <strong className="text-[var(--text-primary)]">
            {downloadsFiltrados.length}
          </strong>
        </p>
      )}

      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {error && !loading && (
        <EmptyState
          icon={Package}
          title="Erro ao carregar downloads"
          description="Verifique se o servidor está em execução e tente novamente."
        />
      )}

      {!loading && !error && downloadsFiltrados.length === 0 && (
        <EmptyState
          icon={Package}
          title="Nenhum programa encontrado"
          description={
            busca
              ? "Tente ajustar os termos da pesquisa."
              : "Não há programas disponíveis no momento."
          }
        />
      )}

      {!loading && !error && downloadsFiltrados.length > 0 && (
        <div className="space-y-3">
          {downloadsFiltrados.map((arquivo, index) => {
            const Icon = getIcon(arquivo.nome);
            return (
              <Card key={index} hoverable className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--bg-active)]">
                    <Icon size={22} className="text-[var(--text-secondary)]" />
                  </div>
                  <div>
                    <h2 className="font-medium text-[var(--text-primary)]">
                      {arquivo.nome}
                    </h2>
                    <p className="text-sm text-[var(--text-muted)]">
                      Programa disponível para download
                    </p>
                  </div>
                </div>
                <a
                  href={arquivo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Baixar</Button>
                </a>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
