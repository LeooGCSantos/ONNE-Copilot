import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-6">

      <div className="flex justify-center mb-10">
        <img
          src={logo}
          alt="ONNE Tecnologia"
          className="w-44"
        />
      </div>

      <nav className="space-y-2">

        <Link to="/">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            🏠 Dashboard
          </button>
        </Link>

        <Link to="/ia">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            🤖 IA
          </button>
        </Link>

        <Link to="/kb">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            📚 Base de Conhecimento
          </button>
        </Link>

        <Link to="/financeiro">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            💰 Financeiro
          </button>
        </Link>

        <Link to="/relatorios">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            📊 Relatórios
          </button>
        </Link>

        <Link to="/downloads">
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            ⬇ Downloads
          </button>
        </Link>

      </nav>

    </aside>
  );
}