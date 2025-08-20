'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Phone, MessageCircle } from 'lucide-react';

const WA_NUMBER = '256784180208';

// ---------------- Schema ----------------
const leadSchema = z.object({
  name: z.string().min(2, 'Your name is required'),
  business: z.string().min(2, 'Business name is required'),
  phone: z
    .string()
    .min(7)
    .regex(/^(?:\+?256|0)?7\d{8}$/i, 'Use a valid UG WhatsApp number (e.g. 2567… or 07…)')
    .transform((v) => v.replace(/\D/g, '')),
  category: z.string().min(2, 'Select a category'),
  city: z.string().min(2, 'City/Area is required'),
  channel: z
    .string()
    .url('Add a valid link (Instagram/TikTok/WhatsApp)')
    .optional()
    .or(z.literal('')),
  monthlyOrders: z.string().optional(),
  wantEarlyAccess: z.boolean().refine((v) => v === true, {
    message: 'Please tick to join early access'
  }),
  wantsAffiliates: z.boolean().optional(),
  notes: z.string().max(400).optional(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional()
});

export type LeadFormValues = z.infer<typeof leadSchema>;

// ---------------- Data ----------------
const categories = [
  'Boutique / Fashion',
  'Restaurant / Food',
  'Electronics',
  'Cosmetics / Beauty',
  'Supermarket / Grocery',
  'Pharmacy',
  'Accessories',
  'Home & Decor',
  'Services',
  'Other'
];

const orderRanges = ['0 – 20 / month', '21 – 50 / month', '51 – 100 / month', '100+ / month'];

// ---------------- Helpers ----------------
function buildWhatsAppMessage(values: Partial<LeadFormValues>) {
  const lines = [
    'Hi! I want early access to the online store platform.',
    `Name: ${values.name ?? ''}`,
    `Business: ${values.business ?? ''}`,
    `WhatsApp: ${values.phone ?? ''}`,
    `Category: ${values.category ?? ''}`,
    `City/Area: ${values.city ?? ''}`,
    values.channel ? `Sales link: ${values.channel}` : undefined,
    values.monthlyOrders ? `Monthly orders: ${values.monthlyOrders}` : undefined,
    values.wantsAffiliates ? 'Interested in affiliate marketers: Yes' : undefined
  ].filter(Boolean);
  return encodeURIComponent(lines.join('\n'));
}

// ---------------- Component ----------------
export default function LeadFormSection() {
  const { toast } = useToast?.() ?? { toast: (o: any) => alert(o?.title || 'Submitted') };
  const [submitting, setSubmitting] = React.useState(false);
  const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: '',
      business: '',
      phone: '',
      category: '',
      city: '',
      channel: '',
      monthlyOrders: '',
      wantEarlyAccess: true,
      wantsAffiliates: false,
      notes: '',
      utm_source: params.get('utm_source') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined
    }
  });

  async function onSubmit(values: LeadFormValues) {
    setSubmitting(true);
    try {
      // Try to POST to your Next.js route (you'll implement `/api/lead` server-side)
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });

      if (!res.ok) throw new Error('Request failed');

      toast({ title: 'Thanks!', description: 'We got your details. We’ll contact you for setup.' });
      form.reset({ ...form.getValues(), name: '', business: '', phone: '' });
    } catch (e) {
      // Fallback: open WhatsApp prefilled
      const msg = buildWhatsAppMessage(values);
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    } finally {
      setSubmitting(false);
    }
  }

  const waHref = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(form.getValues())}`;

  return (
    <section id="lead-form" className="relative isolate bg-gray-950 px-6 py-20 sm:py-28 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_400px_at_50%_-10%,rgba(34,197,94,0.18),transparent_60%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mx-auto mb-3 bg-green-600/20 text-green-200">Early Access</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Join early access
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Fill the short form or chat on WhatsApp. We’ll set up your store and get you live in 48
          hours.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-4xl">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Tell us about your business</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="sm:col-span-1">
                <Label htmlFor="name" className="text-gray-200">
                  Your name
                </Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  {...form.register('name')}
                />
                <p className="mt-1 text-xs text-red-300">
                  {form.formState.errors.name?.message as string}
                </p>
              </div>
              <div className="sm:col-span-1">
                <Label htmlFor="business" className="text-gray-200">
                  Business name
                </Label>
                <Input
                  id="business"
                  placeholder="Kampala Boutique"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  {...form.register('business')}
                />
                <p className="mt-1 text-xs text-red-300">
                  {form.formState.errors.business?.message as string}
                </p>
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="phone" className="text-gray-200">
                  WhatsApp number
                </Label>
                <div className="mt-1 flex gap-2">
                  <Input
                    id="phone"
                    placeholder="2567… or 07…"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    {...form.register('phone')}
                  />
                  <Button type="button" variant="secondary" asChild>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" /> Chat
                    </a>
                  </Button>
                </div>
                <p className="mt-1 text-xs text-red-300">
                  {form.formState.errors.phone?.message as string}
                </p>
              </div>

              <div className="sm:col-span-1">
                <Label className="text-gray-200">Category</Label>
                <Select onValueChange={(v) => form.setValue('category', v)}>
                  <SelectTrigger className="mt-1 bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="mt-1 text-xs text-red-300">
                  {form.formState.errors.category?.message as string}
                </p>
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="city" className="text-gray-200">
                  City / Area
                </Label>
                <Input
                  id="city"
                  placeholder="Kampala, Kireka"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  {...form.register('city')}
                />
                <p className="mt-1 text-xs text-red-300">
                  {form.formState.errors.city?.message as string}
                </p>
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="channel" className="text-gray-200">
                  Link to current sales channel
                </Label>
                <Input
                  id="channel"
                  placeholder="https://instagram.com/… or WhatsApp link"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  {...form.register('channel')}
                />
                <p className="mt-1 text-xs text-red-300">
                  {form.formState.errors.channel?.message as string}
                </p>
              </div>

              <div className="sm:col-span-1">
                <Label className="text-gray-200">Monthly order range</Label>
                <Select onValueChange={(v) => form.setValue('monthlyOrders', v)}>
                  <SelectTrigger className="mt-1 bg-white/5 border-white/10 text-white">
                    <SelectValue placeholder="Select range (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {orderRanges.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2">
                <Label htmlFor="notes" className="text-gray-200">
                  Notes (optional)
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Anything else we should know?"
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                  {...form.register('notes')}
                />
              </div>

              <div className="sm:col-span-2 grid gap-3">
                <label className="flex items-center gap-3 text-sm text-gray-200">
                  <Checkbox
                    checked={form.watch('wantEarlyAccess')}
                    onCheckedChange={(v: any) => form.setValue('wantEarlyAccess', Boolean(v))}
                  />
                  I want early access and agree to be contacted about onboarding.
                </label>
                <label className="flex items-center gap-3 text-sm text-gray-200">
                  <Checkbox
                    checked={form.watch('wantsAffiliates')}
                    onCheckedChange={(v: any) => form.setValue('wantsAffiliates', Boolean(v))}
                  />
                  I’m interested in onboarding affiliate marketers for my shop.
                </label>
                <p className="text-xs text-red-300">
                  {form.formState.errors.wantEarlyAccess?.message as string}
                </p>
              </div>

              <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? 'Submitting…' : 'Join Early Access'}
                </Button>
                <Button type="button" variant="secondary" className="w-full sm:w-auto" asChild>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* hidden UTM fields */}
              <input type="hidden" {...form.register('utm_source')} />
              <input type="hidden" {...form.register('utm_campaign')} />
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Sticky bottom bar (mobile) */}
      <div className="sm:hidden">
        <div className="fixed bottom-4 left-0 right-0 z-40 mx-auto w-full max-w-md px-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur">
            <Button asChild className="flex-1">
              <a href="#lead-form">Join Early Access</a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
