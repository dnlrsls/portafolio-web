---
name: ASCII Evidence Folio
description: A dual-theme monochrome editorial portfolio whose hierarchy is built from real ASCII compositions and inspectable evidence.
colors:
  canvas: "#0C0C0B"
  elevated-surface: "#151513"
  primary-text: "#F1EEE6"
  secondary-text: "#C8C4BA"
  muted-text: "#AAA69D"
  rule: "#3D3C38"
  light-canvas: "#E2E6EB"
  light-elevated-surface: "#EEF1F4"
  light-primary-text: "#121418"
  light-secondary-text: "#343942"
  light-muted-text: "#59616D"
  light-rule: "#75818E"
  light-rule-strong: "#585F6A"
  light-flow-primary: "#252A31"
  light-flow-secondary: "#343B45"
  light-flow-structural: "#59616D"
typography:
  display:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(51px, 7.2vw, 96px)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.025em"
  ascii:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "clamp(7px, 0.78vw, 11px)"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  micro:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "9px"
  detail:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "12px"
  small-body:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "13px"
  mobile-body:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "14px"
  role:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(23px, 2.2vw, 34px)"
  section:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(52px, 6.4vw, 84px)"
  project:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(44px, 5vw, 70px)"
  repository:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(42px, 5vw, 66px)"
  service:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 39px)"
  contact:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(58px, 7.5vw, 96px)"
  contact-link:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(28px, 4.2vw, 58px)"
  mobile-ascii:
    fontFamily: "Fragment Mono, Lucida Console, monospace"
    fontSize: "clamp(5px, 1.45vw, 8px)"
  mobile-role:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(24px, 8vw, 31px)"
  mobile-section:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(46px, 14vw, 62px)"
  mobile-project:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(40px, 13vw, 56px)"
  mobile-contact:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(50px, 15vw, 66px)"
  mobile-contact-link:
    fontFamily: "Doto Variable, sans-serif"
    fontSize: "clamp(25px, 8.2vw, 37px)"
rounded:
  square: "0"
components:
  action-primary:
    backgroundColor: "transparent"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.square}"
    padding: "9px 0"
    height: "44px"
  action-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.square}"
    padding: "9px 0"
    height: "44px"
---

# Design System: ASCII Evidence Folio

## Overview

**Creative North Star: "The Human-Readable Source File"**

The portfolio behaves like a carefully composed text artifact rather than a terminal
simulation. Real ASCII characters create the wordmark, section frames, navigation
brackets, delivery rails, record summaries, and service diagrams. If supporting prose
disappears, the remaining character skeleton still names
and separates the hero, work, open-source, services, and contact passages.

The system keeps the approved mineral-black night field and adds a cold-neutral daylight
field without changing the real character world. Both retain restrained neutral hierarchy,
generous editorial spacing, and the genuine GitHub-avatar-derived ASCII portrait. Public
project and tool names, URLs, factual scopes, and evidence-backed capabilities remain the
only evidence material.

**Key Characteristics:**

- A clearly readable semantic Doto `DANIEL ROSALES` inside one character-built hero frame.
- Reusable build-time ASCII heading and rail components with semantic headings.
- Doto Variable as the readable dot-matrix display voice; Fragment Mono for ASCII and copy.
- A compact unified hero, an equal-weight open-source tool showcase, clear project records, and a framed contact close.
- No simulated telemetry, status feed, terminal color, texture, glow halo, or machine theater.

## Colors

The palette uses stable semantic roles rather than mechanical inversion.

### Dark

- **Canvas `#0C0C0B`:** mineral-black page field.
- **Elevated surface `#151513`:** quiet interactive separation.
- **Primary text `#F1EEE6`:** warm-white names, headings, actions, and factual evidence.
- **Secondary text `#C8C4BA`:** identity, selection, and supporting emphasis.
- **Muted text `#AAA69D`:** readable prose, metadata, motion, and focus outlines.
- **Rule `#3D3C38`:** structural frames, rails, and separators.

The darker neutral `#5F5D58` is reserved for subtle structural depth. No saturated
accent palette, terminal signaling, gradient text, glow, glass, scan lines, static,
noise, or rainbow treatment belongs in this system. Hierarchy comes from stable
monochrome roles, type, spacing, and structure rather than hue.

### Light

- **Canvas `#E2E6EB`:** fully opaque mineral-cool daylight field that reduces glare without merging into the global ASCII field.
- **Elevated surface `#EEF1F4`:** quiet row and interactive separation.
- **Primary text `#121418`:** headings, actions, and factual evidence.
- **Secondary text `#343942`:** identity, selection, and supporting emphasis.
- **Muted text `#59616D`:** prose, metadata, and focus outlines.
- **Rule `#75818E`:** visible structural frames, rails, and separators.
- **Strong rule `#585F6A`:** portrait depth and stronger structural separation.
- **Moving characters `#252A31`, `#343B45`, and `#59616D`:** primary, secondary, and structural glyph roles remain distinct at restrained opacity.

## Typography

**Display Font:** Doto Variable, self-hosted through `@fontsource-variable/doto`.
**Body and ASCII Font:** Fragment Mono, self-hosted through `@fontsource/fragment-mono`.

Doto's open SIL OFL 1.1 package includes Latin and Latin Extended coverage. The site
uses its weight axis at 650 and square dot construction for readable semantic headings,
project and tool names, service titles, the role line, and contact address.
Fragment Mono renders every exact character composition and remains the body/evidence
voice. The glyph banners provide identity; Doto provides legible hierarchy.

### Hierarchy

- **Hero name** (Doto 650, fluid 51–96px): a readable two-line semantic `h1` at every breakpoint.
- **Major heading** (Doto 650, fluid 46–96px, 0.98–1.05): semantic section declarations.
- **Record title** (Doto 650, fluid 28–70px): clients, tools, and services.
- **Body** (Fragment Mono 400, 12–15px, 1.5–1.65): concise copy with a 46–65ch measure.
- **ASCII rail** (Fragment Mono 400, 7–10px): structural frames sized to the container.

## ASCII System

`AsciiHeading.astro` can deterministically build three-line frames around localized
major section labels. Work and open-source frames use section-specific textures; the
Services and Contact call sites suppress those decorative banners while retaining their
clean semantic Doto `h2` elements. Frames are hidden from assistive technology, and the
component's neutral `div` root avoids nested header landmarks when a section supplies
the semantic grouping.

`AsciiRail.astro` builds localized one-line rails for project and tool records. The hero
name is plain semantic Doto text inside the `h1`. Copy, portrait, and actions
share one real character frame. Its top edge and side rails are decorative DOM text
hidden from assistive technology; essential content remains concise semantic text. Project
and tool cards follow title, category, summary, and CTA; underlying delivery and
provenance facts remain in their content sources without being rendered as complete lists.

One viewport-fixed Canvas 2D field sits behind explicit foreground content and draws
only `. : + - *` as a stable character soup using cached, theme-resolved neutral-gray roles.
The deterministic full-canvas lattice occupies every region with exactly 76 × 40 = 3,040 desktop
glyphs or 24 × 42 = 1,008 mobile glyphs, in 12px or 10px Fragment Mono respectively. Every glyph
remains anchored to its lattice position and independently oscillates 10–16px per axis over
deterministic 4–7-second periods. Transparent page gutters keep the field open, while restrained
local text underlays protect dense reading groups. It uses a 1.5 DPR cap, pauses when the document
is hidden, and OS reduced motion renders the field completely static.

On fine pointers, the viewport supplies a 140px radial target-displacement field with a broad
`1.25` falloff exponent. A 28px displacement cap, 180px/s velocity cap, 120 spring, and 22 damping
produce a compact, calm radial response. Pointer state resets when tracking
leaves the viewport, is cancelled, or the window blurs. The field updates every 24ms while influenced
and every 50ms while idle. Coarse pointers retain only the autonomous oscillation. Reduced motion
disables both and keeps the field completely static.

The corrected GitHub-avatar-derived portrait uses sparse-to-dense luminance mapping,
a centered vignette, background suppression, and the correct 10×14 character-cell
aspect ratio so the face and hair remain recognizable. It is a static light-on-dark or
dark-on-light neutral rendering on a transparent stage with no rectangle or animation loop.

The Gentle AI and Engram tool artworks are static ASCII strings deterministically derived
from supplied source PNGs, never hand-authored. Both tools share the exact same deterministic
conversion and layout parameters: Rec.709 area luminance (72%) blended with deterministic 3×3
Sobel edge magnitude (28%), background threshold `2/255`, black point `8/255`, contrast
expansion to `128/255`, emission threshold `38/255`, and the ` .:-=+*#%@` ASCII ramp. Gentle
AI uses the bloom-only crop `(left: 280, top: 70, width: 700, height: 580)`; Engram uses
`(left: 75, top: 145, width: 980, height: 765)`. Both use exact 80×35 wide / 50×22 compact
grids and the same figure geometry, centered alignment, overflow behavior, and 4.9px/5.3px
wide and 5.2px/6.2px compact character metrics. The art is a localized semantic figure with
its character grid hidden from assistive technology.

ASCII carries hierarchy, never fake system state. Brackets clarify controls; arrows
clarify link direction; rails group factual records. Decorative
ASCII is `aria-hidden`, and essential information remains semantic text.

## Layout and Pacing

The centered container is capped at 1240px with 24px desktop, 18px tablet, and 14px
mobile gutters. Desktop uses asymmetrical splits; below 980px the page becomes one
reading column. Every grid track that can contain bilingual text has a zero minimum.

Pacing deliberately changes:

- The 76px site header remains fixed above the artifact flow. Desktop `100svh` sections
  reserve the header and safe-area band once, then center their compositions in the
  remaining viewport; at and below 980px, the flow remains content-driven while navigation
  is hidden and identity and preferences remain. Its quiet theme-aware canvas surface has
  no blur, shadow, gradient, scroll-state behavior, or motion.
- The hero is the densest composition: readable name, copy, actions, smaller transparent portrait, and proof occupy one frame in the first desktop viewport.
- Selected work appears first as a `100svh` desktop stage containing a centered `80svh`
  shared frame at the hero's 1128px visual width. Its bilingual introduction uses approximately 30% of the section height;
  GRUPO AMSA and JIREH VYP share the remaining space as equivalent semantic columns inside one
  continuous character-built outer frame and central divider. Each column keeps its delivery
  rail, factual evidence, and continuous real-ASCII link-to-arrow run. At and below 980px,
  viewport fitting is abandoned: the introduction and both projects stack in source order at
  content-driven height, with horizontal character rails replacing the central divider.
- Open source follows in the same `100svh` outer stage and centered `80svh` shared frame.
  Its bilingual introduction uses the same neutral header system before equal-width Gentle AI
  and Engram columns with body content, a centered responsive ASCII figure in the flexible
  middle area, and bottom-aligned repository actions. Wide grids switch to compact grids at
  640px; the 38-row Gentle AI grid has stable 4.6px/4.7px wide line metrics for a 178.6px
  text height (194.6px including the figure's vertical padding), while its 24-row compact grid uses 5.2px/6px metrics. Local clipping
  protects the card and document widths without altering the character aspect ratio. At and below 980px, the frame and
  tool articles become content-driven and stack in source order.
- Services form a vertical ASCII branch diagram in a `100svh` desktop outer stage only.
- Contact closes with direct copy, email, and bracketed links in a `100svh` desktop outer stage only.

Wide and compact ASCII variants are stored as static source strings. Compact frames fit within
390px without horizontal scrolling, while long decorative lines are clipped inside
their own container rather than expanding the document.

## Interaction and Accessibility

- Primary external actions in selected work and open source share an unfilled bracket, run,
  and arrow grammar with native link semantics and at least 44px targets; language controls
  retain native buttons.
- Keyboard focus uses a three-pixel muted-neutral outline with four-pixel offset.
- Desktop full-viewport stages use zero document scroll padding because their internal
  header-band reservation keeps centered compositions below the fixed header. At and below
  980px, document-level scroll padding clears the fixed header, a 12px focus buffer, and the
  top safe-area inset for content-driven hash navigation without adding section offsets or
  changing flow.
- Hover changes value and position slightly without changing layout.
- Language selection remains automatic on first visit and persistent after manual choice.
  One native 44px toggle shows the active `[ES]` or `[EN]` state and names the next
  language in its accessible label.
- Theme selection follows the operating system until the visitor uses the compact
  `[DARK]` / `[LIGHT]` control. Manual choice persists independently from language;
  theme metadata, favicon, and both canvases update with the semantic roles.
- The portrait keeps its localized text alternative, static fallback, Canvas enhancement,
  and reduced-motion behavior.
- The global field's independent 10–16px per-axis oscillation over deterministic 4–7-second periods, plus compact bounded fine-pointer repulsion, are the only authored motion system.
  Reduced motion keeps the background Canvas completely static, collapses the portrait readiness
  transition, and disables smooth scrolling.

## Do's and Don'ts

### Do:

- Use real text characters when a rail, frame, corner, or state benefits hierarchy.
- Keep Doto headings readable and reserve ASCII banners for the Work and Open Source silhouette.
- Preserve broad black space around dense character passages.
- Keep facts, URLs, tool capabilities, and bilingual copy grounded in verified evidence.
- Test both generated widths and the longer language at 390px.

### Don't:

- Add decorative telemetry, timestamps, protocol codes, status seals, stamps, or feeds.
- Add Matrix rain, scan lines, static, noise, colored terminal effects, or fake machine output.
- Replace semantic controls with character art or make screen readers parse ASCII pictures.
- Use CSS borders alone where the design promises a character-built structure.
- Invent clients, metrics, testimonials, permissions, or tool capabilities.
