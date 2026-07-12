'use client';

import { Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/data';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-max section-padding relative py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/logo_yeninesilakademi.webp"
              alt="Yeni Nesil Akademi"
              width={180}
              height={70}
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              İzmit&apos;in yeni nesil lise ve üniversite hazırlık akademisi. Geleceğini bugünden inşa et.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-amber-400 flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={CONTACT.phoneHref} aria-label="Telefon" className="h-10 w-10 rounded-full bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-all">
                <Phone className="h-5 w-5" />
              </a>
              <a href={CONTACT.phone2Href} aria-label="İkinci telefon" className="h-10 w-10 rounded-full bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-all">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-sky-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4">Programlarımız</h4>
            <ul className="space-y-2.5">
              {['6. ve 7. Sınıf', 'LGS Hazırlık (8. Sınıf)', '9. Sınıf', '10. Sınıf', '11. Sınıf', 'YKS Final (12. Sınıf ve Mezun)'].map((p) => (
                <li key={p}>
                  <a href="#programlar" className="text-sm text-white/60 hover:text-sky-400 transition-colors">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li>
                <a href={CONTACT.addressMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-sky-400 transition-colors">
                  <MapPin className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
                  <span className="whitespace-pre-line">{CONTACT.address}</span>
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-sky-400 transition-colors">
                  <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.phone2Href} className="flex items-center gap-2.5 text-sm text-white/60 hover:text-sky-400 transition-colors">
                  <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                  {CONTACT.phone2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Yeni Nesil Akademi. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50">
            <a href="#" className="hover:text-sky-400 transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-sky-400 transition-colors">KVKK</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Çerezler</a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40 flex items-center justify-center gap-1.5">
          <Heart className="h-3 w-3 text-pink-400 fill-pink-400" />
          İzmit&apos;ten geleceğe sevgiyle hazırlandı.
        </p>
      </div>
    </footer>
  );
}
