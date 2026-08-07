import { useEffect, useState } from "react";

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/downloads")
      .then((res) => res.json())
      .then((data) => setDownloads(data))
      .catch((err) => console.error(err));
  }, []);

  const downloadsFiltrados = downloads.filter((arquivo) =>
    arquivo.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">
        Downloads
      </h1>

      <p className="text-slate-500 mb-6">
        Programas utilizados pela equipe.
      </p>

      <input
        type="text"
        placeholder="Pesquisar programa..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full p-3 mb-6 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <p className="mb-4">
        Total de arquivos: <strong>{downloadsFiltrados.length}</strong>
      </p>

      <div className="space-y-4">
        {downloadsFiltrados.map((arquivo, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-5 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">

              <div className="w-12 h-12 flex items-center justify-center text-3xl">
                📦
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  {arquivo.nome}
                </h2>

                <p className="text-gray-500 text-sm">
                  Programa disponível para download
                </p>
              </div>
            </div>

            <a
              href={arquivo.url}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition"
            >
              Baixar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}