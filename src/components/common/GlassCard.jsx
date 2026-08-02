import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverTilt = false,
  showDots = false,
  title = '',
  badge = '',
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverTilt ? { y: -3 } : { y: -1.5 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel specular-border rounded-2xl sm:rounded-[22px] p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl transition-all ${className}`}
      {...props}
    >
      {/* Desktop Window Titlebar Option */}
      {(showDots || title || badge) && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200/60 dark:border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            {showDots && (
              <div className="window-dots">
                <span className="window-dot window-dot-red" />
                <span className="window-dot window-dot-yellow" />
                <span className="window-dot window-dot-green" />
              </div>
            )}
            {title && (
              <span className="text-xs font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                {title}
              </span>
            )}
          </div>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-stone-200/60 dark:bg-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-300 font-medium">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
