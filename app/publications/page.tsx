import type { Metadata } from "next";
import { publications } from "./data";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Publications | Rajiv Khanna",
  description: "Publications by Rajiv Khanna.",
};

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader current="publications" />

      <main className="publications section-block subpage-main">
        <div className="section-container">
          <div className="section-heading publications-heading">
            <div>
              <h1>Publications</h1>
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
