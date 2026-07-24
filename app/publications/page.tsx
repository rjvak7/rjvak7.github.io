import type { Metadata } from "next";
import Link from "next/link";
import { publications } from "./data";

export const metadata: Metadata = {
  title: "Publications | Rajiv Khanna",
  description: "Complete publication list for Rajiv Khanna.",
};

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
            <Link href="/">Home</Link>
            <Link href="/#research">Current projects</Link>
            <Link aria-current="page" href="/publications">
              Publications
            </Link>
            <Link href="/teaching">Teaching</Link>
            <Link href="/group">Group</Link>
          </div>
        </nav>
      </header>

      <main className="publications section-block subpage-main">
        <div className="section-container">
          <div className="section-heading publications-heading">
            <div>
              <p className="section-label">Publications</p>
              <h1>Complete publication list</h1>
            </div>
            <div className="section-links">
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
                  <span className="venue">
                    {paper.venue.replace(paper.year, "").trim()}
                  </span>
                  <span>{paper.year}</span>
                </div>
                <div className="publication-title">
                  <h2>
                    {paper.href ? (
                      <a href={paper.href} target="_blank" rel="noreferrer">
                        {paper.title} ↗
                      </a>
                    ) : (
                      paper.title
                    )}
                  </h2>
                </div>
                <p>{paper.authors}</p>
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
