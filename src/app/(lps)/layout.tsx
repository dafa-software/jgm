import Header from "../_components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header variant="landing-page" />
      <div className="pt-24">{children}</div>
    </main>
  );
}
