'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUp } from 'lucide-react';
import { CONTACT } from '@/lib/data';

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Yukarı çık"
            className="h-11 w-11 rounded-full bg-navy-700 dark:bg-sky-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={CONTACT.phoneHref}
        aria-label="Telefon ile ara"
        className="h-12 w-12 rounded-full bg-sky-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href={CONTACT.phone2Href}
        aria-label="İkinci telefon ile ara"
        className="h-12 w-12 rounded-full bg-navy-700 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
