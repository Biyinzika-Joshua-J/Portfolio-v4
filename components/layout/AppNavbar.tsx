import Link from 'next/link';

import { ThemeToggleButton } from '@/components/Theme/ThemeToggleButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' }
];

export default function AppNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-foreground"
        >
          Josh Codes
        </Link>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition hover:border-border hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}
