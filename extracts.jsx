// PPR — Step 1c. Four standalone extracts from the emblem. Each is
// its OWN body-grammar (not layered on hairlines+brackets). Each
// motif is given a clear job so the page never reads as decorative.
//
// Copy throughout is the locked text from website-content.md.

// Pillar tile bodies (real copy, real length)
const E_PILLARS = [
  ['I', 'Ruthlessly accurate',
    'We are committed to the truth. Our job is to find out what people actually think and tell you accurately — even when it’s uncomfortable.'],
  ['II', 'Specialists in place',
    'We focus on how people feel about the places they live, the places they could live, and how they choose between them. It’s a narrow field, and we know it well.'],
  ['III', 'Built to inform decisions',
    'Our findings inform a range of decisions about how a place takes shape. This process is separate from public community engagement, which informs many of the same decisions. Our reports are tailored precisely to the decisions the project team has in front of them.'],
];

const HWW_FLOW = [
  'We work with the client to understand who the key audiences are, what decisions need to be made, and what would be most useful to know.',
  'We use a range of digital tools and datasets to identify and recruit participants who match those audiences.',
  'We listen carefully to what they tell us.',
  'We interpret what we’ve heard, and feed it back in a way that directly informs the decisions our clients have to make.',
];

// ─── E1 · Conversation marks ──────────────────────────────────────
// Job: mark voiced content. Doubled-chevron quotation marks derived
// from the logo arm bracket every pull-quote. Pillars carry italic
// Georgia "Pillar I / II / III" tags but no quotation marks (the
// pillars are the practice's own statements, not voice).
function ExtractQuotes() {
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Extract · E1</div>
      <h2 className="dir-name">Conversation marks</h2>
      <p className="dir-thesis">
        Job: <em>mark voiced content</em>. The logo arm doubled gives a chevron quotation
        mark. It frames any pull-quote from a participant. The rest of the page stays
        unframed — quote marks only appear where someone is being quoted, never as decoration.
        Reads as: research is something people said.
      </p>

      <SharedHeroPeek />

      {/* Pillars — italic Georgia tags, no quote marks */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {E_PILLARS.map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div className="e1-pillar">
                <div className="tag">Pillar {n}</div>
                <h3 className="t" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{t}</h3>
                <p className="t" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body — quoted voice gets the marks */}
      <div className="zone body-zone">
        <span className="zone-label">In-body grammar &amp; pull-quote</span>
        <div className="grammar">
          <div>
            <h4 style={{ fontSize: 22, fontWeight: 400, margin: '0 0 8px' }}>How we work</h4>
            <p style={{ color: 'var(--slate)', fontSize: 14, margin: '0 0 14px', fontStyle: 'italic' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 13, lineHeight: 1.6 }}>
              {HWW_FLOW.map((line, i) => <li key={i} style={{ marginBottom: 8 }}>{line}</li>)}
            </ol>
          </div>
          <div>
            <div className="e1-quote">
              <div className="q-open">
                <ChevronQuoteOpen size={26} color="var(--burgundy)" stroke={7.5} />
              </div>
              <div className="q-close">
                <ChevronQuoteClose size={26} color="var(--burgundy)" stroke={7.5} />
              </div>
              <p className="body">
                I’ve lived here all my life. I don’t recognise the place they’re
                describing in the leaflets.
              </p>
              <cite>Resident, 30-minute catchment</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Divider — single small chevron-quote left, rule right */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider" style={{ justifyContent: 'flex-start', gap: 14 }}>
          <ChevronQuoteOpen size={14} color="var(--burgundy)" stroke={6} />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Doubled chevrons « » at 14–40px in Burgundy.</li>
            <li>Open mark sits above-left of quote; close sits below-right. Asymmetric on purpose.</li>
            <li>Only appears at quoted voice. Never as decoration, never on the homepage hero.</li>
            <li>Italic Georgia for the quoted phrase itself.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Open mark fades in 80ms before the quote text; close mark 80ms after.</li>
            <li>On a long page with several quotes, only the first quote’s marks are animated. The rest sit still.</li>
            <li>Hover doesn’t do anything — quotes are not interactive.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── E2 · Mass plates ─────────────────────────────────────────────
// Job: distinguish the practice's *output* (solid Burgundy plates,
// reversed-out Paper text) from the participant's *voice* (open
// Burgundy-framed boxes, Ink text). Two visual modes, never mixed.
function ExtractMass() {
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Extract · E2</div>
      <h2 className="dir-name">Mass plates &amp; open frames</h2>
      <p className="dir-thesis">
        Job: <em>distinguish output from voice</em>. Solid Burgundy plates with reversed Paper
        text mark anything the practice asserts — pillar claims, conclusions, the take-part
        pointer. Open Burgundy frames mark anything a participant said. Two modes, no
        crossover. The two echo the logo’s mass-and-open contrast.
      </p>

      <SharedHeroPeek />

      {/* Pillars — alternating mass / frame / mass */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {E_PILLARS.map(([n, t, p], i) => {
            const isMass = i % 2 === 0;
            return (
              <div key={n} className="pillar-mock">
                <div className={`e2-pillar ${isMass ? 'e2-pillar-mass' : 'e2-pillar-frame'}`}>
                  <div className="lbl">PILLAR {n}</div>
                  <h3 className="t">{t}</h3>
                  <p className="t">{p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Body — plate callout vs. frame quote, side by side */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading, plate &amp; frame</span>
        <div className="grammar">
          <div>
            <h4 style={{ fontSize: 22, fontWeight: 400, margin: '0 0 8px' }}>How we work</h4>
            <p style={{ color: 'var(--slate)', fontSize: 14, margin: '0 0 16px', fontStyle: 'italic' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <div className="e2-plate-callout">
              <div>
                <div style={{
                  fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 9,
                  letterSpacing: '0.2em', opacity: 0.7, marginBottom: 6,
                }}>WHAT WE DELIVER</div>
                <div style={{ fontSize: 16, lineHeight: 1.4 }}>
                  Findings, ordered by importance. Method at the back.
                </div>
              </div>
              <div>
                <ChevronInline size={16} color="var(--paper)" dir="right" stroke={2.2} />
              </div>
            </div>
          </div>
          <div>
            <div style={{
              fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 9,
              letterSpacing: '0.2em', color: 'var(--burgundy)', marginBottom: 10,
            }}>FROM A CONVERSATION</div>
            <div className="e2-frame-quote">
              "I’ve lived here all my life. I don’t recognise the place
              they’re describing in the leaflets."
              <cite>Resident, 30-minute catchment</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Divider — a thick Burgundy bar */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock">
          <div style={{ width: '100%', height: 6, background: 'var(--burgundy)' }} />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Solid Burgundy plates: padding 22–26px, reversed-out Paper text.</li>
            <li>Open frames: 1px Burgundy border, Ink text, italic if quoted.</li>
            <li>Two visual modes only — no third style for "in-between" content.</li>
            <li>Echoes the logo’s mass-and-open binary: chevrons are mass; heads are open.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Plates slide up 14px on scroll-in, fade from 0 to 1 over 350ms.</li>
            <li>Frames draw their border 4-corners-to-centre on entry (~500ms).</li>
            <li>Hover on a mass plate: very subtle Paper text lifts 1px.</li>
            <li><em>Risk:</em> can read as poster-loud. Keep no more than one plate per visible block.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── E3 · Wedge margin ────────────────────────────────────────────
// Job: page wayfinding. A column of small chevron-wedges sits in the
// left margin of long-form pages. One wedge fills in as the reader
// reaches its section. Asymmetric (rail at left, content right).
function ExtractWedgeRail() {
  const sections = [
    ['I', 'Brief', false],
    ['II', 'Recruit', false],
    ['III', 'Listen', true],   // active
    ['IV', 'Interpret', false],
    ['V', 'Ethics', false],
  ];
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Extract · E3</div>
      <h2 className="dir-name">Wedge rail</h2>
      <p className="dir-thesis">
        Job: <em>page wayfinding</em>. A vertical column of thin chevron-wedges sits in the
        left margin of every long-form page. As the reader scrolls into a section, that
        section’s wedge fills in. It’s a progress indicator, not decoration. Carries the
        logo arm onto the page without re-stating the mark.
      </p>

      <SharedHeroPeek />

      {/* Pillars — clean tiles, no decoration. The rail is the motif. */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {E_PILLARS.map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div style={{ paddingTop: 12 }}>
                <div style={{
                  fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                  fontSize: 10, letterSpacing: '0.18em',
                  color: 'var(--burgundy)', marginBottom: 12,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <WedgeMark size={14} color="var(--burgundy)" stroke={4} />
                  <span>PILLAR&nbsp;{n}</span>
                </div>
                <h3 className="t" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{t}</h3>
                <p className="t" style={{ fontSize: 13, lineHeight: 1.55, margin: 0 }}>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body — full layout showing the rail in context */}
      <div className="zone body-zone">
        <span className="zone-label">Long-form page with rail</span>
        <div className="e3-layout">
          <div className="e3-rail">
            {sections.map(([numeral, label, active]) => (
              <div key={numeral} className={`step ${active ? 'active' : ''}`}>
                <WedgeMark
                  size={18}
                  color={active ? 'var(--burgundy)' : 'var(--stone)'}
                  stroke={active ? 6 : 4}
                />
                <span>{numeral} {label}</span>
              </div>
            ))}
          </div>
          <div className="e3-content">
            <h4>Listen</h4>
            <p className="lede">Every project is different, but our approach has a typical shape.</p>
            <p>
              We listen carefully to what they tell us. Sessions take around an hour online,
              or up to ninety minutes in person. We record so we don’t have to take notes
              word-for-word; recordings are deleted one month after we report.
            </p>
            <p>
              We interpret what we’ve heard, and feed it back in a way that directly informs
              the decisions our clients have to make.
            </p>
          </div>
        </div>
      </div>

      {/* Divider — single wedge centred between rules */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider">
          <span className="rule" />
          <WedgeMark size={20} color="var(--burgundy)" stroke={6} />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>One chevron-wedge per section, rotated 90° so the apex points left.</li>
            <li>Inactive: Stone, 4px stroke. Active: Burgundy, 6px stroke.</li>
            <li>Rail only appears on multi-section pages (How we work, Privacy). Hidden on Home, Contact.</li>
            <li>Section labels in monospace, all-caps, 10px.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Active wedge cross-fades (~250ms) as the next section enters the viewport.</li>
            <li>Inactive wedges nudge 2px right on hover. Click jumps the page to that section.</li>
            <li>On mobile, the rail collapses to a single fixed indicator at the top edge.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── E4 · Count strips ────────────────────────────────────────────
// Job: visualise actual numbers in the work. Sample sizes, weeks,
// catchment radius — each rendered as a literal row of head-rings,
// one ring per unit. Honest, transparent, never abstract.
function ExtractCount() {
  // 3 sample stats — head-rings represent literal counts (scaled
  // sensibly: 1 ring per ~30 residents for a 412-person sample)
  const stats = [
    { count: 14, label: 'residents per ring', value: '412', what: 'residents in a typical catchment study' },
    { count: 14, label: 'days', value: '14', what: 'days from first session to draft findings' },
    { count: 6, label: 'studies', value: '6', what: 'concurrent live studies, on average' },
  ];

  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Extract · E4</div>
      <h2 className="dir-name">Count strips</h2>
      <p className="dir-thesis">
        Job: <em>visualise the actual numbers in the work</em>. Each ring is one unit — one
        resident, one week, one study. Concrete and countable. The strip is asymmetric (it
        terminates wherever the number does) and never tiles back to a centred ornament.
        Honest data viz, in the logo’s own geometry.
      </p>

      <SharedHeroPeek />

      {/* Pillars — each gets a strip of its index-many rings */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {E_PILLARS.map(([n, t, p], i) => (
            <div key={n} className="pillar-mock">
              <div className="e4-pillar">
                <div className="strip">
                  <CountStrip count={i + 1} ringSize={12} color="var(--burgundy)" emphasis="all" />
                </div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body — a stats block with literal rings */}
      <div className="zone body-zone">
        <span className="zone-label">Numbers in the work</span>
        <div className="grammar">
          <div>
            <div className="e4-section-h">
              <h4>How we work</h4>
            </div>
            <p style={{ color: 'var(--slate)', fontSize: 14, margin: '0 0 12px', fontStyle: 'italic' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 13, lineHeight: 1.6 }}>
              {HWW_FLOW.map((line, i) => <li key={i} style={{ marginBottom: 6 }}>{line}</li>)}
            </ol>
          </div>
          <div className="e4-stat">
            {stats.map((s, i) => (
              <div className="row" key={i}>
                <div>
                  <div style={{ marginBottom: 8 }}>
                    <CountStrip count={s.count} ringSize={9} color="var(--burgundy)" emphasis="all" />
                  </div>
                  <span className="num">{s.value}</span>
                </div>
                <div className="lbl">
                  <strong>{s.what}</strong>
                  {i === 0 ? `(${s.count} rings shown, scaled — one ring per ~30 residents)` : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider — a short row of rings, left-aligned */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider" style={{ justifyContent: 'flex-start', gap: 14 }}>
          <CountStrip count={6} ringSize={10} color="var(--burgundy)" emphasis="all" />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>One head-ring per unit. Solid Burgundy when counted, outlined when remainder.</li>
            <li>Strip is linear and left-aligned. Never centred, never tiled.</li>
            <li>Ring size: 9–12px. Larger reads as decorative; smaller loses meaning.</li>
            <li>Pillars use the strip as a counting index (1, 2, 3 rings for pillars I, II, III).</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Rings count-up on scroll into view, one per ~40ms, ease-out.</li>
            <li>The accompanying figure (e.g., "412") counts up in tandem, finishing on the last ring.</li>
            <li>Hover on a strip: very subtle ripple from the first ring outward.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ExtractQuotes, ExtractMass, ExtractWedgeRail, ExtractCount });
