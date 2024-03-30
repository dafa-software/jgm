export default function SuspenseLoader() {
  return (
    <div className="flex h-96 w-full animate-pulse flex-col gap-3 md:flex-row">
      <div className="w-1/3 rounded-md bg-gray-300"></div>
      <div className="w-1/3 rounded-md bg-gray-300"></div>
      <div className="w-1/3 rounded-md bg-gray-300"></div>
    </div>
  );
}
