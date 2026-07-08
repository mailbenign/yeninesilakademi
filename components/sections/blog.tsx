'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '@/lib/data';
import { SectionHeading, Stagger, StaggerItem } from '@/components/reveal';

export function Blog() {
  const [active, setActive] = useState('Tümü');
  const filtered = active === 'Tümü' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <section id="blog" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gold-300/10 blur-3xl" />
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Blog"
          title={<>Bilgi ve ilham <span className="text-gradient">yazılarımız</span></>}
          description="Sınav stratejileri, çalışma teknikleri, motivasyon ve sınav psikolojisi üzerine uzman görüşleri."
        />

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-navy-700 text-white dark:bg-sky-500 dark:text-navy-900 shadow-lg'
                  : 'bg-slate-100 dark:bg-white/5 text-navy-700 dark:text-white/70 hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.06}>
              {filtered.map((post) => (
                <StaggerItem key={post.title}>
                  <article className="group h-full overflow-hidden rounded-3xl bg-white dark:bg-navy-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-navy-700/10 transition-all duration-500 hover:-translate-y-1.5">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                      <span className="absolute top-4 left-4 inline-block rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-navy-700 dark:text-white leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      <a
                        href="#blog"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400"
                      >
                        Devamını oku
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
