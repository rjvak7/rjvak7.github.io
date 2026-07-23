import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const publicationsUrl = new URL(
  "../app/publications/page.tsx",
  import.meta.url,
);
const groupUrl = new URL("../app/group/page.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);

test("homepage carries the finished research positioning", async () => {
  const page = await readFile(pageUrl, "utf8");

  assert.match(page, /Current projects/);
  assert.match(page, /I work on the foundations of machine learning/);
  assert.match(page, /Google Scholar/);
  assert.match(page, /href="\/publications"/);
  assert.match(page, /href="\/group"/);
  assert.match(page, /multiple PhD positions available/);
  assert.doesNotMatch(page, /News and updates|NSF CAREER Award/);
  assert.doesNotMatch(page, /Selected publications|Students and collaborators/);
  assert.doesNotMatch(
    page,
    /Machine learning theory for reliable and efficient systems/,
  );
  assert.doesNotMatch(page, /tag-list|<Tags|tags:/);
});

test("publications and students have dedicated pages", async () => {
  const [publications, group] = await Promise.all([
    readFile(publicationsUrl, "utf8"),
    readFile(groupUrl, "utf8"),
  ]);

  assert.match(publications, /Recent and representative work/);
  assert.match(publications, /Sharpness-Aware Machine Unlearning/);
  assert.match(group, /Students and collaborators/);
  assert.match(group, /student-placeholder-1\.svg/);
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
