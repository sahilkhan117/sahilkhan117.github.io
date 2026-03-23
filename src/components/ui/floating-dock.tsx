"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for Tailwind classes
// eslint-disable-next-line react-refresh/only-export-components
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  isSeparator?: boolean;
}

export interface FloatingDockProps {
  items: DockItem[];
  className?: string;
}

export const FloatingDock = ({ items, className }: FloatingDockProps) => {
  // Track mouse X position globally for the dock
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        "flex h-16 items-end gap-4 rounded-full px-4 pb-3",
        "bg-white/5 dark:bg-black/5 backdrop-blur-sm",
        "border border-zinc-200 dark:border-zinc-600 shadow-2xl",
        className
      )}
    >
      <Tooltip.Provider delayDuration={0}>
        {items.map((item, idx) => {
          // Render a separator if specified in the data
          if (item.isSeparator) {
            return (
              <div
                key={`separator-${idx}`}
                className="h-8 w-px bg-zinc-300 dark:bg-zinc-700 mx-2 self-center"
              />
            );
          }

          return (
            <DockIcon key={item.title} mouseX={mouseX} {...item} />
          );
        })}
      </Tooltip.Provider>
    </motion.div>
  );
};

interface DockIconProps extends DockItem {
  mouseX: any; // MotionValue<number>
}

function DockIcon({ mouseX, title, icon, href, onClick, target = "_blank" }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 1. Calculate the distance between the mouse and the center of this icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // 2. Map the distance to a size (Base: 40px, Max zoom: 80px)
  let widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);

  // 3. Apply spring physics for fluid movement
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <a href={href} onClick={onClick} target={target} rel={target === "_blank" ? "noreferrer" : undefined}>
          <motion.div
            ref={ref}
            style={{ width, height: width }}
            className="flex aspect-square items-center justify-center rounded-full p-2 bg-white/50 dark:bg-black/50 shadow-lg text-zinc-600 dark:text-zinc-300 transition-colors hover:bg-white dark:hover:bg-zinc-800"
          >
            {icon}
          </motion.div>
        </a>
      </Tooltip.Trigger>

      <Tooltip.Portal>
        <Tooltip.Content
          sideOffset={8}
          className="z-50 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-1.5 text-sm font-medium text-zinc-900 dark:text-zinc-100 shadow-md animate-in fade-in zoom-in-95"
        >
          {title}
          <Tooltip.Arrow className="fill-white dark:fill-zinc-950" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
