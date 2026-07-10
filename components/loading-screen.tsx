'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white dark:bg-navy-900"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-sky-500/30 blur-2xl rounded-full animate-pulse" />
              <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center shadow-xl">
                <GraduationCap className="h-8 w-8 text-gold-300" />
              </div>
            </motion.div>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  className="h-2 w-2 rounded-full bg-sky-500"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
