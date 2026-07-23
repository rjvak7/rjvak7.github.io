import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications | Rajiv Khanna",
  description: "Selected and representative publications by Rajiv Khanna.",
};

const publications = [
  {
    year: "2026",
    venue: "ICLR",
    title: "Sharpness-Aware Machine Unlearning",
    note: "Studies machine unlearning beyond output behavior, including how information persists in learned representations.",
  },
  {
    year: "2026",
    venue: "ACL Findings",
    title:
      "From Fallback to Frontline: When Can LLMs be Superior Annotators of Human Perspectives?",
    note: "Examines when language models can augment or improve human annotation for subjective tasks.",
  },
  {
    year: "2025",
    venue: "NeurIPS",
    title:
      "Stable Coresets via Posterior Sampling: Aligning Induced and Full Loss Landscapes",
    note: "Constructs compact datasets that preserve important aspects of the full problem’s loss landscape.",
  },
  {
    year: "2025",
    venue: "NeurIPS",
    title:
      "A Unified Stability Analysis of SAM vs SGD: Role of Data Coherence and Emergence of Simplicity Bias",
    note: "Connects optimization dynamics, data coherence, stability, and the solutions selected by learning algorithms.",
  },
  {
    year: "2024",
    venue: "KDD",
    title:
      "Approximating Memorization Using Loss Surface Geometry for Dataset Pruning and Summarization",
    note: "Uses loss-surface geometry as a practical signal for identifying influential and redundant data.",
  },
  {
    year: "2020",
    venue: "NeurIPS · Best Paper",
    title:
      "Improved Guarantees and a Multiple-Descent Curve for Column Subset Selection and the Nyström Method",
    note: "Develops new guarantees for fundamental data approximation problems; selected as one of three best papers.",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <header className="subpage-header" id="top">
        <div className="section-container subpage-masthead">
          <Link className="wordmark" href="/">
            Rajiv Khanna
          </Link>
          <Link href="/">Home</Link>
        </div>
        <nav className="section-nav" aria-label="Primary navigation">
          <div className="section-container section-nav-inner">
            <Link href="/#research">Current projects</Link>
            <Link aria-current="page" href="/publications">
              Publications
            </Link>
            <Link href="/group">Group</Link>
          </div>
        </nav>
      </header>

      <main className="publications section-block subpage-main">
        <div className="section-container">
          <div className="section-heading publications-heading">
            <div>
              <p className="section-label">Publications</p>
              <h1>Recent and representative work</h1>
            </div>
            <div className="section-links">
              <a
                href="https://rjvak7.github.io/pubs.html"
                target="_blank"
                rel="noreferrer"
              >
                Complete publication list ↗
              </a>
              <a
                href="https://dblp.org/pid/31/4624.html"
                target="_blank"
                rel="noreferrer"
              >
                DBLP ↗
              </a>
            </div>
          </div>

          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-meta">
                  <span className="venue">{paper.venue}</span>
                  <span>{paper.year}</span>
                </div>
                <div className="publication-title">
                  <h2>{paper.title}</h2>
                </div>
                <p>{paper.note}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer>
        <div className="section-container footer-inner">
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
