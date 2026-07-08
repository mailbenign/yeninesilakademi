'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send, ExternalLink } from 'lucide-react';
import { CONTACT } from '@/lib/data';
import { SectionHeading, Reveal } from '@/components/reveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="iletisim" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="İletişim"
          title={<>Bize <span className="text-gradient">ulaşın</span></>}
          description="Sorularınız için buradayız. Formu doldurun veya iletişim bilgilerimizden bize ulaşın."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Left: info cards + map */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                <ContactCard icon={MapPin} title="Adres" value={CONTACT.address} href={CONTACT.addressMapsUrl} external />
                <ContactCard icon={Phone} title="Telefon" value={CONTACT.phone} href={CONTACT.phoneHref} />
                <ContactCard icon={Phone} title="Telefon" value={CONTACT.phone2} href={CONTACT.phone2Href} />
                <ContactCard icon={Clock} title="Çalışma Saatleri" value={CONTACT.hours} />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={CONTACT.addressMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 group"
              >
                <iframe
                  title="Yeni Nesil Akademi Konum"
                  src={CONTACT.mapsEmbed}
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors flex items-end justify-end p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium text-navy-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                    Google Haritalar'da Aç
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp ile Hızlı İletişim
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-navy-700 dark:text-white mb-5">
                  İletişim Formu
                </h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Adınız Soyadınız" className="h-12 rounded-xl" />
                  <Input type="tel" placeholder="Telefon numaranız" className="h-12 rounded-xl" />
                  <Textarea placeholder="Mesajınız" className="rounded-xl min-h-[120px]" />
                  <Button className="w-full h-12 rounded-xl bg-gradient-to-r from-navy-700 to-navy-900 text-white hover:from-navy-800 hover:to-navy-900 font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Gönder
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="group glass-card p-5 h-full hover:shadow-lg hover:shadow-navy-700/5 hover:-translate-y-0.5 transition-all">
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Icon className="h-5 w-5 text-gold-300" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
            {title}
          </p>
          <p className="text-sm text-navy-700 dark:text-white/90 leading-relaxed whitespace-pre-line">{value}</p>
        </div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="block">
      {content}
    </a>
  ) : content;
}
