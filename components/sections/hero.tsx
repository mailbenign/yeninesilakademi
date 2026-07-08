'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Star, GraduationCap, CheckCircle2 } from 'lucide-react';
import { STATS, HERO_IMAGES } from '@/lib/data';

export function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const statLabels = [
    { icon: CheckCircle2, label: 'Mutlu Öğrenciler' },
    { icon: GraduationCap, label: 'Yüksek Başarı Oranı' },
    { icon: Star, label: 'Uzman Eğitmen Kadrosu' },
    { icon: CheckCircle2, label: 'Üniversite Yerleştirmeleri' },
  ];

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/60 via-white to-white dark:from-navy-900 dark:via-navy-900 dark:to-navy-900" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-gold-300/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-navy-400/10 blur-3xl" />
      </div>

      <div className="container-max section-padding w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-navy-700 dark:text-white mb-6"
            >
              <Sparkles className="h-4 w-4 text-gold-400" />
              <span>İzmit'in yeni nesil lise ve üniversite hazırlık akademisi</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-navy-700 dark:text-white leading-[1.05]"
            >
              Geleceğini{' '}
              <span className="relative inline-block">
                <span className="text-gradient">Bugünden</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9C50 3 150 3 198 9" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#0EA5E9" />
                      <stop offset="1" stopColor="#FBBF24" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              İnşa Et.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Yeni Nesil Akademi ile hedeflediğin liseye veya üniversiteye güvenle hazırlan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#iletisim"
                className="group inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full bg-gradient-to-r from-navy-700 to-navy-900 text-white font-semibold shadow-xl shadow-navy-700/25 hover:shadow-2xl hover:shadow-navy-700/30 hover:-translate-y-0.5 transition-all"
              >
                Bize Ulaşın
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programlar"
                className="group inline-flex items-center justify-center gap-2 h-13 px-7 py-3.5 rounded-full glass text-navy-700 dark:text-white font-semibold hover:bg-white hover:-translate-y-0.5 transition-all"
              >
                Programlarımızı İncele
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full ring-2 ring-white dark:ring-navy-900 bg-gradient-to-br from-sky-200 to-navy-300 flex items-center justify-center text-xs font-bold text-navy-700"
                  >
                    {['E', 'A', 'Z', 'M'][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Öğrencilerimizin tercihi</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual: rotating images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-700/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={HERO_IMAGES[imgIndex]}
                  alt="Yeni Nesil Akademi"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />

              {/* Slide indicator dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Resim ${i + 1}`}
                    onClick={() => setImgIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === imgIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 sm:-left-8 top-12 glass-card p-4 w-56 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-navy-700 dark:text-white">Yeni Nesil Akademi</span>
              </div>
              <p className="text-sm font-medium text-navy-700 dark:text-white leading-snug">
                Başarıya giden yolda Yeni Nesil Akademi yanınızda.
              </p>
            </motion.div>

            {/* Second floating card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-4 sm:-right-6 bottom-16 glass-card p-4 w-48 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-xs font-semibold text-navy-700 dark:text-white">Akademik Koçluk</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Bireysel takip ile hedefe ulaş.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats — label-only, no numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {statLabels.map((stat, i) => (
            <div
              key={stat.label}
              className="relative glass-card p-5 lg:p-6 text-center group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-center mb-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-gold-300" />
                </div>
              </div>
              <p className="text-sm font-semibold text-navy-700 dark:text-white leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
