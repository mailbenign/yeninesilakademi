'use client';

import { motion } from 'framer-motion';
import { FEATURES } from '@/lib/data';
import { Reveal, SectionHeading, Stagger, StaggerItem } from '@/components/reveal';

export function WhyChooseUs() {
  return (
    <section id="kurumsal" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-40" />
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Neden Biz"
          title={<>Premium eğitim anlayışıyla <span className="text-gradient">fark yaratın</span></>}
          description="Geleneksel dershanecilikten çıkıp, öğrenciyi merkeze alan modern bir akademi deneyimi sunuyoruz."
        />

        <Stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" stagger={0.08}>
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative h-full glass-card p-7 hover:shadow-xl hover:shadow-navy-700/5 hover:-translate-y-1 transition-all duration-300">
                {/* Gradient ring on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/5 to-gold-400/5" />

                <div className="relative">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-sky-500/20 blur-xl rounded-2xl group-hover:bg-sky-500/30 transition-colors" />
                    <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-gold-300" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-navy-700 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Detaylı bilgi</span>
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
