'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY } from '@/lib/data';
import { SectionHeading, Stagger, StaggerItem } from '@/components/reveal';
import Image from "next/image";

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const next = () => setLightbox((p) => (p === null ? 0 : (p + 1) % GALLERY.length));
  const prev = () => setLightbox((p) => (p === null ? 0 : (p - 1 + GALLERY.length) % GALLERY.length));

  return (
    <section id="galeri" className="relative py-24 lg:py-32 bg-slate-50/60 dark:bg-navy-900/40 overflow-hidden">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Galeri"
          title={<>Akademi hayatından <span className="text-gradient">kareler</span></>}
          description="Sınıf içi anlarımız, etkinliklerimiz ve öğrencilerimizin başarı hikayelerinden kareler."
        />

        <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4" stagger={0.06}>
          {GALLERY.map((img, i) => (
            <StaggerItem
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span ?? ''}`}
            >
              <button
                onClick={() => open(i)}
                aria-label={img.alt}
                className="absolute inset-0 h-full w-full"
              >
                {img.type === "video" ? (
                  <>
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={img.src} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-2xl">
                        ▶
                      </div>
                    </div>
                  </>
                ) : (
                  <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width:768px) 50vw, 25vw"
                      className="absolute inset-0 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                    <ZoomIn className="h-5 w-5 text-navy-700" />
                  </div>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-900/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={close}
          >
            <button
              aria-label="Kapat"
              onClick={close}
              className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Önceki"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 sm:left-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Sonraki"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 sm:right-8 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {GALLERY[lightbox].type === "video" ? (
                <video
                  controls
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  muted
                  className="max-h-[100vh] max-w-[500px] w-full mx-auto rounded-2xl shadow-2xl"
                >
                  <source src={GALLERY[lightbox].src} type="video/mp4" />
                  Tarayıcınız video etiketini desteklemiyor.
                </video>
              ) : (
                <div className="relative w-full h-[80vh]">
                    <Image
                        src={GALLERY[lightbox].src}
                        alt={GALLERY[lightbox].alt}
                        fill
                        sizes="100vw"
                        className="object-contain rounded-2xl"
                    />
                </div>
              )}
              <p className="mt-4 text-center text-white/80">{GALLERY[lightbox].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
