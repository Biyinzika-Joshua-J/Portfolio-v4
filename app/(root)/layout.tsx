export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-[#e6e6e6]">
      <div className="max-w-7xl mx-auto min-h-screen">{children}</div>
    </main>
  );
}
