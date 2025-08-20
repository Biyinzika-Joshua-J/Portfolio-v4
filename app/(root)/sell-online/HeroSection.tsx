'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Wallet, Boxes, Smartphone, Users } from 'lucide-react';
import Image from 'next/image';

const WA_NUMBER = '256784180208';

// ---- Countdown helpers ----
const TARGET_ISO = '2025-09-10T00:00:00+03:00'; // Sep 10, 2025 EAT (Kampala)

function getRemaining(target: Date) {
  const diff = +target - Date.now();
  if (diff <= 0) return { over: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { over: false, days, hours, minutes, seconds };
}

function Segment({ label, value }: { label: string; value: number }) {
  const v = value.toString().padStart(2, '0');
  return (
    <div className="min-w-[70px] rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-center backdrop-blur">
      <div className="text-2xl font-semibold leading-none text-white sm:text-3xl">{v}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-300">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const [state, setState] = React.useState(() => getRemaining(new Date(TARGET_ISO)));

  React.useEffect(() => {
    const t = setInterval(() => setState(getRemaining(new Date(TARGET_ISO))), 1000);
    return () => clearInterval(t);
  }, []);

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hi! I want early access to the online store platform.'
  )}`;

  return (
    <header id="hero" className="relative isolate overflow-hidden bg-gray-950">
      {/* Background shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl"
      />

      <div className="mx-auto flex max-w-7xl flex-col-reverse gap-10 px-6 pb-16 pt-20 sm:pt-24 lg:flex-row lg:items-center lg:px-8 lg:pb-24 lg:pt-28">
        {/* Left: Copy & CTAs */}
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-indigo-600/20 text-indigo-200">Early Access</Badge>
            <Badge variant="outline" className="border-white/20 text-gray-200">
              Launch: 10 Sep 2025
            </Badge>
            <span className="text-xs text-gray-400">Limited spots</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Launch your online store in <span className="text-indigo-300">48 hours</span>.
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-300">
            We set it up. We host it. You sell via WhatsApp, Mobile Money & cards. Inventory
            management and affiliate marketer onboarding included.
          </p>

          {/* Countdown */}
          <div className="mt-6">
            <p className="mb-2 text-xs uppercase tracking-wide text-gray-300">
              Countdown to launch
            </p>
            {state.over ? (
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-emerald-200">
                We are <span className="font-semibold">live</span>! Join now to lock in your plan.
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Segment label="days" value={state.days} />
                <span className="text-xl text-gray-400">:</span>
                <Segment label="hours" value={state.hours} />
                <span className="text-xl text-gray-400">:</span>
                <Segment label="mins" value={state.minutes} />
                <span className="text-xl text-gray-400">:</span>
                <Segment label="secs" value={state.seconds} />
              </div>
            )}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-11 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500">
              <a href="#lead-form">Join Early Access</a>
            </Button>
            <Button asChild variant="secondary" className="h-11 w-full sm:w-auto">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-300">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <Smartphone className="h-4 w-4 text-indigo-300" /> WhatsApp‑first checkout
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <Wallet className="h-4 w-4 text-indigo-300" /> Mobile Money & cards
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <Boxes className="h-4 w-4 text-indigo-300" /> Inventory
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1">
              <Users className="h-4 w-4 text-indigo-300" /> Affiliates
            </span>
          </div>
        </div>

        {/* Right: Visual mock */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          {/* phone silhouette */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto h-[auto]  rounded-[40px]">
              <Image
                src={'/hero-desktop.png'}
                alt="Hero"
                width={1000}
                height={1000}
                className="h-full w-full max-md:hidden"
              />
              <Image
                src={'/hero-mobile.png'}
                alt="Hero"
                width={1000}
                height={1000}
                className="h-full w-full md:hidden"
              />
            </div>
          </motion.div>
          {/* glow ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[48px] bg-[conic-gradient(from_120deg,rgba(99,102,241,0.35),rgba(217,70,239,0.25),transparent_35%)] blur-2xl"
          />
        </div>
      </div>
    </header>
  );
}
