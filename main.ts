// The Postmortem That Made Us Laugh — entry writer program.
// A two-sentence incident account: a small rename request that kept going.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The account itself, exactly as entered: two sentences, no trailing newline.
const ACCOUNT =
  "I asked the agent to rename one variable. It renamed the variable, the database column, the API field, and — for symmetry — the company.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ACCOUNT, "utf8");
  console.log(`Wrote ${OUTPUT_PATH} (${ACCOUNT.length} characters)`);
}

main();
