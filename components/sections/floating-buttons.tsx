'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp, Sparkles, X, Send } from 'lucide-react';
import { CONTACT, AI_SUGGESTIONS } from '@/lib/data';

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (chatOpen && messages.length === 0) {
      setMessages([
        {
          role: 'bot',
          text: 'Merhaba 👋\n\nBen Yeni Nesil Akademi Dijital Danışmanıyım.\n\nProgramlarımız, kayıt süreci ve eğitimlerimiz hakkında size yardımcı olabilirim.',
        },
      ]);
    }
  }, [chatOpen, messages.length]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          text: 'Teşekkürler! Bu konuda en kısa sürede ekibimiz sizinle iletişime geçecek. Daha detaylı bilgi için 0262 000 00 00 numarasından bizi arayabilirsiniz.',
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating action stack */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {/* Scroll to top */}
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

        {/* Phone */}
        <a
          href={CONTACT.phone2Href}
          aria-label="Telefon ile ara"
          className="h-12 w-12 rounded-full bg-sky-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Phone className="h-5 w-5" />
        </a>

        {/* WhatsApp */}
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative h-12 w-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
          <MessageCircle className="relative h-6 w-6" />
        </a>

        {/* AI Chat toggle */}
        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Dijital Danışman"
          className="relative h-14 w-14 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <span className="absolute inset-0 rounded-full bg-sky-500/40 animate-pulse-ring" />
          {chatOpen ? (
            <X className="relative h-6 w-6" />
          ) : (
            <Sparkles className="relative h-6 w-6 text-gold-300" />
          )}
        </button>
      </div>

      {/* AI Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm h-[520px] max-h-[70vh] flex flex-col rounded-3xl bg-white dark:bg-navy-800 shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-navy-700 to-navy-900 text-white">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-gold-300 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-navy-900" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-navy-700" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">Dijital Danışman</p>
                <p className="text-xs text-white/60">Genelde hemen yanıt verir</p>
              </div>
              <button onClick={() => setChatOpen(false)} aria-label="Kapat" className="ml-auto h-8 w-8 rounded-full hover:bg-white/10 flex items-center justify-center">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-navy-900/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-navy-700 text-white rounded-br-md'
                        : 'bg-white dark:bg-navy-800 text-navy-700 dark:text-white rounded-bl-md shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Suggestions */}
              {messages.length <= 1 && (
                <div className="pt-2 space-y-2">
                  <p className="text-xs text-muted-foreground px-1">Hızlı sorular:</p>
                  {AI_SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="block w-full text-left text-sm rounded-xl border border-slate-200 dark:border-white/10 px-3 py-2 text-navy-700 dark:text-white hover:bg-sky-50 dark:hover:bg-sky-500/10 hover:border-sky-300 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-navy-800">
              <form
                onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 h-11 rounded-full bg-slate-100 dark:bg-navy-900 px-4 text-sm text-navy-700 dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  aria-label="Gönder"
                  className="h-11 w-11 rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
