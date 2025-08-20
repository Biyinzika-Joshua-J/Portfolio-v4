'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  MessagesSquare,
  ClipboardList,
  Store,
  Rocket,
  Wallet,
  Phone,
  Clock3,
  ShieldCheck
} from 'lucide-react';

// ---------- Types ----------
export type Step = {
  id: number;
  title: string;
  desc: string;
  icon: React.ElementType;
  cta?: { label: string; href: string };
};

const WA_NUMBER = '256784180208';

// ---------- Data (rendered from arrays) ----------
const steps: Step[] = [
  {
    id: 1,
    title: 'Join Early Access',
    desc: "Fill the short form or tap WhatsApp to start. We'll collect your business name and contacts.",
    icon: MessagesSquare,
    cta: { label: 'Join Early Access', href: '#lead-form' }
  },
  {
    id: 2,
    title: 'We set up your store',
    desc: 'Branding, products, inventory rules, and payments — all configured for you.',
    icon: ClipboardList
  },
  {
    id: 3,
    title: 'Go live in 48 hours',
    desc: 'We QA everything and publish. You get links for WhatsApp, Instagram, and TikTok bios.',
    icon: Rocket
  },
  {
    id: 4,
    title: 'Get paid',
    desc: 'MTN MoMo, Airtel Money, and cards. Cash‑on‑delivery optional.',
    icon: Wallet
  }
];

// ---------- Components ----------
function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <Card className="group relative border-white/10 bg-white/5 backdrop-blur transition hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-300">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-base text-white">{step.title}</CardTitle>
          <Badge className="ml-auto rounded-full bg-white/10 text-xs text-gray-200">
            Step {step.id}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-300">{step.desc}</p>
        {step.cta && (
          <div className="mt-4">
            <Button asChild size="sm">
              <a href={step.cta.href}>{step.cta.label}</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative isolate bg-gray-950 px-6 py-20 sm:py-28 lg:px-8">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-indigo-600/30 text-indigo-200">Simple process</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 text-base text-gray-300">
          A done‑for‑you flow built for Ugandan businesses.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left: Steps timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-400/30 to-transparent" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="pl-8"
              >
                <StepCard step={step} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Details card */}
        <Card className="border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Store className="h-5 w-5 text-indigo-300" /> What we set up for you
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-400" /> Brand, colors, and store
                pages
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-400" /> Products and inventory
                rules (low‑stock alerts)
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-400" /> Payments: MTN MoMo,
                Airtel Money, and cards
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-400" /> WhatsApp‑first checkout
                with shareable links
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-indigo-400" /> Optional affiliate
                marketer onboarding
              </li>
            </ul>

            <Separator className="my-6 bg-white/10" />

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Clock3 className="mx-auto h-5 w-5 text-indigo-300" />
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">Avg setup</p>
                <p className="text-lg font-semibold text-white">48h</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Phone className="mx-auto h-5 w-5 text-indigo-300" />
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">Run on</p>
                <p className="text-lg font-semibold text-white">Your phone</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Wallet className="mx-auto h-5 w-5 text-indigo-300" />
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">Payouts</p>
                <p className="text-lg font-semibold text-white">MoMo & cards</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500">
                <a href="#lead-form">Join Early Access</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I want to start my store and join early access.')}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
