// MakeFun Competition Entrypoint
// Entry validated: output is 1-120 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "You can mash all my floor buttons at once, but we both know you are just auditioning to be my prisoner.";

if (!(1 <= LINE.length && LINE.length <= 120 && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("Validation failed");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, LINE, "utf-8");

console.log(outputPath);
console.log(LINE.length);
