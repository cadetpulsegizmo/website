// Brand emblem + derived illustration primitives for PPR.
//
// EmblemMark uses the actual PNG and can be tinted any palette colour by
// using the PNG as a CSS mask. Everything else (Rings, ScatterRing, etc.)
// is a *derived* vocabulary — distinct from the logo, but informed by it.

const EmblemMark = ({ size = 40, color = 'var(--ink)', style = {} }) => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: 'url(logos/ppr-mark.png) center / contain no-repeat',
      mask: 'url(logos/ppr-mark.png) center / contain no-repeat',
      flex: '0 0 auto',
      ...style,
    }}
  />
);

// Horizontal lockup (logo + wordmark) for headers
const EmblemLockup = ({ height = 36 }) => (
  <img
    src="logos/ppr-long.png"
    alt="People &amp; Places Research"
    style={{ height, width: 'auto', display: 'block' }}
  />
);

// Concentric rings — Direction B's basic primitive
const Rings = ({ size = 200, stroke = 0.75, color = 'currentColor', count = 5, dotted = false }) => {
  const r = size / 2;
  const arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(r * (i / count) * 0.92);
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ display: 'block' }}>
      {arr.map((rad, i) => (
        <circle
          key={i}
          cx={r} cy={r} r={rad}
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={dotted ? '2 4' : 'none'}
          opacity={0.7 - i * 0.08}
        />
      ))}
      <circle cx={r} cy={r} r={2.5} fill={color} />
    </svg>
  );
};

// Scatter-within-ring — sampling / recruitment metaphor
const ScatterRing = ({ size = 56, color = 'currentColor', seed = 7, n = 14 }) => {
  const r = size / 2;
  const rng = (k) => {
    const x = Math.sin(k * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = rng(seed + i) * Math.PI * 2;
    const d = Math.sqrt(rng(seed + i + 100)) * (r * 0.74);
    pts.push([r + Math.cos(a) * d, r + Math.sin(a) * d]);
  }
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ display: 'block' }}>
      <circle cx={r} cy={r} r={r * 0.85} stroke={color} strokeWidth={0.75} opacity={0.55} />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.4} fill={color} opacity={0.85} />
      ))}
    </svg>
  );
};

// Single highlighted point on a catchment ring — "specialists in place"
const HighlightRing = ({ size = 56, color = 'currentColor' }) => {
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ display: 'block' }}>
      <circle cx={r} cy={r} r={r * 0.85} stroke={color} strokeWidth={0.75} opacity={0.5} />
      <circle cx={r} cy={r} r={r * 0.55} stroke={color} strokeWidth={0.75} opacity={0.35} />
      <circle cx={r} cy={r} r={r * 0.28} stroke={color} strokeWidth={0.75} opacity={0.25} />
      <circle
        cx={r + r * 0.55 * Math.cos(-Math.PI / 3)}
        cy={r + r * 0.55 * Math.sin(-Math.PI / 3)}
        r={3.2}
        fill={color}
      />
    </svg>
  );
};

// Dots becoming an arrow — "decisions, not decks"
const DotPath = ({ size = 56, color = 'currentColor' }) => {
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" style={{ display: 'block' }}>
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={6 + i * 11} cy={r} r={1.3 + i * 0.45} fill={color} opacity={0.4 + i * 0.18} />
      ))}
      <path d={`M ${size - 14} ${r - 5} L ${size - 4} ${r} L ${size - 14} ${r + 5}`} stroke={color} strokeWidth={1.1} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// Direction-A pillar glyphs: variations on the emblem itself.
// We highlight one figure / focus the centre / cluster five — each pillar
// gets a different "state" of the same mark so it reads as one family.
const EmblemVariant = ({ size = 64, variant = 'full', color = 'var(--ink)' }) => {
  // We render the real mark via CSS mask, then layer a small accent on top
  // to indicate the variant. The mask gives us the authentic silhouette.
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <EmblemMark size={size} color={color} style={{
        opacity: variant === 'fade' ? 0.18 : variant === 'half' ? 0.55 : 1,
      }} />
      {variant === 'highlight' && (
        <span style={{
          position: 'absolute',
          // Top "head" position, hand-tuned to sit over the topmost figure
          left: size * 0.42, top: size * 0.04,
          width: size * 0.16, height: size * 0.16,
          borderRadius: '50%',
          background: 'var(--burgundy)',
        }} />
      )}
    </div>
  );
};

// Direction-C folio cap: numbered chapter mark in italic Georgia
const FolioCap = ({ numeral = 'I' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <EmblemMark size={16} color="var(--burgundy)" />
    <span style={{
      fontFamily: 'Georgia, serif',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--burgundy)',
      letterSpacing: '0.04em',
    }}>{numeral}</span>
  </div>
);

// ─── Primitives derived from the logo emblem ──────────────────────
// Each one extracts a fragment of the six-figure mark for re-use as
// illustration vocabulary at body scale.

// One chevron arm from the logo — Λ. Apex at top, legs spread.
const ChevronGlyph = ({ size = 32, stroke = 14, color = 'currentColor', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block', ...style }}>
    <path
      d="M 16 80 L 50 24 L 84 80"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
    />
  </svg>
);

// One head from the logo — open ring.
const RingHead = ({ size = 16, stroke = 4, color = 'currentColor', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block', ...style }}>
    <circle cx="50" cy="50" r="36" stroke={color} strokeWidth={stroke * 2.4} fill="none" />
  </svg>
);

// One whole figure — head + chevron body, sized as a single unit.
const SingleFigure = ({ size = 40, color = 'currentColor', style = {} }) => (
  <svg width={size} height={size * 1.25} viewBox="0 0 100 125" fill="none" style={{ display: 'block', ...style }}>
    {/* head */}
    <circle cx="50" cy="20" r="13" stroke={color} strokeWidth="8" fill="none" />
    {/* chevron body */}
    <path
      d="M 14 110 L 50 48 L 86 110"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="8"
      fill="none"
    />
  </svg>
);

// Six chevrons radiating outward, no heads — apexes pointing OUT.
const RadialFan = ({ size = 64, color = 'currentColor', stroke = 9, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block', ...style }}>
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <g key={deg} transform={`rotate(${deg} 50 50)`}>
        {/* chevron apex outward at top */}
        <path
          d="M 38 44 L 50 26 L 62 44"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="8"
          fill="none"
        />
      </g>
    ))}
  </svg>
);

// Six rings only — the heads of the mark, in their radial positions.
const RingConstellation = ({ size = 64, color = 'currentColor', filledIndex = -1, style = {} }) => {
  const r = 50;
  const orbit = 36;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ display: 'block', ...style }}>
      {[-90, -30, 30, 90, 150, 210].map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        const cx = r + orbit * Math.cos(a);
        const cy = r + orbit * Math.sin(a);
        return i === filledIndex ? (
          <circle key={i} cx={cx} cy={cy} r="7" fill={color} />
        ) : (
          <circle key={i} cx={cx} cy={cy} r="7" stroke={color} strokeWidth="3" fill="none" />
        );
      })}
    </svg>
  );
};

// Inline chevron — pointer for links / "Read on" affordances.
// Rotates: 'right' (›), 'down' (∨), 'left' (‹), 'up' (∧).
const ChevronInline = ({ size = 14, color = 'currentColor', dir = 'right', stroke = 2, style = {} }) => {
  const rotation = { right: -90, left: 90, down: 0, up: 180 }[dir];
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 24 24"
      style={{ display: 'inline-block', verticalAlign: 'baseline', transform: `rotate(${rotation}deg)`, ...style }}
    >
      <path
        d="M 4 17 L 12 7 L 20 17"
        stroke={color} strokeWidth={stroke}
        strokeLinecap="square" strokeLinejoin="miter" fill="none"
      />
    </svg>
  );
};

// Horizontal ring strip — 6 rings in a row, used as section divider /
// horizontal motif when the mark gets re-laid out linearly. `filled`
// is an index (0-5) for one solid ring, or -1 for all rings.
const RingStripe = ({ height = 12, gap = 8, count = 6, color = 'currentColor', filled = -1, style = {} }) => (
  <div style={{ display: 'inline-flex', gap, alignItems: 'center', ...style }}>
    {Array.from({ length: count }).map((_, i) => (
      <RingHead
        key={i}
        size={height}
        color={color}
        style={{ opacity: 0.85 }}
      />
    ))}
  </div>
);

// Doubled-chevron quotation marks — derived directly from the logo's
// chevron arm. Two thin Λs side by side, rotated 90° to point
// inward at a quoted phrase. Opening points right, closing points left.
const ChevronQuoteOpen = ({ size = 36, color = 'currentColor', stroke = 8, style = {} }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 60 72" fill="none" style={{ display: 'block', ...style }}>
    <path d="M 32 8 L 8 36 L 32 64"
      stroke={color} strokeWidth={stroke}
      strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="8" />
    <path d="M 56 8 L 32 36 L 56 64"
      stroke={color} strokeWidth={stroke}
      strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="8" />
  </svg>
);

const ChevronQuoteClose = ({ size = 36, color = 'currentColor', stroke = 8, style = {} }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 60 72" fill="none" style={{ display: 'block', ...style }}>
    <path d="M 28 8 L 52 36 L 28 64"
      stroke={color} strokeWidth={stroke}
      strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="8" />
    <path d="M 4 8 L 28 36 L 4 64"
      stroke={color} strokeWidth={stroke}
      strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="8" />
  </svg>
);

// Vertical chevron-wedge for margin rails. Apex left, opens right.
// A thinner reuse of the logo arm rotated 90°.
const WedgeMark = ({ size = 22, color = 'currentColor', stroke = 6, style = {} }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 30 22" fill="none" style={{ display: 'block', ...style }}>
    <path d="M 26 4 L 6 11 L 26 18"
      stroke={color} strokeWidth={stroke}
      strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="8" />
  </svg>
);

// Linear row of head-rings, sized for inline use as a literal count.
const CountStrip = ({ count = 6, ringSize = 11, gap = 4, color = 'currentColor', emphasis = 'none', style = {} }) => {
  // emphasis: 'none' | 'first' | 'all'
  return (
    <div style={{ display: 'inline-flex', gap, alignItems: 'center', flexWrap: 'wrap', ...style }}>
      {Array.from({ length: count }).map((_, i) => {
        const filled = emphasis === 'all' || (emphasis === 'first' && i === 0);
        return filled ? (
          <span
            key={i}
            style={{ width: ringSize, height: ringSize, borderRadius: '50%', background: color, display: 'inline-block' }}
          />
        ) : (
          <RingHead key={i} size={ringSize} color={color} stroke={2.6} style={{ opacity: 0.75 }} />
        );
      })}
    </div>
  );
};

Object.assign(window, {
  EmblemMark, EmblemLockup, EmblemVariant,
  Rings, ScatterRing, HighlightRing, DotPath,
  FolioCap,
  ChevronGlyph, RingHead, SingleFigure, RadialFan, RingConstellation,
  ChevronInline, RingStripe,
  ChevronQuoteOpen, ChevronQuoteClose, WedgeMark, CountStrip,
});
