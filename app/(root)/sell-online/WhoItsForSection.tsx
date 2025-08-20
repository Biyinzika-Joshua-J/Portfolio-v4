'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  ShoppingBag,
  Utensils,
  Monitor,
  Sparkles,
  ShoppingCart,
  Pill,
  Scissors,
  Home,
  MessageCircle
} from 'lucide-react';

const WA_NUMBER = '256784180208';

type Audience = {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  chip?: string;
};

const audiences: Audience[] = [
  {
    id: 'boutique',
    title: 'Boutiques & fashion',
    desc: 'Post outfits on Instagram or WhatsApp Status and take orders in DMs? Turn it into a store with shareable product links.',
    icon: ShoppingBag,
    chip: 'Popular'
  },
  {
    id: 'food',
    title: 'Restaurants & food',
    desc: 'Menu pages, daily specials, and easy order links you can drop into WhatsApp groups.',
    icon: Utensils
  },
  {
    id: 'electronics',
    title: 'Electronics & gadgets',
    desc: 'Variants, stock levels, and clear pricing for phones, accessories, and repairs.',
    icon: Monitor
  },
  {
    id: 'beauty',
    title: 'Cosmetics & beauty',
    desc: 'Organize shades, bundles, and promos; let customers checkout via MoMo.',
    icon: Sparkles
  },
  {
    id: 'grocery',
    title: 'Supermarket & grocery',
    desc: 'High‑volume items with quick reorders and low‑stock alerts.',
    icon: ShoppingCart
  },
  {
    id: 'pharmacy',
    title: 'Pharmacies',
    desc: 'Manage inventory with notes and provide simple reorder links for regulars.',
    icon: Pill
  },
  {
    id: 'services',
    title: 'Salons & services',
    desc: 'Sell products, take bookings, and track referrals from your promoters.',
    icon: Scissors
  },
  {
    id: 'home',
    title: 'Home & decor',
    desc: 'Showcase collections neatly and share links in WhatsApp chats.',
    icon: Home
  }
];

function AudienceCard({ a }: { a: Audience }) {
  const Icon = a.icon;
  return (
    <Card className="group h-full border-white/10 bg-white/5 backdrop-blur transition hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-300">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-base text-white">{a.title}</CardTitle>
          {a.chip && <Badge className="ml-auto bg-white/10 text-xs text-gray-200">{a.chip}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-300">{a.desc}</p>
      </CardContent>
    </Card>
  );
}

export default function WhoItsForSection() {
  return (
    <section id="who-its-for" className="relative isolate bg-gray-950 px-6 py-20 sm:py-28 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-indigo-600/30 text-indigo-200">Who it’s for</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          If you sell on WhatsApp or Instagram, this is for you
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Built for Ugandan shops that want a simple store they can manage on a phone — with Mobile
          Money and WhatsApp‑first checkout.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map((a) => (
          <AudienceCard key={a.id} a={a} />
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        <Separator className="my-4 bg-white/10" />
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500">
            <a href="#lead-form">Join Early Access</a>
          </Button>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I want to know if your platform fits my business.')}`}
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
