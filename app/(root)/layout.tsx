import AppNavbar from '@/components/layout/AppNavbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-background transition-colors">
      <AppNavbar />
      <div className="mx-auto min-h-[calc(100vh-73px)] max-w-7xl">{children}</div>
    </main>
  );
}
