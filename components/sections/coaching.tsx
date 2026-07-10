'use client';

import { motion } from 'framer-motion';
import { COACHING_STEPS } from '@/lib/data';
import { Reveal, SectionHeading, Stagger, StaggerItem } from '@/components/reveal';

export function Coaching() {
  return (
    <section id="akademik-kocluk" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: image + heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Koçluk"
              title={<>Hedeften başarıya <span className="text-gradient">6 adımlık yolculuk</span></>}
              description="Akademik koçluk sistemimiz, öğrencinin hedefini belirleyip lise veya üniversiteye yerleşmesine kadar tüm süreci yapılandırır."
            />

            <Reveal delay={0.2} className="mt-8 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-navy-700/20">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Akademik koçluk"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-display text-lg font-semibold">
                    "Her öğrencinin potansiyeli vardır, yeter ki doğru yönlendirme olsun."
                  </p>
                  <p className="mt-2 text-sm text-white/70">— Akademik Koçluk Ekibi</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: timeline */}
          <div className="lg:col-span-7">
            <Stagger className="relative" stagger={0.1}>
              {/* Vertical line */}
              <div className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-sky-500 via-sky-400 to-gold-400" />

              {COACHING_STEPS.map((item) => (
                <StaggerItem key={item.step} className="relative pl-20 pb-8 last:pb-0">
                  <div className="relative">
                    {/* Node */}
                    <div className="absolute -left-20 top-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-sky-500/30 blur-md rounded-full" />
                        <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shadow-lg">
                          <item.icon className="h-6 w-6 text-gold-300" />
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="glass-card p-6 hover:shadow-lg hover:shadow-navy-700/5 transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-2xl font-bold text-gradient">{item.step}</span>
                        <h3 className="font-display text-lg font-bold text-navy-700 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
