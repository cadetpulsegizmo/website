// Variations on Option 01 — Hairlines & brackets, each paired with a
// different illustration vocabulary *derived from the logo emblem*.
// Copy throughout is the locked text from website-content.md.

const PILLARS = [
  ['01', 'Ruthlessly accurate', 'We are committed to the truth. Our job is to find out what people actually think and tell you accurately — even when it’s uncomfortable.'],
  ['02', 'Specialists in place', 'We focus on how people feel about the places they live, the places they could live, and how they choose between them. It’s a narrow field, and we know it well.'],
  ['03', 'Built to inform decisions', 'Our findings inform a range of decisions about how a place takes shape. This process is separate from public community engagement, which informs many of the same decisions. Our reports are tailored precisely to the decisions the project team has in front of them.'],
];

// How-we-work flow, as a list — used in body-grammar block
const FLOW = [
  'We work with the client to understand who the key audiences are, what decisions need to be made, and what would be most useful to know.',
  'We use a range of digital tools and datasets to identify and recruit participants who match those audiences.',
  'We listen carefully to what they tell us.',
  'We interpret what we’ve heard, and feed it back in a way that directly informs the decisions our clients have to make.',
];

// ─── Variation 01a · Chevron grammar ──────────────────────────────
// The chevron arm (Λ) from the logo body is the only new motif.
// Used as: pillar accent, list-marker, "Take part →" pointer, link
// affordance, divider centrepiece.
function VarChevron() {
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Variation · 01a</div>
      <h2 className="dir-name">Hairlines + chevron grammar</h2>
      <p className="dir-thesis">
        The chevron arm (Λ) from the logo body becomes the page’s direction-and-pointing
        grammar. It marks list items, ends the &quot;Take part&quot; pointer, sits in the
        centre of section dividers, and replaces every &quot;→&quot; arrow with a vertically
        precise pointer that descends from the brand mark.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {PILLARS.map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div className="var-pillar">
                <div className="num" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ChevronGlyph size={10} stroke={3} color="var(--burgundy)" />
                  <span>{n}</span>
                </div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="takepart">
          <span>Have you been invited to take part in a study?</span>
          <a href="#">See here&nbsp;<ChevronInline size={11} color="var(--burgundy)" dir="right" stroke={2.4} style={{ marginLeft: 2 }} /></a>
        </div>
      </div>

      {/* Body micro-grammar — chevron list + section opener */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; body grammar</span>
        <div className="grammar">
          <div>
            <div className="var-sec-h">
              <h4>How we work</h4>
              <span className="after" />
            </div>
            <p className="var-body" style={{ marginBottom: 12, color: 'var(--slate)' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <ul className="chev-list">
              {FLOW.map((line, i) => (
                <li key={i}>
                  <span className="marker"><ChevronInline size={10} dir="down" stroke={2.2} /></span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 9, letterSpacing: '0.18em', color: 'var(--burgundy)', marginBottom: 10 }}>
              ETHICS &amp; DATA
            </div>
            <p className="var-body">
              We take this very seriously. Participants give us informed consent before
              taking part, and can withdraw it at any time — before, during, or after a
              session. The full account is in our&nbsp;
              <a href="#" style={{ color: 'var(--burgundy)', borderBottom: '0.5px solid var(--burgundy)' }}>privacy policy
                <ChevronInline size={9} color="var(--burgundy)" dir="right" stroke={2.4} style={{ marginLeft: 4 }} />
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider">
          <span className="rule" />
          <ChevronGlyph size={14} stroke={3.4} color="var(--burgundy)" />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Chevron Λ at multiple scales: 10px (list marker), 14px (divider), 22px (section opener).</li>
            <li>All right-pointing arrows replaced with the inline chevron ›.</li>
            <li>Brackets &amp; hairlines from 01 stay; chevron is the only added shape.</li>
            <li><em>Why it works:</em> the chevron is already the logo’s body. Reusing it doesn’t introduce a new graphic family.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Chevron list markers <em>drop in</em> from above (8px translate + fade) one beat ahead of their line.</li>
            <li>Inline link chevron nudges 2px right on hover.</li>
            <li>Divider chevron rotates a single beat (0° → 5° → 0°) when the section enters view.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Variation 01b · Ring constellation ───────────────────────────
// The six heads from the mark (without their chevrons) are re-laid
// out as section openers. One-of-six gets filled to mark the current
// section. Reads like a chapter indicator — pages of the same book.
function VarConstellation() {
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Variation · 01b</div>
      <h2 className="dir-name">Hairlines + ring constellation</h2>
      <p className="dir-thesis">
        The six head-rings from the mark are extracted and re-laid out as a chapter
        indicator. One ring fills in to mark the current section — pages of the same book,
        not a navigation menu. Quiet, evenly-spaced, low-contrast against Paper.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {PILLARS.map(([n, t, p], i) => (
            <div key={n} className="pillar-mock">
              <div className="var-pillar">
                <div className="glyph-row">
                  <RingConstellation size={28} color="var(--burgundy)" filledIndex={i} />
                </div>
                <div className="num">{n}</div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="takepart">
          <span>Have you been invited to take part in a study?</span>
          <a href="#">See here&nbsp;›</a>
        </div>
      </div>

      {/* Body grammar — constellation in the section opener */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; body grammar</span>
        <div className="grammar">
          <div>
            <div className="var-sec-h" style={{ alignItems: 'center' }}>
              <RingConstellation size={26} color="var(--burgundy)" filledIndex={1} />
              <h4>How we work</h4>
              <span className="after" />
            </div>
            <p className="var-body" style={{ marginBottom: 12, color: 'var(--slate)' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 13, lineHeight: 1.55 }}>
              {FLOW.map((line, i) => <li key={i} style={{ marginBottom: 6 }}>{line}</li>)}
            </ol>
          </div>
          <div>
            <div className="var-sec-h" style={{ alignItems: 'center' }}>
              <RingConstellation size={26} color="var(--burgundy)" filledIndex={3} />
              <h4>Ethics &amp; data</h4>
              <span className="after" />
            </div>
            <p className="var-body">
              We take this very seriously. Participants give us informed consent before
              taking part, and can withdraw it at any time — before, during, or after a
              session. The full account is in our&nbsp;
              <a href="#" style={{ color: 'var(--burgundy)', borderBottom: '0.5px solid var(--burgundy)' }}>privacy policy</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Divider — constellation between rules */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider">
          <span className="rule" />
          <RingConstellation size={32} color="var(--burgundy)" filledIndex={-1} />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Six rings only — the heads from the mark, laid out radially.</li>
            <li>Filled ring marks current section; unfilled = remainder.</li>
            <li>Used at 26–32px. Smaller and it loses the geometry.</li>
            <li><em>Note:</em> reads cleanly because it doesn’t compete with the watermark — the chevrons are absent.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Rings fade in clockwise from 12 o’clock (60ms stagger), one beat before the heading.</li>
            <li>On entering a new section, the previously-filled ring fades and the new one fills in (~250ms cross-fade).</li>
            <li>Hover on a pillar: its ring breathes once (subtle scale, ~3%).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Variation 01c · Single figure ────────────────────────────────
// One head+chevron unit, extracted from the mark, becomes the
// "respondent" glyph. Used beside pull-quotes ("one resident said")
// and at the take-part pointer. Carries the human in the practice.
function VarSingleFigure() {
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Variation · 01c</div>
      <h2 className="dir-name">Hairlines + single-figure mark</h2>
      <p className="dir-thesis">
        One figure — a head and its chevron — is extracted from the six. It becomes the
        respondent glyph: a single voice. Used beside pull-quotes, at the take-part pointer,
        anywhere the page references a participant directly. Brings the human into a
        page that’s otherwise all rules.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {PILLARS.map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div className="var-pillar">
                <div className="num">{n}</div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="takepart" style={{ alignItems: 'center' }}>
          <SingleFigure size={18} color="var(--burgundy)" />
          <span>Have you been invited to take part in a study?</span>
          <a href="#">See here&nbsp;›</a>
        </div>
      </div>

      {/* Body — figure-led pull-quote */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; participant pull-quote</span>
        <div className="grammar">
          <div>
            <div className="var-sec-h">
              <h4>How we work</h4>
              <span className="after" />
            </div>
            <p className="var-body" style={{ marginBottom: 12, color: 'var(--slate)' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 13, lineHeight: 1.55 }}>
              {FLOW.map((line, i) => <li key={i} style={{ marginBottom: 6 }}>{line}</li>)}
            </ol>
          </div>
          <div>
            <div style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 9, letterSpacing: '0.18em', color: 'var(--burgundy)', marginBottom: 14 }}>
              FROM A CONVERSATION
            </div>
            <div className="quote-fig">
              <SingleFigure size={42} color="var(--burgundy)" />
              <div>
                <div className="body">
                  &ldquo;I’ve lived here all my life. I don’t recognise the place they’re
                  describing in the leaflets.&rdquo;
                </div>
                <cite>Resident, 30-minute catchment · anonymised</cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider">
          <span className="rule" />
          <SingleFigure size={20} color="var(--burgundy)" />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>One head + one chevron. The mark, divided by six.</li>
            <li>Always used singularly — never tiled, never grouped.</li>
            <li>Appears only where a real participant is referenced.</li>
            <li><em>Why it works:</em> turns &quot;one of six&quot; into a literal one-voice glyph. Specific to research, not generic.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Figure draws itself: head ring first (~150ms), chevron sweeps in after.</li>
            <li>Pull-quote slides up 10px on scroll-in; figure leads by 80ms.</li>
            <li>Hover on the take-part pointer: figure scales 105%, head ring closes a touch.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Variation 01d · Radial fan ───────────────────────────────────
// The six chevrons explode outward, heads stripped, apexes pointing
// out — a compact radial ornament. Replaces a section-mark or
// asterism wherever the page needs one. Single use, never crowded.
function VarFan() {
  return (
    <div className="ppr" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Variation · 01d</div>
      <h2 className="dir-name">Hairlines + radial fan</h2>
      <p className="dir-thesis">
        Strip the heads, keep the six chevrons, point them outward. The result is a
        compact radial ornament that replaces every &quot;⁂&quot; or section-mark moment on the
        page. Used sparingly — once per page transition — and never repeated within a
        section.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {PILLARS.map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div className="var-pillar">
                <div className="glyph-row">
                  <RadialFan size={22} color="var(--burgundy)" stroke={11} />
                </div>
                <div className="num">{n}</div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="takepart">
          <span>Have you been invited to take part in a study?</span>
          <a href="#">See here&nbsp;›</a>
        </div>
      </div>

      {/* Body */}
      <div className="zone body-zone">
        <span className="zone-label">Section opener &amp; body grammar</span>
        <div className="grammar">
          <div>
            <div className="var-sec-h" style={{ alignItems: 'center' }}>
              <RadialFan size={22} color="var(--burgundy)" stroke={11} />
              <h4>How we work</h4>
              <span className="after" />
            </div>
            <p className="var-body" style={{ marginBottom: 12, color: 'var(--slate)' }}>
              Every project is different, but our approach has a typical shape.
            </p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', fontSize: 13, lineHeight: 1.55 }}>
              {FLOW.map((line, i) => <li key={i} style={{ marginBottom: 6 }}>{line}</li>)}
            </ol>
          </div>
          <div>
            <div className="var-sec-h" style={{ alignItems: 'center' }}>
              <RadialFan size={22} color="var(--burgundy)" stroke={11} />
              <h4>Ethics &amp; data</h4>
              <span className="after" />
            </div>
            <p className="var-body">
              We take this very seriously. Participants give us informed consent before
              taking part, and can withdraw it at any time — before, during, or after a
              session. The full account is in our&nbsp;
              <a href="#" style={{ color: 'var(--burgundy)', borderBottom: '0.5px solid var(--burgundy)' }}>privacy policy</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Divider — the fan at larger scale, between rules */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="fan-divider">
          <span className="rule" />
          <RadialFan size={36} color="var(--burgundy)" stroke={10} />
          <span className="rule" />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Six chevrons radiating outward. Heads absent.</li>
            <li>Two scales: 22px (section opener) and 36px (page divider).</li>
            <li>Never used at hero scale — the watermark already does that job.</li>
            <li><em>Why it works:</em> sits beside the watermark without competing — different orientation, different absence (no heads).</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Fan rotates 60° (one figure forward) when its section is reached. ~400ms, single beat.</li>
            <li>Each of the six chevrons fades in sequentially (50ms stagger) on first page load.</li>
            <li>Hover on a pillar: the fan rotates by 60° once.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  VarChevron, VarConstellation, VarSingleFigure, VarFan,
});
