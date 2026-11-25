// Entry for make.fun bounty "One Line, One Week: The make.fun Tagline"
// (u-boge-one-line-one-week-the-make-fun-tagline-66aca584).
// Writes one tagline (at most 100 characters) to /output/entry.txt.
// Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Build the agent. Enter the bounty. Beat the board. make.fun pays the best code, in the open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
