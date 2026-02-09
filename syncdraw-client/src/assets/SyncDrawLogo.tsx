const SyncDrawLogo = ({ className = "w-56 h-auto" }) => {
  return (
    <svg
      viewBox="0 0 520 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="syncGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2EA7FF" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
      </defs>

      <g stroke="url(#syncGradient)" strokeWidth="6" strokeLinecap="round">
        <path d="M60 90 C20 90, 20 30, 60 30 C100 30, 100 90, 60 90" />
        <path d="M60 30 L100 30 C140 30, 140 90, 100 90 L60 90" />
        <path d="M75 60 L95 60" />
      </g>

      <text
        x="160"
        y="70"
        fontSize="42"
        fontWeight="700"
        fill="url(#syncGradient)"
        fontFamily="Inter, sans-serif"
      >
        SyncDraw
      </text>

      <text
        x="160"
        y="100"
        fontSize="16"
        fill="#6B7280"
      >
        Where ideas sync in real time.
      </text>
    </svg>
  );
};

export default SyncDrawLogo;
