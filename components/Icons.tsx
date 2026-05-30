import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Shirt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8 3 4 6l2 3 2-1v10h8V8l2 1 2-3-4-3-2 2a3 3 0 0 1-4 0L8 3Z" />
    </svg>
  );
}

export function Gift(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
      <path d="M3.5 13h17M12 9v11" />
      <path d="M12 9S10.5 4.5 8 5s-1 4 4 4ZM12 9s1.5-4.5 4-4 1 4-4 4Z" />
    </svg>
  );
}

export function Mug(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5 5h11v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V5Z" />
      <path d="M16 8h2.5a2.5 2.5 0 0 1 0 5H16" />
      <path d="M8 2c-.5 1 .5 1.5 0 2.5M11.5 2c-.5 1 .5 1.5 0 2.5" />
    </svg>
  );
}

export function Diary(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.5A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3Z" />
      <path d="M9 3v18M16 8h-3M16 12h-3" />
    </svg>
  );
}

export function Pen(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M16.5 3.5 20.5 7.5 8 20l-4.5 1 1-4.5L16.5 3.5Z" />
      <path d="M14.5 5.5 18.5 9.5" />
    </svg>
  );
}

export function Box(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 20 7v10l-8 4-8-4V7l8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

export function Brief(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 12h16" />
    </svg>
  );
}

export function Design(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function Print(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 9V4h12v5" />
      <rect x="4" y="9" width="16" height="7" rx="1.5" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
      <circle cx="17" cy="12" r=".6" fill="currentColor" />
    </svg>
  );
}

export function Deliver(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 6h10v9H3zM13 9h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function Spark(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3v4M12 17v4M5 12H3M21 12h-2M6 6l1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Bolt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export function Layers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 21 8l-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />
    </svg>
  );
}

export function Ribbon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14l-2 7 5-3 5 3-2-7" />
    </svg>
  );
}

export const ICONS = {
  shirt: Shirt,
  gift: Gift,
  mug: Mug,
  diary: Diary,
  pen: Pen,
  box: Box,
  brief: Brief,
  design: Design,
  print: Print,
  deliver: Deliver,
  spark: Spark,
  bolt: Bolt,
  layers: Layers,
  ribbon: Ribbon,
} as const;

export type IconName = keyof typeof ICONS;
