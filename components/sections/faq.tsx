'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '@/lib/data';
import { SectionHeading, Reveal } from '@/components/reveal';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="relative py-24 lg:py-32 bg-slate-50/60 dark:bg-navy-900/40 overflow-hidden">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="SSS"
              title={<>Sıkça sorulan <span className="text-gradient">sorular</span></>}
              description="Aklınıza takılan soruların yanıtlarını burada bulamadıysanız, bize ulaşmaktan çekinmeyin."
            />
            <Reveal delay={0.2} className="mt-8">
              <a
                href="#iletisim"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-navy-700 text-white dark:bg-sky-500 dark:text-navy-900 font-semibold hover:opacity-90 transition-opacity"
              >
                Bize ulaşın
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 0.05}>
                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? 'bg-white dark:bg-navy-800 border-sky-200 dark:border-sky-500/30 shadow-lg'
                          : 'bg-white/60 dark:bg-navy-800/40 border-slate-200 dark:border-white/10'
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className={`font-display font-semibold text-navy-700 dark:text-white ${isOpen ? 'text-sky-600 dark:text-sky-400' : ''}`}>
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            isOpen ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-white/10 text-navy-700 dark:text-white'
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
