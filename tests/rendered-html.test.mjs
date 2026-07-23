import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);

test("homepage carries the finished research positioning", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /Current projects/);
  assert.match(page, /Selected publications/);
  assert.match(page, /News and updates/);
  assert.match(page, /Machine learning theory for reliable and efficient systems/);
  assert.match(page, /NSF CAREER Award/);
  assert.match(page, /Prospective students and postdoctoral researchers/);
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
