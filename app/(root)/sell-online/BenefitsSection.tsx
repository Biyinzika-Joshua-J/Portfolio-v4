'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Wallet,
  CreditCard,
  Boxes,
  Users,
  ShieldCheck,
  Globe,
  Sparkles
} from 'lucide-react';

// ---------- Types ----------
export type Benefit = {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  chip?: string;
};

// ---------- Data (rendered from arrays) ----------
const benefits: Benefit[] = [
  {
    id: 'whatsapp',
    title: 'WhatsApp‑first checkout',
    desc: 'Share product links, chat with customers, and let them checkout without friction.',
    icon: MessageSquare,
    chip: 'Frictionless'
  },
  {
    id: 'payments',
    title: 'Mobile Money & cards',
    desc: 'Accept MTN MoMo, Airtel Money, and cards. Diaspora-ready when you are.',
    icon: Wallet,
    chip: 'MoMo • Cards'
  },
  {
    id: 'inventory',
    title: 'Inventory on your phone',
    desc: 'Add products, manage stock, and get low‑stock alerts from anywhere.',
    icon: Boxes,
    chip: 'Real‑time'
  },
  {
    id: 'affiliates',
    title: 'Affiliate marketers support',
    desc: 'Onboard promoters, track referrals, and pay commissions via Mobile Money.',
    icon: Users,
    chip: 'Grow sales'
  },
  {
    id: 'hosting',
    title: 'Fast, secure hosting',
    desc: 'We handle uptime, backups, and security so you can focus on selling.',
    icon: ShieldCheck,
    chip: 'Managed'
  },
  {
    id: 'seo',
    title: 'Custom domain & SEO pages',
    desc: 'Use your own domain. Product pages are optimized for Google and social previews.',
    icon: Globe,
    chip: 'Discoverable'
  }
];

const metrics = [
  { label: 'interested businesses', value: '30+' },
  { label: 'avg setup time', value: '48h' },
  { label: 'uptime', value: '99.9%' }
];

// ---------- Components ----------
function BenefitCard({ b }: { b: Benefit }) {
  const Icon = b.icon;
  return (
    <Card className="group border-white/10 bg-white/5 backdrop-blur transition hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-300">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-base text-white">{b.title}</CardTitle>
          {b.chip && <Badge className="ml-auto bg-white/10 text-xs text-gray-200">{b.chip}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-300">{b.desc}</p>
      </CardContent>
    </Card>
  );
}

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative isolate bg-gray-950 px-6 py-20 sm:py-28 lg:px-8">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-indigo-600/30 text-indigo-200">Why shops choose us</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Benefits that actually help you sell
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Built for Ugandan businesses: WhatsApp‑first, MoMo‑ready, and easy to run on your phone.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <BenefitCard key={b.id} b={b} />
        ))}
      </div>

      {/* Trust metrics */}
      <div className="mx-auto mt-10 max-w-3xl">
        <Separator className="my-6 bg-white/10" />
        <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-indigo-300" />
                <span className="text-2xl font-semibold text-white">{m.value}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
        <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500">
          <a href="#lead-form">Join Early Access</a>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <a
            href={`https://wa.me/256784180208?text=${encodeURIComponent('Hi! I want to know more about the benefits.')}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
