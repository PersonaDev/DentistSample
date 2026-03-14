import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pt-[88px] lg:pt-[104px]">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
