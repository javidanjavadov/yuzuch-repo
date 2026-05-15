import { ReactNode } from "react";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell-grid flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
