import { Info } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl relative">

        {/* Botão de informação */}
        <div className="absolute top-8 right-8 group">

          <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition flex items-center justify-center shadow">
            <Info size={18} />
          </button>

          <div className="absolute right-0 mt-3 w-96 rounded-xl bg-slate-900 text-white p-4 text-sm shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

            <h3 className="font-semibold text-base mb-2">
              Como funciona?
            </h3>

            <p className="text-slate-300 leading-6">
              O ONNE Copilot utiliza Inteligência Artificial para analisar o
              ticket informado, identificar possíveis causas, consultar a base
              de conhecimento da empresa e sugerir um passo a passo para
              resolução.
            </p>

            <p className="text-slate-400 mt-3">
              Futuramente a análise será feita automaticamente através da API
              do Tiflux, sem necessidade de preencher estes campos.
            </p>

          </div>

        </div>

        {/* Cabeçalho */}

        <h1 className="text-4xl font-bold text-blue-600">
          ONNE Copilot
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Assistente Inteligente
        </p>

        {/* Formulário */}

        <div className="space-y-5">

          <div>

            <label className="block text-sm font-medium mb-2">
              Empresa
            </label>

            <select className="w-full rounded-lg border border-gray-300 p-3 bg-white">
              <option value="">Selecione uma empresa...</option>

              <optgroup label="Grupo Corp">
                <option>Abordin</option>
                <option>GAAP</option>
                <option>ASAP</option>
                <option>IGNIS</option>
                <option>JFGRANJA</option>
              </optgroup>

              <option>Padis Advogados</option>
              <option>LK Advogados</option>
              <option>Agência Lema</option>
              <option>TGN Advogados</option>
              <option>Simões Ribeiro Advogados</option>
            </select>

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Título do Ticket
            </label>

            <input
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Ex: Erro 12157 - Guardião Itaú"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Descrição do Ticket
            </label>

            <textarea
              rows="6"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Cole aqui toda a descrição do ticket..."
            />

          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg p-4 transition">
            🔍 Analisar Ticket
          </button>

        </div>

      </div>
    </div>
  );
}