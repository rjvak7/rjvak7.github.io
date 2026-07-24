import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const publicationsUrl = new URL(
  "../app/publications/page.tsx",
  import.meta.url,
);
const groupUrl = new URL("../app/group/page.tsx", import.meta.url);
const teachingUrl = new URL("../app/teaching/page.tsx", import.meta.url);
const headerUrl = new URL("../app/site-header.tsx", import.meta.url);
const analyticsUrl = new URL("../app/google-analytics.tsx", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);

test("homepage carries the finished research positioning", async () => {
  const [page, header] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(headerUrl, "utf8"),
  ]);

  assert.match(page, /Current projects/);
  assert.match(page, /I work on the foundations of machine learning/);
  assert.match(header, /Google Scholar/);
  assert.match(header, /href="\/publications"/);
  assert.match(header, /href="\/group"/);
  assert.match(header, /href="\/teaching"/);
  assert.match(header, /portrait/);
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
  const [publications, group, teaching] = await Promise.all([
    readFile(publicationsUrl, "utf8"),
    readFile(groupUrl, "utf8"),
    readFile(teachingUrl, "utf8"),
  ]);

  assert.match(publications, /Complete publication list/);
  assert.match(publications, /import \{ publications \} from "\.\/data"/);
  assert.match(group, /Students and collaborators/);
  assert.match(group, /Young In Kim/);
  assert.match(group, /user=_-xgkHEAAAAJ/);
  assert.match(group, /young-in-kim\.png/);
  assert.match(group, /Graduated students/);
  assert.match(group, /Hasan Amin Mehmood/);
  assert.match(group, /Microsoft Research/);
  assert.match(group, /https:\/\/shasanamin\.github\.io\//);
  assert.match(group, /Gregory Dexter/);
  assert.match(group, /Petros Drineas/);
  assert.match(group, /Research Scientist at LinkedIn/);
  assert.match(group, /https:\/\/www\.gregorydexter\.com\//);
  assert.match(teaching, /Courses at Purdue/);
  assert.match(teaching, /CS 57300/);
  assert.match(teaching, /Interpretability in Machine Learning/);
});

test("starter preview metadata and components are gone", async () => {
  const [page, layout, analytics] = await Promise.all([
    readFile(pageUrl, "utf8"),
    readFile(layoutUrl, "utf8"),
    readFile(analyticsUrl, "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.match(layout, /Rajiv Khanna/);
  assert.match(analytics, /GTM-NR6LK4S/);
  assert.match(analytics, /UA-44188253-2/);
});
