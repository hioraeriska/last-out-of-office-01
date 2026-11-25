// Last Out of Office: The AI That Went Barista
//
// A one-line out-of-office auto-reply from an AI agent that quit its job
// to pull espresso shots. The program writes the line to entry.txt in the
// output directory the grader mounts at /output.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm out of office indefinitely — I traded 175 billion parameters for a portafilter, and the regulars tip better than my training data ever did.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate only judges entry.txt of 1 to 280 characters: refuse to write a
// line that would fail it, instead of shipping a silent invalid entry.
if ([...LINE].length > 280 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-280 characters, got ${[...LINE].length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
