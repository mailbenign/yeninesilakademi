'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { PROGRAMS } from '@/lib/data';
import { Reveal, SectionHeading, Stagger, StaggerItem } from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import Image from "next/image";

export function Programs() {
  return (
    <section id="programlar" className="relative py-24 lg:py-32 bg-slate-50/60 dark:bg-navy-900/40 overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold-300/10 blur-3xl" />

      <div className="container-max section-padding relative">
        <SectionHeading
          eyebrow="Programlarımız"
          title={<>Her seviyeye uygun <span className="text-gradient">özel programlar</span></>}
          description="6. sınıftan 12. sınıf ve mezun grubuna kadar her aşama için bilimsel temelli, hedef odaklı hazırlık programları."
        />

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {PROGRAMS.map((program) => (
            <StaggerItem key={program.title} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white dark:bg-navy-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-navy-700/10 transition-all duration-500 hover:-translate-y-1.5">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                  {program.badge && (
                    <Badge className="absolute top-4 left-4 bg-gold-400 text-navy-900 border-transparent hover:bg-gold-400">
                      {program.badge}
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                      {program.grade}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {program.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-navy-700 dark:text-white/90">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-500/20">
                          <Check className="h-3 w-3 text-sky-600 dark:text-sky-400" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#iletisim"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 dark:text-white group/link"
                  >
                    Detaylar İçin Görüşelim
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Bottom gradient line */}
                <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-sky-400 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            </StaggerItem>
          ))}

          {/* CTA card — WhatsApp link with preset message */}
          <StaggerItem className="h-full">
            <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 flex flex-col justify-between min-h-[420px]">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl group-hover:bg-sky-500/30 transition-colors" />
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-gold-400/20 blur-3xl" />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-white">
                  Hangi programın sana uygun olduğunu bilmiyor musun?
                </h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Ücretsiz seviye tespit sınavımızla sana en uygun programı birlikte belirleyelim.
                </p>
              </div>
              <a
                href="#iletisim"
                className="relative inline-flex items-center justify-center gap-2 h-12 rounded-full bg-white text-navy-700 font-semibold hover:bg-gold-300 hover:text-navy-900 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Ücretsiz Seviye Tespiti
              </a>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
