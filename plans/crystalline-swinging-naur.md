# SF Symbols in Prototype — 2 Solutions

## Context

The pill icons use SF Symbol Unicode private-use-area codepoints (e.g. `\u{100CB3}` for soccer, `\u{100433}` for running) rendered with `font-family: "SF Pro"`. The NavItem-1 Figma import also uses this pattern (`\u{1009A5}` at 17px). These codepoints only render when the actual SF Pro font binary is loaded — Figma has it, but web browsers cannot access it as a named font (`"SF Pro"` is not a valid CSS system-font alias). Result: tofu boxes on all non-Apple devices, and even on Apple devices in most browsers.

**Affected file:** `src/App.tsx` — the `Pill` component icon container (~lines 424–440) and the icon data in `MAIN_TABS` (~lines 44–64).

---

## Solution 1 — Embed SF Pro via `figma fonts resolve` (keeps codepoints)

Figma Make's CLI can resolve and download the SF Pro font file that Figma itself uses.

**Steps:**
1. Run `figma fonts resolve` with the required faces (SF Pro Regular, the symbol range) to get a `.woff2` output file placed under `src/assets/`.
2. Add a `@font-face` declaration in `src/index.css` pointing at that file, declared under the family name `"SF Pro"` (matching what the icon container already uses).
3. No changes needed to `App.tsx` icon data or rendering — the existing codepoints and font-family string will now resolve.

**Pros:** Zero visual change, matches Figma 1:1, codepoints stay as-is.  
**Cons:** SF Pro is Apple-proprietary; embedding it may violate licensing outside the Figma Make sandbox. File size adds ~200–400 KB. Symbols range coverage depends on which font version the CLI resolves.

---

## Solution 2 — Replace codepoints with inline SVG icons (no font dependency)

Swap the Unicode characters for inline `<svg>` elements using the exact paths from SF Symbols — the same paths Figma already exports for other icons in this project (see `src/imports/NavItem/svg-ma6idkz1pe.ts` for the chevron pattern).

**Steps:**
1. Add an SVG path constant for each sport icon (soccerball, tennis ball, cycling figure, hockey figure, swimming figure, running figure). The running figure path is already used in the NavItem import (`\u{100433}` → known path). The others can be sourced from the SF Symbols app's SVG export or a community path library.
2. In the `PillConfig` interface, change `icon` from `string` (codepoint) to `ReactNode` (or keep as string and add a separate `iconSvg` field).
3. Update the icon container in `Pill` to render the SVG at 20×20 (matching the current `w-[20px]` container) instead of a text node.
4. Update `MAIN_TABS` data to use SVG elements instead of codepoints.

**Pros:** Works on every device and browser, no font licensing concern, crisp at all DPIs, exact SF Symbols geometry.  
**Cons:** Requires sourcing the correct SVG paths for each symbol; the data definitions become slightly more verbose.

---

## Recommendation

**Solution 2 (SVG)** is the more robust choice for a prototype that needs to work cross-platform. Solution 1 is faster to implement if this prototype runs exclusively inside Figma Make's sandboxed preview where the font is already available.
