// PPR — Step 1b. The user picked Direction A's big-emblem hero, but wants
// to explore alternative *body-grammar* languages for everything below it.
//
// All four options share one hero (Direction A, locked). What varies:
// pillar tiles, section headings, dividers, pull-quotes, callouts.

const SharedHeroPeek = () => (
  <div className="hero-peek">
    <div className="peek-tag">Hero · locked from Direction A</div>
    <div className="emblem-wm">
      <EmblemMark size={160} color="var(--burgundy)" />
    </div>
    <h1>We research how people feel about places.</h1>
    <p className="sub">
      People &amp; Places Research is a small market research practice. We work with the
      organisations responsible for shaping new and changing communities. We find the
      right people. We listen. We interpret what we hear, so it informs real decisions.
    </p>
  </div>
);

// ─── Option 1 — Hairlines & brackets ──────────────────────────────
// A grammar of thin Burgundy rules. Every section block begins with a
// small "⌐" bracket and a hairline rule. Pillar tiles are framed by
// hairline brackets. Pull-quotes get a Burgundy left rule. Nothing
// illustrated — the punctuation IS the illustration.
function OptionHairlines() {
  return (
    <div className="ppr opt-hl" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Sub-system · 01</div>
      <h2 className="dir-name">Hairlines &amp; brackets</h2>
      <p className="dir-thesis">
        A grammar of thin Burgundy rules. Every section opens with a small bracket and a
        hairline. Pillars carry a top rule with a corner-tick. Pull-quotes get a Burgundy
        left rule. Nothing is illustrated below the hero — the punctuation does the work.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {[
            ['01', 'Ruthlessly accurate', 'Methodologically neutral. Samples matched to the question, not the brief.'],
            ['02', 'Specialists in place', 'We focus on how people feel about where they live, and where they might.'],
            ['03', 'Built to inform decisions', 'Findings, ordered by importance. Method at the back for anyone checking.'],
          ].map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div className="pillar-hl">
                <div className="num">{n}</div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body micro-grammar */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; body</span>
        <div className="grammar">
          <div>
            <div className="sec-h">
              <h4>How we work</h4>
              <span className="after" />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>
              We define the sample around the question, not the other way around. For a
              study on attitudes to a specific scheme, that usually means people who
              already live near it, and people whose circumstances suggest they might
              move to it.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 9, letterSpacing: '0.18em', color: 'var(--burgundy)', marginBottom: 10 }}>
              FROM A REPORT
            </div>
            <div className="pq">
              We don't ask leading questions, and we say so when something didn't come up.
              <cite>Methodology note · 2025</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock">
          <div style={{ width: '100%', position: 'relative', height: 12 }}>
            <div style={{ position: 'absolute', left: 0, top: 6, width: '100%', height: 0.5, background: 'var(--burgundy)', opacity: 0.7 }} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: 12, height: 12, borderLeft: '0.5px solid var(--burgundy)', borderTop: '0.5px solid var(--burgundy)' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, width: 12, height: 12, borderRight: '0.5px solid var(--burgundy)', borderTop: '0.5px solid var(--burgundy)' }} />
          </div>
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>0.5px hairlines in Burgundy or Stone.</li>
            <li>Small corner brackets (⌐ ¬) frame anything that wants to be set apart.</li>
            <li>Section labels overhang into the margin.</li>
            <li>No glyphs. No icons. Punctuation only.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Rules <em>draw in</em> left-to-right on scroll into view (~400ms).</li>
            <li>Corner brackets fade in <em>after</em> their rule finishes.</li>
            <li>Hover on pillar: top rule thickens 0.5 → 1px in Burgundy.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Option 2 — Numerals as anchors ───────────────────────────────
// Big old-style Georgia figures carry the page. Pillars open with a
// large 01/02/03. Sections numbered "§ 02 — How we work". Statistics
// are blown up at body-text scale and let speak for themselves.
function OptionNumerals() {
  return (
    <div className="ppr opt-nu" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Sub-system · 02</div>
      <h2 className="dir-name">Numerals as anchors</h2>
      <p className="dir-thesis">
        Old-style Georgia figures are the only decoration. Pillars open with a large
        01 / 02 / 03 in Burgundy. Sections are numbered <em>§ 02 — How we work</em>.
        Sample sizes and catchments get blown up at body-text scale. The numbers do
        what an icon would do elsewhere.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {[
            ['01', 'Ruthlessly accurate', 'Methodologically neutral. Samples matched to the question, not the brief.'],
            ['02', 'Specialists in place', 'We focus on how people feel about where they live, and where they might.'],
            ['03', 'Built to inform decisions', 'Findings, ordered by importance. Method at the back for anyone checking.'],
          ].map(([n, t, p]) => (
            <div key={n} className="pillar-mock">
              <div className="pillar-nu">
                <div className="fig">{n}</div>
                <div>
                  <h3 className="t">{t}</h3>
                  <p className="t">{p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body micro-grammar */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; stat callout</span>
        <div className="grammar">
          <div>
            <div className="sec-h">
              <h4><span className="sec">§ 02</span> &nbsp;How we work</h4>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>
              We define the sample around the question, not the other way around. For a
              study on attitudes to a specific scheme, that usually means people who
              already live near it, and people whose circumstances suggest they might
              move to it.
            </p>
          </div>
          <div>
            <div style={{ display: 'grid', gap: 18 }}>
              <div className="pq">
                <span className="big">412</span>
                <div className="lbl"><strong>residents</strong><br />within a 30-minute drive of the site</div>
              </div>
              <div className="pq">
                <span className="big">14</span>
                <div className="lbl"><strong>weeks</strong><br />from brief to report — typical study</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock" style={{ gap: 14 }}>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
          <span style={{
            fontFamily: 'Georgia, serif',
            fontVariantNumeric: 'oldstyle-nums',
            fontSize: 18, fontStyle: 'italic',
            color: 'var(--burgundy)', letterSpacing: '0.05em',
          }}>§ 03</span>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Old-style Georgia figures at 48–72px, Burgundy or Ink.</li>
            <li>Section mark <em>§</em> + section number, italic.</li>
            <li>Big statistics double as decoration: "412 residents · 14 weeks".</li>
            <li>Reuses what's already in the brief's voice (concrete numbers).</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Stats count up from 0 → final value on scroll into view (~700ms, ease-out).</li>
            <li>Pillar numeral lifts 2px and warms to Burgundy on hover.</li>
            <li>One-off only — never re-trigger on re-scroll.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Option 3 — Indexed / call-numbers ────────────────────────────
// Every block is catalogued. Tiny monospace labels in the margins
// (§ 1.2, Fig. 03, p. 04). Pillars have call-numbers. A TOC-style
// leader-dot list appears on long-form pages. Reads as archival.
function OptionIndexed() {
  return (
    <div className="ppr opt-ix" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Sub-system · 03</div>
      <h2 className="dir-name">Indexed</h2>
      <p className="dir-thesis">
        The page is catalogued. Every block carries a tiny monospace call-number — <em>§ 1.2</em>,
        <em> Fig. 03</em>, <em>p. 04</em>. Pillars are listed. Long-form pages can include a
        TOC with leader dots. Reads as library, archive, research register.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {[
            ['§ 01', 'Method', 'Ruthlessly accurate', 'Methodologically neutral. Samples matched to the question, not the brief.'],
            ['§ 02', 'Place', 'Specialists in place', 'We focus on how people feel about where they live, and where they might.'],
            ['§ 03', 'Report', 'Built to inform decisions', 'Findings, ordered by importance. Method at the back for anyone checking.'],
          ].map(([ref, sub, t, p]) => (
            <div key={ref} className="pillar-mock">
              <div className="pillar-ix">
                <div className="tag">
                  <span>{ref}</span>
                  <span className="dot" />
                  <span style={{ color: 'var(--slate)' }}>{sub}</span>
                </div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body micro-grammar */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; in-body grammar</span>
        <div className="grammar">
          <div>
            <div className="sec-h">
              <h4>How we work</h4>
              <span className="ref">§ 1.2 · p. 04</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink)', margin: 0 }}>
              We define the sample around the question, not the other way around. For a
              study on attitudes to a specific scheme, that usually means people who
              already live near it, and people whose circumstances suggest they might
              move to it.
            </p>
            <div className="pq" style={{ marginTop: 18 }}>
              <span className="ref-tag">QUOTE · § 1.2</span>
              "We don't ask leading questions, and we say so when something didn't come up."
              <cite>Methodology note · 2025</cite>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace', fontSize: 9, letterSpacing: '0.18em', color: 'var(--burgundy)', marginBottom: 10 }}>
              ON THIS PAGE
            </div>
            <div className="toc">
              <span className="lbl">How we work</span><span className="pg">§ 1.2</span>
              <span className="lbl">Recruiting a sample</span><span className="pg">§ 1.3</span>
              <span className="lbl">Running the conversation</span><span className="pg">§ 1.4</span>
              <span className="lbl">How findings get reported</span><span className="pg">§ 1.5</span>
              <span className="lbl">Privacy &amp; data handling</span><span className="pg">§ 1.6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock" style={{ gap: 14 }}>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
          <span style={{
            fontFamily: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
            fontSize: 10, letterSpacing: '0.18em',
            color: 'var(--burgundy)', textTransform: 'uppercase',
          }}>§ 02 · How we work</span>
          <div style={{ flex: 1, height: 0.5, background: 'var(--stone)' }} />
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Monospace call-numbers — § 1.2, Fig. 03, p. 04.</li>
            <li>Leader-dot TOCs available on long-form pages.</li>
            <li>Anything quotable gets a tag: <em>QUOTE · § 1.2</em>.</li>
            <li>Marginal page-number-style refs in the right-side margin.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Call-number labels animate in with a 100ms <em>delay after</em> their block — settles like a librarian's stamp.</li>
            <li>Hover on a TOC line: leader dots condense subtly to point at the entry.</li>
            <li>Scroll-spy: current section's call-number lights Burgundy in the sidebar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Option 4 — Diagrammatic ──────────────────────────────────────
// The page reads as an annotated diagram. Pull-quotes are linked to
// their source paragraph by a thin Burgundy leader line. Pillars
// each open with a small leader-line annotation. The body itself
// gets quiet underlines under terms that have a margin note.
function OptionDiagrammatic() {
  // Small leader-line glyph used as pillar diag
  const Leader = ({ label }) => (
    <svg viewBox="0 0 200 46" width="100%" height="46" style={{ overflow: 'visible' }}>
      <circle cx="14" cy="32" r="3" fill="var(--burgundy)" />
      <path
        d="M 14 32 L 14 14 L 60 14"
        stroke="var(--burgundy)" strokeWidth="0.6" fill="none"
      />
      <text x="64" y="17" fontFamily='ui-monospace, "SF Mono", Menlo, monospace' fontSize="9" letterSpacing="2.2" fill="var(--burgundy)">{label}</text>
    </svg>
  );

  return (
    <div className="ppr opt-dg" style={{ padding: '32px 40px 36px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="dir-label">Sub-system · 04</div>
      <h2 className="dir-name">Diagrammatic</h2>
      <p className="dir-thesis">
        The page reads as an annotated diagram. Pull-quotes connect back to their source
        paragraph by a thin Burgundy leader line. Pillars open with a tiny annotation
        pointing into the headline. Highlighted terms in body text earn a small margin note.
      </p>

      <SharedHeroPeek />

      {/* Pillars */}
      <div className="zone">
        <span className="zone-label">Pillar tiles</span>
        <div className="pillars-mock">
          {[
            ['NEUTRAL', 'Ruthlessly accurate', 'Methodologically neutral. Samples matched to the question, not the brief.'],
            ['FOCUS', 'Specialists in place', 'We focus on how people feel about where they live, and where they might.'],
            ['USE', 'Built to inform decisions', 'Findings, ordered by importance. Method at the back for anyone checking.'],
          ].map(([lbl, t, p]) => (
            <div key={lbl} className="pillar-mock">
              <div className="pillar-dg">
                <div className="diag"><Leader label={lbl} /></div>
                <h3 className="t">{t}</h3>
                <p className="t">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body micro-grammar */}
      <div className="zone body-zone">
        <span className="zone-label">Section heading &amp; annotated body</span>
        <div className="grammar">
          <div>
            <div className="sec-h">
              <h4>How we work</h4>
            </div>
            <p className="body-text" style={{ margin: 0 }}>
              We define the <mark>sample</mark> around the question, not the other way
              around. For a study on attitudes to a specific scheme, that usually means
              people who already live near it, and people whose circumstances suggest
              they might move to it.
            </p>
          </div>
          <div className="pq">
            <svg className="leader-svg" viewBox="0 0 50 36">
              <path d="M 0 18 L 28 18 L 28 30 L 48 30" stroke="var(--burgundy)" strokeWidth="0.6" fill="none" />
              <circle cx="48" cy="30" r="2.5" fill="var(--burgundy)" />
            </svg>
            <div className="label">RE: SAMPLE</div>
            <blockquote>"We tell you what each option will and won't let us say."</blockquote>
          </div>
        </div>
      </div>

      {/* Divider — a leader-line composition */}
      <div className="zone">
        <span className="zone-label">Section divider</span>
        <div className="divider-mock">
          <svg viewBox="0 0 360 24" width="360" height="24">
            <line x1="0" y1="12" x2="120" y2="12" stroke="var(--stone)" strokeWidth="0.5" />
            <circle cx="120" cy="12" r="2.5" fill="var(--burgundy)" />
            <line x1="120" y1="12" x2="160" y2="12" stroke="var(--burgundy)" strokeWidth="0.6" />
            <line x1="160" y1="12" x2="160" y2="4" stroke="var(--burgundy)" strokeWidth="0.6" />
            <line x1="160" y1="4" x2="240" y2="4" stroke="var(--burgundy)" strokeWidth="0.6" />
            <line x1="240" y1="4" x2="240" y2="12" stroke="var(--burgundy)" strokeWidth="0.6" />
            <line x1="240" y1="12" x2="360" y2="12" stroke="var(--stone)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="notes">
        <div>
          <h4>Vocabulary</h4>
          <ul>
            <li>Thin (0.6px) Burgundy leader lines.</li>
            <li>Small dot + perpendicular hook at each line end.</li>
            <li>Monospace, all-caps "RE: …" labels at the callout end.</li>
            <li>Underlined terms in body text have a margin annotation.</li>
          </ul>
        </div>
        <div>
          <h4>Motion</h4>
          <ul>
            <li>Leader lines <em>draw themselves</em> on scroll into view (~600ms).</li>
            <li>Hovering an underlined term lights its leader line + margin note in Burgundy.</li>
            <li><em>Risk:</em> can read as engineering-drawing if pushed. Keep callouts to one per section.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  SharedHeroPeek,
  OptionHairlines, OptionNumerals, OptionIndexed, OptionDiagrammatic,
});
