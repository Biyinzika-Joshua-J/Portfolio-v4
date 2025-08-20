'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Copy, Check, Share2, Percent, Wallet, Link2, Users } from 'lucide-react';

const WA_NUMBER = '256784180208';

// utility: make a short human-readable code
function generateCode(name: string, phone: string) {
  const slug = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 10);
  const last4 = phone.replace(/\D/g, '').slice(-4);
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return [slug || 'ref', last4, rand].filter(Boolean).join('-');
}

export default function ReferralSection() {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [code, setCode] = React.useState('');
  const [copied, setCopied] = React.useState(false);

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://yourdomain.ug';
  const link = `${origin}/?ref=${encodeURIComponent(code || 'your-code')}`;

  const onGenerate = () => {
    const c = generateCode(name, phone);
    setCode(c);
    setCopied(false);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <section id="referral" className="relative isolate bg-gray-950 px-6 py-20 sm:py-28 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(234,88,12,0.18),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-orange-500/20 text-orange-200">Referral program</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Refer a business → Earn <span className="text-orange-300">20% commission</span>
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Share your link. When a business you referred becomes a paying customer, you earn a
          commission. Payouts via Mobile Money.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Steps */}
        <Card className="border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">How it works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/30 text-orange-200 text-xs font-semibold">
                  1
                </span>
                <div>
                  <p className="font-medium text-white flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-orange-300" /> Share your link or code
                  </p>
                  <p className="text-sm text-gray-300">Send it on WhatsApp, Instagram, or SMS.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/30 text-orange-200 text-xs font-semibold">
                  2
                </span>
                <div>
                  <p className="font-medium text-white flex items-center gap-2">
                    <Users className="h-4 w-4 text-orange-300" /> They sign up & become a paying
                    customer
                  </p>
                  <p className="text-sm text-gray-300">
                    We attribute the signup to your code or link.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/30 text-orange-200 text-xs font-semibold">
                  3
                </span>
                <div>
                  <p className="font-medium text-white flex items-center gap-2">
                    <Percent className="h-4 w-4 text-orange-300" /> You earn 20% commission
                  </p>
                  <p className="text-sm text-gray-300">
                    Payouts are made via MTN/Airtel Mobile Money.
                  </p>
                </div>
              </li>
            </ol>

            <Separator className="my-6 bg-white/10" />

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Percent className="mx-auto h-5 w-5 text-orange-300" />
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">Commission</p>
                <p className="text-lg font-semibold text-white">20%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Wallet className="mx-auto h-5 w-5 text-orange-300" />
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">Payout</p>
                <p className="text-lg font-semibold text-white">MoMo</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Link2 className="mx-auto h-5 w-5 text-orange-300" />
                <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">Tracking</p>
                <p className="text-lg font-semibold text-white">Link / Code</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link builder */}
        <Card className="border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-white">Get your referral link</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="ref-name" className="text-gray-200">
                  Your name
                </Label>
                <Input
                  id="ref-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane from Kampala"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Label htmlFor="ref-phone" className="text-gray-200">
                  WhatsApp number
                </Label>
                <Input
                  id="ref-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="2567…"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button onClick={onGenerate} className="bg-orange-600 hover:bg-orange-500">
                Generate code
              </Button>
              <Badge variant="outline" className="border-white/20 text-gray-200">
                {code || 'your-code'}
              </Badge>
            </div>

            <div className="mt-4">
              <Label className="text-gray-200">Your link</Label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
                <code className="block w-full overflow-x-auto whitespace-nowrap text-sm text-gray-200">
                  {link}
                </code>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" onClick={onCopy}>
                        {copied ? (
                          <Check className="h-4 w-4 text-green-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="text-xs">
                      {copied ? 'Copied!' : 'Copy link'}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-between">
            <Button asChild className="w-full sm:w-auto">
              <a href="#lead-form">Submit via form</a>
            </Button>
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <a href="/" target="_blank" rel="noreferrer">
                Request on WhatsApp
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-gray-400">
        * You earn 20% commission when a referred business becomes a paying customer. Tracking is
        based on your link or code. Full terms can be shared during onboarding.
      </p>
    </section>
  );
}

/*
 <a
               href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  `Hi! I want a referral link.\nName: ${name || ""}\nPhone: ${phone || ""}\nCode: ${code || "(to be generated)"}`
                )}`
            
            }
                target="_blank"
                rel="noreferrer"
              >
                Request on WhatsApp
              </a>
*/
