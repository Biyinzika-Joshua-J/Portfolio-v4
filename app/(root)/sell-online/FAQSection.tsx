'use client';

import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  MessageCircle,
  Search,
  HelpCircle,
  Clock,
  Smartphone,
  Wallet,
  Box,
  Globe,
  ShieldCheck
} from 'lucide-react';

// Small helper to highlight search terms
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <>{text}</>;
  const parts = text.split(new RegExp(`(${query})`, 'ig'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="rounded bg-yellow-200/60 px-1 py-0.5 text-gray-900">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export type Faq = { q: string; a: React.ReactNode; icon?: React.ElementType };

const WA_NUMBER = '256784180208';

const faqs: Faq[] = [
  {
    q: 'Do I need a laptop to manage my store?',
    icon: Smartphone,
    a: (
      <p>
        No. You can set up and manage everything on your <strong>phone</strong>. The admin works
        great on mobile and lets you add products, see orders, and update stock.
      </p>
    )
  },
  {
    q: 'How do customers pay?',
    icon: Wallet,
    a: (
      <p>
        We support <strong>MTN MoMo</strong>, <strong>Airtel Money</strong>, and{' '}
        <strong>cards</strong>. Cash-on-delivery is optional. Diaspora payments are possible via
        cards/PayPal if enabled.
      </p>
    )
  },
  {
    q: 'Can I keep taking WhatsApp orders?',
    icon: MessageCircle,
    a: (
      <p>
        Yes. Your store is <strong>WhatsApp‑first</strong>. Share product links; customers can chat
        or checkout directly. Existing WhatsApp flows continue to work.
      </p>
    )
  },
  {
    q: 'How fast can I go live?',
    icon: Clock,
    a: (
      <p>
        Typically <strong>48 hours</strong> after we collect your brand details, products, and
        payment info.
      </p>
    )
  },
  {
    q: 'What about delivery & fulfillment?',
    icon: Box,
    a: (
      <p>
        You choose how to deliver. We support assigning riders and tracking delivery status. Cash on
        delivery is supported if you want it.
      </p>
    )
  },
  {
    q: 'Domains & SEO—can I use my own domain?',
    icon: Globe,
    a: (
      <p>
        Yes. You can use a custom domain and we generate <strong>SEO‑ready</strong> product pages
        and social share images for clean previews on WhatsApp/Instagram.
      </p>
    )
  },
  {
    q: 'Do you support affiliate marketers?',
    icon: ShieldCheck,
    a: (
      <p>
        Yes. Shops can onboard affiliate marketers and track referrals. Payouts can be made via
        Mobile Money.
      </p>
    )
  },
  {
    q: 'If I cancel, what happens to my data?',
    icon: HelpCircle,
    a: (
      <p>
        Your data is exportable. If you cancel, the store pauses and you can request an export of
        products and orders anytime.
      </p>
    )
  }
];

const quickFilters = ['payments', 'whatsapp', 'delivery', 'domain', 'affiliate', 'inventory'];

export default function FAQSection() {
  const [query, setQuery] = React.useState('');

  const filtered = React.useMemo(() => {
    if (!query) return faqs;
    const q = query.toLowerCase();
    return faqs.filter(
      (f) => f.q.toLowerCase().includes(q) || String(f.a).toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="faq" className="relative isolate bg-gray-950 px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(99,102,241,0.25),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Everything you need to know about launching your store in Uganda.
        </p>
      </div>

      {/* Search & quick filters */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: payments, WhatsApp, delivery…"
            className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {quickFilters.map((tag) => (
            <Badge
              key={tag}
              onClick={() => setQuery(tag)}
              className="cursor-pointer bg-white/10 text-gray-200 hover:bg-white/20"
            >
              {tag}
            </Badge>
          ))}
          {query && (
            <Button variant="ghost" size="sm" className="ml-auto" onClick={() => setQuery('')}>
              Clear
            </Button>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-indigo-200 text-sm">Answers</CardTitle>
          </CardHeader>
          <CardContent>
            {filtered.length === 0 ? (
              <div className="py-8 text-center text-gray-300">
                No results for <span className="font-semibold text-white">“{query}”</span>. Try a
                different term.
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filtered.map((faq, idx) => {
                  const Icon = faq.icon ?? HelpCircle;
                  return (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="border-b border-white/10"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-indigo-400" />
                          <span className="text-white">
                            <Highlight text={faq.q} query={query} />
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-200">
                        <div className="prose prose-invert max-w-none">
                          <p>
                            <Highlight text={String(faq.a as any)} query={query} />
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            )}
          </CardContent>
        </Card>

        <Separator className="my-10 bg-white/10" />

        {/* Contact strip */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/10 p-5 sm:flex-row">
          <div className="flex items-center gap-3 text-white">
            <MessageCircle className="h-5 w-5 text-green-400" />
            <div>
              <p className="font-medium">Still have questions?</p>
              <p className="text-sm text-gray-200">
                Chat with us on WhatsApp and we’ll help you choose a plan.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-green-600 hover:bg-green-500">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I have a question about the online store platform.')}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#lead-form">Join Early Access</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
