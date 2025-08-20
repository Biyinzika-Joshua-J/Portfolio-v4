'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, MessageCircle } from 'lucide-react';

const WA_NUMBER = '256784180208';
const TARGET_ISO = '2025-09-10T00:00:00+03:00'; // Sep 10, 2025 (EAT)
const STORAGE_KEY = 'ribbon-dismissed-v1';

function daysLeft(target: Date) {
  const diff = +target - Date.now();
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function Ribbon() {
  const [hidden, setHidden] = React.useState<boolean>(false);
  const [dleft, setDleft] = React.useState<number>(() => daysLeft(new Date(TARGET_ISO)));

  React.useEffect(() => {
    // Restore hidden state
    if (typeof window !== 'undefined') {
      const v = window.localStorage.getItem(STORAGE_KEY);
      if (v === '1') setHidden(true);
    }
  }, []);

  React.useEffect(() => {
    const t = setInterval(() => setDleft(daysLeft(new Date(TARGET_ISO))), 60_000);
    return () => clearInterval(t);
  }, []);

  if (hidden) return null;

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I want early access and to lock in launch pricing.')}`;

  return (
    <div role="banner" className="sticky top-0 z-50">
      <div className="relative border-b border-white/10 bg-gradient-to-r from-indigo-600/20 via-indigo-500/15 to-fuchsia-500/20 backdrop-blur">
        {/* Decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-80%,rgba(99,102,241,0.35),transparent_60%)]"
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 text-xs sm:text-sm text-white/90">
            <Badge className="bg-indigo-600/30 text-indigo-100">Early Access</Badge>
            <span className="truncate">
              Launch: <span className="font-medium">10 Sep 2025</span>
            </span>
            <span className="hidden sm:inline text-white/70">•</span>
            <span className="hidden sm:inline text-white/80">
              Lock in launch pricing
              {dleft > 0 ? ` — ${dleft} day${dleft === 1 ? '' : 's'} left` : ''}
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button asChild size="sm" className="h-8">
              <a href="#lead-form">Join now</a>
            </Button>
            <Button asChild size="sm" variant="secondary" className="h-8">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </Button>
            <button
              aria-label="Dismiss announcement"
              onClick={() => {
                setHidden(true);
                try {
                  window.localStorage.setItem(STORAGE_KEY, '1');
                } catch {}
              }}
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
