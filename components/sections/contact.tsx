'use client';

import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { CONTACT } from '@/lib/data';
import { SectionHeading, Reveal } from '@/components/reveal';

export function Contact() {
  return (
    <section id="iletisim" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="İletişim"
          title={<>Bize <span className="text-gradient">ulaşın</span></>}
          description="Sorularınız için iletişim bilgilerimizden bize ulaşabilirsiniz."
        />

        <div className="mt-14 max-w-4xl mx-auto space-y-6">
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
                  Google Haritalar&apos;da Aç
                </span>
              </div>
            </a>
          </Reveal>
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
