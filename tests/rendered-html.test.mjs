import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);

test("homepage carries the finished research positioning", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /what to keep/);
  assert.match(page, /what to forget/);
  assert.match(page, /when to defer/);
  assert.match(page, /NSF CAREER Award/);
  assert.match(page, /Selected work/);
  assert.match(page, /Build with us/);
});

test("starter preview metadata and components are gone", async () => {
  const [page, layout] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.match(layout, /Rajiv Khanna/);
});
