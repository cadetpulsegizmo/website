// PPR — direction exploration. Three concrete postures for motion +
// illustration, each presented as a single artboard in a design canvas.

const { DesignCanvas, DCSection, DCArtboard } = window;

// ───────────────────────────────────────────────────────────────
// Direction A — Emblem as Generator
// The mark IS the system. It's the watermark, the section divider,
// the pillar glyphs. Motion: emblem self-constructs dot-by-dot on
// first load; pillar glyphs spin a notch on hover.
// ───────────────────────────────────────────────────────────────
function DirectionA() {
  return (
    <div className="ppr" style={{ padding: '36px 40px 40px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Direction A</div>
      <h2 className="dir-name">Emblem as generator</h2>
      <p className="dir-thesis">
        The six-figure mark is the only illustration. It appears once at hero scale as a
        watermark, becomes the pillar glyph (with one figure highlighted to mean a different
        thing per pillar), and recurs at footnote scale as the section divider. One motif,
        three sizes. Nothing else is drawn.
      </p>

      {/* Hero zone */}
      <div className="zone">
        <span className="zone-label">Hero</span>
        <div className="hero-mock">
          <div style={{
            position: 'absolute',
            right: -20, top: 10,
            width: 280, height: 280,
            opacity: 0.10,
            pointerEvents: 'none',
            zIndex: 1,
          }}>
            <EmblemMark size={280} color="var(--burgundy)" />
          </div>
          <h1 className="hero-h">We research how people feel about places.</h1>
          <p className="hero-sub">
            People &amp; Places Research is a small, impartial research practice.
            We design and run research for developers, councils, and the consultancies
            advising them — and we write up what we find in a way that's built to be used.
          </p>
        </div>
      </div>

      {/* Pillar tiles */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          <div className="pillar-mock">
            <div className="glyph"><EmblemVariant size={48} variant="full" color="var(--ink)" /></div>
            <h3>Ruthlessly accurate</h3>
            <p>Methodologically neutral. Samples matched to the question, not the brief.</p>
          </div>
          <div className="pillar-mock">
            <div className="glyph"><EmblemVariant size={48} variant="highlight" color="var(--ink)" /></div>
            <h3>Specialists in place</h3>
            <p>We focus on how people feel about where they live, and where they might.</p>
          </div>
          <div className="pillar-mock">
            <div className="glyph"><EmblemVariant size={48} variant="half" color="var(--ink)" /></div>
            <h3>Built to inform decisions</h3>
            <p>Findings, ordered by importance. Method at the back for anyone checking.</p>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock" style={{ gap: 24 }}>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
          <EmblemMark size={18} color="var(--burgundy)" style={{ opacity: 0.7 }} />
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
        </div>
      </div>

      {/* Notes */}
      <div className="notes">
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Emblem watermark <em>self-constructs</em>: six heads fade in first, then the chevron bodies sweep in radially. ~700ms, one-off.</li>
            <li>Pillar glyphs rotate 60° on hover (one notch — one figure forward).</li>
            <li>Scroll reveals: 12px translate + fade, <em>cubic-bezier(0.2, 0.8, 0.2, 1)</em>.</li>
          </ul>
        </div>
        <div>
          <h4>Illustration vocabulary</h4>
          <ul>
            <li>One element: the mark. No new shapes invented.</li>
            <li>Stated at three scales: 280px (hero), 48px (pillar), 18px (divider).</li>
            <li>States: full / highlight / half-opacity / single-figure.</li>
            <li><em>Risk:</em> repetitive if not deployed sparingly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Direction B — Catchment Geometry
// Concentric rings + scatter-of-dots. The visual gestures at the
// actual subject — distance from a site, sampling within a ring,
// where someone might come from. The emblem stays in the header.
// ───────────────────────────────────────────────────────────────
function DirectionB() {
  return (
    <div className="ppr" style={{ padding: '36px 40px 40px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Direction B</div>
      <h2 className="dir-name">Catchment geometry</h2>
      <p className="dir-thesis">
        A small vocabulary drawn from the work itself: concentric rings (a catchment, a
        30-minute drive), single highlighted points (a site, a respondent), scatters of
        dots (a sample). The emblem stays in the header; the page is illustrated by the
        research's own geometry instead.
      </p>

      {/* Hero zone */}
      <div className="zone">
        <span className="zone-label">Hero</span>
        <div className="hero-mock">
          <div style={{
            position: 'absolute',
            right: -60, top: -20,
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 1,
          }}>
            <Rings size={340} count={7} color="var(--burgundy)" stroke={0.5} />
          </div>
          <h1 className="hero-h" style={{ maxWidth: '10ch' }}>We research how people feel about places.</h1>
          <p className="hero-sub">
            People &amp; Places Research is a small, impartial research practice.
            We design and run research for developers, councils, and the consultancies
            advising them.
          </p>
        </div>
      </div>

      {/* Pillar tiles */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          <div className="pillar-mock">
            <div className="glyph"><ScatterRing size={52} color="var(--ink)" seed={11} /></div>
            <h3>Ruthlessly accurate</h3>
            <p>Samples matched to the question. We tell you what each option will and won't let us say.</p>
          </div>
          <div className="pillar-mock">
            <div className="glyph"><HighlightRing size={52} color="var(--ink)" /></div>
            <h3>Specialists in place</h3>
            <p>We focus on how people feel about where they live, and where they might.</p>
          </div>
          <div className="pillar-mock">
            <div className="glyph"><DotPath size={52} color="var(--ink)" /></div>
            <h3>Built to inform decisions</h3>
            <p>Findings, ordered by importance. Method at the back for anyone checking.</p>
          </div>
        </div>
      </div>

      {/* Section divider — a slim row of fading concentric arcs */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock" style={{ gap: 0 }}>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
          <svg width="80" height="20" viewBox="0 0 80 20" style={{ overflow: 'visible' }}>
            <line x1="0" y1="10" x2="34" y2="10" stroke="var(--stone)" strokeWidth="0.5" />
            <circle cx="40" cy="10" r="3" stroke="var(--burgundy)" strokeWidth="0.6" fill="none" />
            <circle cx="40" cy="10" r="6" stroke="var(--burgundy)" strokeWidth="0.6" fill="none" opacity="0.6" />
            <circle cx="40" cy="10" r="9" stroke="var(--burgundy)" strokeWidth="0.6" fill="none" opacity="0.3" />
            <line x1="46" y1="10" x2="80" y2="10" stroke="var(--stone)" strokeWidth="0.5" />
          </svg>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Hero rings <em>draw outward</em> from the centre on load. ~900ms, one-off.</li>
            <li>Scatter dots animate in <em>one at a time</em> on scroll-into-view — small staggered fade.</li>
            <li>Hover on a pillar: the ring stroke warms from Slate to Burgundy.</li>
          </ul>
        </div>
        <div>
          <h4>Illustration vocabulary</h4>
          <ul>
            <li>Primitives: ring, dot, single highlighted point, dotted path.</li>
            <li>Logo stays at logo scale. Doesn't get pressed into a second job.</li>
            <li>Reads as <em>cartographic / research-y</em> without being literal maps.</li>
            <li><em>Risk:</em> could read as data-viz if pushed too far. Keep it spare.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Direction C — Editorial Marginalia
// Type does all the work. The page reads like a research-journal
// page. Illustration is footnote-scale: a folio mark, a chapter
// numeral, an asterism between sections. The emblem appears tiny
// and rarely — when it does, it counts.
// ───────────────────────────────────────────────────────────────
function DirectionC() {
  return (
    <div className="ppr" style={{ padding: '36px 40px 40px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Direction C</div>
      <h2 className="dir-name">Editorial marginalia</h2>
      <p className="dir-thesis">
        Closest to the brief's "small, serious research practice" register. The page is
        type and whitespace. Illustration is reduced to journal-page furniture: italic
        folio numerals, a Burgundy asterism between sections, the emblem at marginalia
        scale beside chapter heads. Quietest of the three.
      </p>

      {/* Hero zone — type alone */}
      <div className="zone">
        <span className="zone-label">Hero</span>
        <div className="hero-mock" style={{ paddingTop: 36 }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--slate)',
          }}>
            Folio 001 &nbsp;·&nbsp; Home
          </div>
          <h1 className="hero-h">We research how people feel about places.</h1>
          <p className="hero-sub" style={{ fontStyle: 'italic', color: 'var(--ink)' }}>
            People &amp; Places Research is a small, impartial research practice.
          </p>
          <p className="hero-sub">
            We design and run research for developers, councils, and the consultancies
            advising them. Our methods are documented, our researchers are independent of
            the outcome, and our reports are written to be read.
          </p>
        </div>
      </div>

      {/* Pillar tiles — numbered I / II / III, no illustration */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          <div className="pillar-mock">
            <div className="glyph"><FolioCap numeral="I" /></div>
            <h3>Ruthlessly accurate</h3>
            <p>Methodologically neutral. Samples matched to the question, not the brief.</p>
          </div>
          <div className="pillar-mock">
            <div className="glyph"><FolioCap numeral="II" /></div>
            <h3>Specialists in place</h3>
            <p>We focus on how people feel about where they live, and where they might.</p>
          </div>
          <div className="pillar-mock">
            <div className="glyph"><FolioCap numeral="III" /></div>
            <h3>Built to inform decisions</h3>
            <p>Findings, ordered by importance. Method at the back for anyone checking.</p>
          </div>
        </div>
      </div>

      {/* Section divider — asterism */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock">
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: 22,
            letterSpacing: '0.8em',
            color: 'var(--burgundy)',
            paddingLeft: '0.8em',
          }}>
            ⁂
          </div>
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Almost nothing. Type fades in 200ms per block on scroll-into-view, no translate.</li>
            <li>Pull-quotes animate <em>nothing</em> — the page stays composed at rest.</li>
            <li>Burgundy underlines on links grow 1→2px on hover. That's the loudest motion on the page.</li>
          </ul>
        </div>
        <div>
          <h4>Illustration vocabulary</h4>
          <ul>
            <li>No illustration in the body. Marginalia only.</li>
            <li>Folio rule at top of each page. Italic numerals for pillars.</li>
            <li>Burgundy <em>asterism</em> (⁂) between sections.</li>
            <li><em>Risk:</em> could read as <em>too quiet</em>. The page wins on copy or it doesn't win.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────
// Canvas
// ───────────────────────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="directions"
        title="Three directions for the upgrade"
        subtitle="Each takes a different posture on how loudly the illustration speaks. The hero, pillars, divider, and motion notes are the comparable parts."
      >
        <DCArtboard id="a" label="A · Emblem as generator" width={920} height={1200}>
          <DirectionA />
        </DCArtboard>
        <DCArtboard id="b" label="B · Catchment geometry" width={920} height={1200}>
          <DirectionB />
        </DCArtboard>
        <DCArtboard id="c" label="C · Editorial marginalia" width={920} height={1200}>
          <DirectionC />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="subsystems"
        title="Sub-system language — paired with A's hero"
        subtitle="The hero (big emblem watermark + headline) is locked. What varies: pillar tiles, section headings, dividers, pull-quotes, in-body callouts. Four candidates; you can splice."
      >
        <DCArtboard id="sub-hl" label="01 · Hairlines & brackets" width={920} height={1340}>
          <OptionHairlines />
        </DCArtboard>
        <DCArtboard id="sub-nu" label="02 · Numerals as anchors" width={920} height={1340}>
          <OptionNumerals />
        </DCArtboard>
        <DCArtboard id="sub-ix" label="03 · Indexed" width={920} height={1340}>
          <OptionIndexed />
        </DCArtboard>
        <DCArtboard id="sub-dg" label="04 · Diagrammatic" width={920} height={1340}>
          <OptionDiagrammatic />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="variations"
        title="Variations on 01 — Hairlines + a logo-derived illustration vocabulary"
        subtitle="01's bracketed-hairline grammar is constant. Each variation adds one motif extracted from the emblem: chevron arms, head-rings, a single figure, or a radial fan. Real copy throughout."
      >
        <DCArtboard id="var-chev" label="01a · Chevron grammar" width={920} height={1480}>
          <VarChevron />
        </DCArtboard>
        <DCArtboard id="var-const" label="01b · Ring constellation" width={920} height={1480}>
          <VarConstellation />
        </DCArtboard>
        <DCArtboard id="var-fig" label="01c · Single figure" width={920} height={1480}>
          <VarSingleFigure />
        </DCArtboard>
        <DCArtboard id="var-fan" label="01d · Radial fan" width={920} height={1480}>
          <VarFan />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="extracts"
        title="Standalone extracts — each its own grammar"
        subtitle="Not layered on 01. Each pulls a different fragment out of the mark and gives it a clear job. Asymmetric, non-centred, non-religious."
      >
        <DCArtboard id="ex-q" label="E1 · Conversation marks" width={920} height={1480}>
          <ExtractQuotes />
        </DCArtboard>
        <DCArtboard id="ex-m" label="E2 · Mass plates & open frames" width={920} height={1480}>
          <ExtractMass />
        </DCArtboard>
        <DCArtboard id="ex-w" label="E3 · Wedge rail" width={920} height={1480}>
          <ExtractWedgeRail />
        </DCArtboard>
        <DCArtboard id="ex-c" label="E4 · Count strips" width={920} height={1480}>
          <ExtractCount />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
