export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center">
      <div className="max-w-6xl">{children}</div>
    </section>
  );
}
