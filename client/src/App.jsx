import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import IAPage from "./pages/IAPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import FinanceiroPage from "./pages/FinanceiroPage";
import RelatoriosPage from "./pages/RelatoriosPage";
import DownloadsPage from "./pages/DownloadsPage";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/ia" element={<IAPage />} />
          <Route path="/base" element={<KnowledgeBasePage />} />
          <Route path="/financeiro" element={<FinanceiroPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}