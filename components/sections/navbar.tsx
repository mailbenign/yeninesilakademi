'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Moon, Sun, Facebook, Instagram } from 'lucide-react';
import { useTheme } from 'next-themes';
import { NAV_LINKS, CONTACT } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        )}
      >
        <nav className="container-max section-padding flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#anasayfa" className="flex items-center">
            <Image
              src="/logo_yeninesilakademi.webp"
              alt="Yeni Nesil Akademi"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-navy-700/80 dark:text-white/80 hover:text-navy-700 dark:hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-gradient-to-r from-sky-500 to-gold-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                aria-label="Tema değiştir"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-navy-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
            <a
              href={CONTACT.phoneHref}
              aria-label="Telefon ile ara"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-navy-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.phone2Href}
              aria-label="İkinci telefon ile ara"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-navy-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-[#1877F2] hover:bg-[#1877F2]/10 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full text-pink-500 hover:bg-pink-500/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-r from-navy-700 to-navy-900 text-white hover:from-navy-800 hover:to-navy-900 rounded-full px-5 shadow-lg shadow-navy-700/20"
            >
              <a href="#iletisim">Bize Ulaşın</a>
            </Button>
            <button
              aria-label="Menüyü aç"
              onClick={() => setOpen(true)}
              className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full text-navy-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-navy-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-white dark:bg-navy-900 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between h-16 px-5 border-b border-slate-100 dark:border-white/10">
                <Image
                  src="/logo_yeninesilakademi.webp"
                  alt="Yeni Nesil Akademi"
                  width={120}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
                <button
                  aria-label="Menüyü kapat"
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10"
                >
                  <X className="h-5 w-5 text-navy-700 dark:text-white" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="block py-3 text-lg font-medium text-navy-700 dark:text-white border-b border-slate-50 dark:border-white/5"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="p-5 space-y-3 border-t border-slate-100 dark:border-white/10">
                <Button asChild className="w-full rounded-full bg-gradient-to-r from-navy-700 to-navy-900 text-white">
                  <a href="#iletisim" onClick={() => setOpen(false)}>Bize Ulaşın</a>
                </Button>
                <div className="flex gap-3">
                  <a href={CONTACT.phoneHref} className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full border border-slate-200 dark:border-white/10 text-navy-700 dark:text-white text-sm font-medium">
                    <Phone className="h-4 w-4" /> Ara
                  </a>
                  <a href={CONTACT.phone2Href} className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full border border-slate-200 dark:border-white/10 text-navy-700 dark:text-white text-sm font-medium">
                    <Phone className="h-4 w-4" /> Ara
                  </a>
                </div>
                <div className="flex gap-3">
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full bg-[#1877F2] text-white text-sm font-medium">
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-11 rounded-full bg-gradient-to-r from-pink-500 to-amber-400 text-white text-sm font-medium">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
