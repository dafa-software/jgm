export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl">{children}</div>
    </div>
  );
}
