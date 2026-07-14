import { SVGProps } from "react";

// lucide-react intentionally ships no brand/logo marks (trademark policy), so
// these five are small inline SVGs sized to match Lucide's 24x24 icon grid.

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.53-1.5H16.5V4.3C16.2 4.26 15.2 4.17 14 4.17c-2.5 0-4.2 1.53-4.2 4.33V10.5H7v3h2.8V21h3.7Z" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21l-6.4 7.3L22 21h-6.4l-5-6.5L4.7 21H2.6l6.8-7.8L2 3h6.5l4.5 5.9L18.9 3Zm-1.1 16.2h1.2L7.3 4.7H6L17.8 19.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x={3.5} y={3.5} width={17} height={17} rx={5} />
      <circle cx={12} cy={12} r={4} />
      <circle cx={17.2} cy={6.8} r={0.9} fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.5A1.7 1.7 0 1 0 5.47 6.9 1.7 1.7 0 0 0 5.47 3.5ZM20 20h-2.94v-6.05c0-1.44-.03-3.3-2.02-3.3-2.02 0-2.33 1.57-2.33 3.2V20H9.77V8.5h2.82v1.57h.04c.39-.75 1.36-1.55 2.8-1.55 3 0 3.55 1.97 3.55 4.54V20Z" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.5C2.2 14 2.4 15.7 2.4 15.7s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.6.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.5c0-1.7-.2-3.5-.2-3.5ZM9.9 14.6V8.9l5.4 2.9-5.4 2.8Z" />
    </svg>
  );
}
