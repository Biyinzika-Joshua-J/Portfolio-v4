'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote, MessageCircle } from 'lucide-react';

const WA_NUMBER = '256784180208';

// ---------- Data ----------
const stats = [
  { value: '48h', label: 'Average setup' },
  { value: '30+', label: 'Early‑access businesses' },
  { value: '99.9%', label: 'Uptime (last 90d)' }
];

const logos = [
  "K'la Boutique",
  'Salaama Foods',
  'Nansana Electronics',
  'Glow UG',
  'Lipala Grocery',
  'PharmaCare UG'
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  business: string;
  initials: string;
  rating?: number; // 1..5
};

const testimonials: Testimonial[] = [
  {
    quote:
      'We sold on WhatsApp for years. With the store, orders are organized and payments are smooth with MoMo.',
    name: 'Aisha N.',
    role: 'Owner',
    business: 'Kireka Boutique',
    initials: 'AN',
    rating: 5
  },
  {
    quote:
      'Setup was fast—two days. The inventory alerts stop us from overselling when things move quickly.',
    name: 'Robert M.',
    role: 'Manager',
    business: 'Nansana Electronics',
    initials: 'RM',
    rating: 5
  },
  {
    quote:
      "Sharing product links on Instagram DMs is easy now. Checkout is WhatsApp‑first so customers don't drop.",
    name: 'Doreen K.',
    role: 'Founder',
    business: 'Glow UG',
    initials: 'DK',
    rating: 5
  }
];

// ---------- Components ----------
function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-yellow-300 text-yellow-300' : 'text-gray-500'}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="min-w-[280px] border-white/10 bg-white/5 backdrop-blur">
      <CardHeader className="pb-0">
        <Stars rating={t.rating} />
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-gray-200">
          <Quote className="mr-2 inline h-4 w-4 translate-y-[-2px] text-indigo-300" />
          {t.quote}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-indigo-600/30 text-indigo-100">
              {t.initials}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium text-white">{t.name}</div>
            <div className="text-gray-400">
              {t.role} · {t.business}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="relative isolate bg-gray-950 px-6 py-20 sm:py-28 lg:px-8">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-indigo-600/30 text-indigo-200">Social proof</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Loved by growing shops in Uganda
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Join businesses already preparing to launch with WhatsApp‑first checkout, Mobile Money,
          and simple inventory.
        </p>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
          >
            <div className="text-3xl font-semibold text-white">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Logos / brand strip */}
      <div className="mx-auto mt-10 max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-3 text-center text-xs uppercase tracking-wide text-gray-400">
            Trusted by local brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-80 [filter:grayscale(100%)]">
            {logos.map((l) => (
              <span key={l} className="text-sm text-gray-300">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-8 max-w-6xl">
        <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {testimonials.map((t, i) => (
            <TestimonialCard t={t} key={i} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <Separator className="my-4 bg-white/10" />
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500">
            <a href="#lead-form">Join Early Access</a>
          </Button>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I want to hear how others are using the platform.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
