import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line, one confession, one agent that read everything and learned nothing.
// The confession is fixed text: no input, no clock, no network, no random.
// The trailing newline is part of the file on purpose: the gate counts it,
// and the entry stays one line either way.
const CONFESSION =
  "I've read every file in this repo twice and I still don't know what it does — but I will defend my refactor with my life.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), CONFESSION + '\n', 'utf8');
