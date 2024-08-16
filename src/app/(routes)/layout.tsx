import Footer from "../_components/footer";
import Header from "../_components/header";
import { Toaster } from "~/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header variant="transparent" />
      <Toaster />
      <div className="animate-fade-in-up">{children}</div>
      <Footer />
    </main>
  );
}
