'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const WA_NUMBER = '256784180208';

type FooterLink = { label: string; href: string };

const quickLinks: FooterLink[] = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Referral', href: '#referral' },
  { label: 'FAQ', href: '#faq' }
];

export default function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="relative isolate bg-gray-950 px-6 pt-16 pb-10 lg:px-8">
      {/* subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-20%,rgba(99,102,241,0.18),transparent_60%)]"
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand + tagline */}
          <div>
            <div className="text-white text-lg font-semibold">SellOnline UG</div>
            <p className="mt-2 text-sm text-gray-300">
              We set it up. We host it. You sell via WhatsApp, Mobile Money & cards.
            </p>
            <div className="mt-4 flex gap-2">
              <Button asChild className="bg-green-600 hover:bg-green-500">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi! I’d like to join early access.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#lead-form">Join Early Access</a>
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              Quick links
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" /> WhatsApp: +256 784 180 208
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-300" /> hello@yourdomain.ug
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-fuchsia-300" /> Kampala, Uganda
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-400 sm:flex-row">
          <p>© {year} SellOnline UG. All rights reserved.</p>
          <p>Built for Ugandan businesses. Uptime 99.9% • Avg setup 48h</p>
        </div>
      </div>
    </footer>
  );
}
