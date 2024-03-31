import Footer from "../_components/footer";
import Header from "../_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header variant="default" />
      <div className="animate-fade-in-up">{children}</div>
      <Footer />
    </main>
  );
}
