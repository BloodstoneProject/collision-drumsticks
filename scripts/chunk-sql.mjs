// Splits a large SQL file into smaller chunks for sequential execution.
import { readFileSync, writeFileSync } from 'node:fs';

const inFile = process.argv[2];
const outPrefix = process.argv[3];
const stmtsPerChunk = Number(process.argv[4] ?? 10);

if (!inFile || !outPrefix) {
  console.error('Usage: node chunk-sql.mjs <input.sql> <out-prefix> [stmts-per-chunk]');
  process.exit(1);
}

const content = readFileSync(inFile, 'utf8');
// Split on `;\n` followed by either INSERT or end. Each statement ends with `;\n`
const statements = content.split(/;\s*\n(?=(?:INSERT|--))/g)
  .map((s, i, arr) => i === arr.length - 1 ? s : s + ';')
  .filter((s) => s.trim().length > 0 && /INSERT/i.test(s));

console.log(`Found ${statements.length} statements`);

let chunkIndex = 0;
for (let i = 0; i < statements.length; i += stmtsPerChunk) {
  const chunk = statements.slice(i, i + stmtsPerChunk).join('\n');
  const path = `${outPrefix}-${String(chunkIndex).padStart(3, '0')}.sql`;
  writeFileSync(path, chunk);
  chunkIndex++;
}

console.log(`Wrote ${chunkIndex} chunks to ${outPrefix}-NNN.sql`);
