import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-screen bg-[var(--bg-base)]">
      <Sidebar />

      <div className="flex flex-1 flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto px-10 py-8">{children}</main>
      </div>
    </div>
  );
}
