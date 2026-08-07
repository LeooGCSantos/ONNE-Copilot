import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/ui/Toast";
import MainLayout from "./layouts/MainLayout";
import OverviewPage from "./pages/OverviewPage";
import TicketsPage from "./pages/TicketsPage";
import DownloadsPage from "./pages/DownloadsPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import FinanceiroPage from "./pages/FinanceiroPage";
import SettingsPage from "./pages/SettingsPage";
import IAPage from "./pages/IAPage";
import RelatoriosPage from "./pages/RelatoriosPage";

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="downloads" element={<DownloadsPage />} />
            <Route path="kb" element={<KnowledgeBasePage />} />
            <Route path="financeiro" element={<FinanceiroPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="ia" element={<IAPage />} />
            <Route path="relatorios" element={<RelatoriosPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
