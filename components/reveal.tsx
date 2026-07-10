'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 24,
  once = true,
}: RevealProps) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: StaggerProps) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
}) {
  return (
    <Reveal className={cn(align === 'center' ? 'text-center mx-auto' : 'text-left', 'max-w-3xl', className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-700 dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
