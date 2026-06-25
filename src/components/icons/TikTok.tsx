export function TikTok({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.6 6.3a5.3 5.3 0 0 1-3.2-1.1A5.3 5.3 0 0 1 14.5 2h-3.2v13.3a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.5a5.8 5.8 0 1 0 5 5.8V9a8.5 8.5 0 0 0 5.1 1.7V7.5a5.3 5.3 0 0 1-0-1.2z" />
    </svg>
  );
}
