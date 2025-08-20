'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, Wallet, Boxes, Check } from 'lucide-react';

// --- Types ---
export type TeaserPlan = {
  id: string;
  name: string;
  /** Early‑access launch price (what users can lock in now) */
  launchUGX: number;
  /** Regular price after launch (higher) */
  regularUGX: number;
  bullets: string[];
  popular?: boolean;
};

// --- Helpers ---
const fmtUSh = (n: number) => `USh ${n.toLocaleString('en-UG')}`;

// --- Data ---
const teaserPlans: TeaserPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    launchUGX: 50_000,
    regularUGX: 70_000,
    bullets: ['WhatsApp checkout', 'MoMo & cards', 'Inventory basics']
  },
  {
    id: 'growth',
    name: 'Growth',
    launchUGX: 100_000,
    regularUGX: 130_000,
    bullets: ['Everything in Starter', 'Low‑stock alerts', 'Custom domain'],
    popular: true
  },
  {
    id: 'pro',
    name: 'Pro',
    launchUGX: 150_000,
    regularUGX: 180_000,
    bullets: ['Priority support', 'Bulk uploads', 'Advanced analytics']
  }
];

function TeaserCard({ p }: { p: TeaserPlan }) {
  const savings = Math.max(0, p.regularUGX - p.launchUGX);
  return (
    <div
      className={`group relative min-w-[280px] rounded-[28px] p-[1.5px] ${
        p.popular
          ? 'bg-gradient-to-br from-indigo-400/60 via-fuchsia-400/40 to-transparent'
          : 'bg-white/10'
      }`}
    >
      {/* Popular ribbon */}
      {p.popular && (
        <span className="absolute -top-3 right-4 z-10 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow ring-1 ring-white/20">
          Popular
        </span>
      )}

      <Card className="h-full rounded-[26px] border-white/10 bg-slate-900/60 backdrop-blur-xl transition-colors group-hover:bg-slate-900/75">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-semibold text-white">
            <span
              className={
                p.popular
                  ? 'bg-gradient-to-r from-indigo-200 to-fuchsia-200 bg-clip-text text-transparent'
                  : ''
              }
            >
              {p.name}
            </span>
          </CardTitle>

          {/* Dual price row */}
          <div className="mt-2 grid grid-cols-2 items-end gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-indigo-200">Now (launch)</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold leading-none text-white sm:text-4xl">
                  {fmtUSh(p.launchUGX)}
                </span>
                <span className="translate-y-1 text-[11px] text-gray-400">/month</span>
              </div>
              {savings > 0 && (
                <span className="mt-2 inline-flex items-center rounded-full bg-emerald-600/25 px-2.5 py-1 text-[11px] font-medium text-emerald-200 ring-1 ring-emerald-500/30">
                  Save {fmtUSh(savings)} / mo
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-[11px] uppercase tracking-wide text-gray-400">After launch</p>
              <div className="flex items-baseline justify-end gap-2">
                <span className="text-base text-gray-400 line-through">{fmtUSh(p.regularUGX)}</span>
                <span className="translate-y-0.5 text-[11px] text-gray-500">/month</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <ul className="mt-3 space-y-2.5 text-[15px] text-slate-200">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 flex-none text-indigo-300" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PricingTeaserSection() {
  return (
    <section
      id="pricing-teaser"
      className="relative isolate bg-gray-950 px-6 py-16 sm:py-20 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-indigo-600/30 text-indigo-200">Launch pricing</Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Lock in <span className="text-indigo-300">early‑access pricing</span>
        </h2>
        <p className="mt-2 text-sm text-gray-300">
          All plans include hosting,{' '}
          <span className="inline-flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            WhatsApp‑first checkout
          </span>
          ,{' '}
          <span className="inline-flex items-center gap-1 ml-2">
            <Wallet className="h-4 w-4" /> Mobile Money & cards
          </span>
          , and{' '}
          <span className="inline-flex items-center gap-1 ml-2">
            <Boxes className="h-4 w-4" /> inventory tools
          </span>
          .
        </p>
      </div>

      {/* Horizontal scroll on mobile; 3-column grid on desktop */}
      <div className="mx-auto mt-6 max-w-6xl">
        <div className="flex gap-5 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {teaserPlans.map((p) => (
            <TeaserCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-xl">
        <Separator className="my-4 bg-white/10" />
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500">
            <a href="#lead-form">Join Early Access</a>
          </Button>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <a href="#pricing">See full pricing</a>
          </Button>
        </div>
        <p className="mt-3 text-center text-xs text-gray-400">
          Early‑access prices apply while spots last. After launch, regular pricing goes into
          effect.
        </p>
      </div>
    </section>
  );
}
