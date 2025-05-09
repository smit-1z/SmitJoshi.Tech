
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
