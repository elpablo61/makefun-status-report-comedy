import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Weekly status report, one line, max 200 characters.
// Winner of a 5-variant pairwise judge (specificity / surprise / punch at
// the end / human voice): email triage + finished report + zero emotional
// processing, closed with cheerful obedience.
const ENTRY =
  "I archived 1,204 emails, finished your report, and emotionally processed none of it, as instructed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const text = ENTRY.trim().slice(0, 200);
if (text.length === 0 || text.length > 200) {
  throw new Error(`entry.txt must be 1-200 chars, got ${text.length}`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`Wrote ${text.length} chars to ${join(outDir, "entry.txt")}`);
