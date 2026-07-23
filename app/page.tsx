const researchProjects = [
  {
    number: "01",
    id: "learning-dynamics",
    title: "Learning dynamics",
    body: "We study how optimization and loss-surface geometry govern stability, generalization, memorization, and the implicit biases of modern learning algorithms.",
    tags: ["Optimization", "Stability", "Generalization"],
  },
  {
    number: "02",
    id: "model-memory",
    title: "Model memory",
    body: "We develop ways to characterize what a model has memorized, understand the privacy consequences, and remove information through principled machine unlearning.",
    tags: ["Memorization", "Privacy", "Unlearning"],
  },
  {
    number: "03",
    id: "data-efficient-learning",
    title: "Data-efficient learning",
    body: "We design algorithms for selecting, summarizing, and sparsifying data while preserving the statistical and geometric structure needed for learning.",
    tags: ["Coresets", "Data selection", "Sparsification"],
  },
  {
    number: "04",
    id: "human-ai-systems",
    title: "Human-AI systems",
    body: "We investigate how learning systems should align with human judgment, complement it, and adapt when people and models have different strengths.",
    tags: ["Human-AI", "LLMs", "Collaboration"],
  },
];

const selectedPublications = [
  {
    year: "2026",
    venue: "ICLR",
    title: "Sharpness-Aware Machine Unlearning",
    note: "Studies machine unlearning beyond output behavior, including how information persists in learned representations.",
    tags: ["Unlearning", "Memorization", "Optimization"],
  },
  {
    year: "2026",
    venue: "ACL Findings",
    title:
      "From Fallback to Frontline: When Can LLMs be Superior Annotators of Human Perspectives?",
    note: "Examines when language models can augment or improve human annotation for subjective tasks.",
    tags: ["Human-AI", "LLMs", "Collaboration"],
  },
  {
    year: "2025",
    venue: "NeurIPS",
    title:
      "Stable Coresets via Posterior Sampling: Aligning Induced and Full Loss Landscapes",
    note: "Constructs compact datasets that preserve important aspects of the full problem’s loss landscape.",
    tags: ["Coresets", "Data selection", "Optimization"],
  },
  {
    year: "2025",
    venue: "NeurIPS",
    title:
      "A Unified Stability Analysis of SAM vs SGD: Role of Data Coherence and Emergence of Simplicity Bias",
    note: "Connects optimization dynamics, data coherence, stability, and the solutions selected by learning algorithms.",
    tags: ["Stability", "Generalization", "Optimization"],
  },
  {
    year: "2024",
    venue: "KDD",
    title:
      "Approximating Memorization Using Loss Surface Geometry for Dataset Pruning and Summarization",
    note: "Uses loss-surface geometry as a practical signal for identifying influential and redundant data.",
    tags: ["Memorization", "Data selection", "Stability"],
  },
  {
    year: "2020",
    venue: "NeurIPS · Best Paper",
    title:
      "Improved Guarantees and a Multiple-Descent Curve for Column Subset Selection and the Nyström Method",
    note: "Develops new guarantees for fundamental data approximation problems; selected as one of three best papers.",
    tags: ["Data selection", "Sparsification", "Optimization"],
  },
];

const newsItems = [
  {
    date: "June 2026",
    category: "Award",
    title: "NSF CAREER Award",
    body: "Purdue recognized Rajiv among its 2026 recipients of the National Science Foundation’s Faculty Early Career Development Program award.",
    href: "https://research.purdue.edu/about/research-updates/academic-and-research-excellence-updates/are-2026-06-29/",
  },
  {
    date: "2026",
    category: "Publications",
    title: "Six papers across ICLR, ICML, ACL, COLT, and AAAI",
    body: "Recent work spans machine unlearning, privacy, diffusion language models, human-centered annotation, collaboration, and spectral methods.",
    href: "https://rjvak7.github.io/pubs.html",
  },
  {
    date: "Fall 2026",
    category: "Opportunities",
    title: "Postdoctoral and PhD positions",
    body: "The group is welcoming conversations with IPAI postdoctoral applicants and prospective Purdue Computer Science PhD students.",
    href: "https://ipai.research.purdue.edu/postdoctoral-fellows-program/",
  },
  {
    date: "2025",
    category: "Publications",
    title: "Three papers at NeurIPS",
    body: "New results on spectral sparsification, optimizer stability, and stable coreset construction.",
    href: "https://rjvak7.github.io/pubs.html",
  },
];

const trajectory = [
  {
    date: "2022 — present",
    place: "Purdue University",
    role: "Assistant Professor, Department of Computer Science",
  },
  {
    date: "2021",
    place: "Google Research",
    role: "Visiting Faculty Researcher",
  },
  {
    date: "2019 — 2021",
    place: "University of California, Berkeley",
    role: "Postdoctoral Scholar, Foundations of Data Analysis Institute",
  },
  {
    date: "2018",
    place: "Simons Institute for the Theory of Computing",
    role: "Research Fellow, Foundations of Data Science",
  },
];

function ExternalMark() {
  return (
    <span aria-hidden="true" className="external-mark">
      ↗
    </span>
  );
}

function Tags({
  tags,
  inverse = false,
}: {
  tags: string[];
  inverse?: boolean;
}) {
  return (
    <ul className={`tag-list${inverse ? " tag-list-inverse" : ""}`}>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label="Rajiv Khanna, home">
            Rajiv Khanna
            <span>Machine Learning Research</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#news">News</a>
            <a href="#biography">Biography</a>
          </nav>
          <a className="header-contact" href="mailto:rajivak@purdue.edu">
            Contact
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-container" id="top">
          <div className="hero-copy">
            <p className="overline">
              Assistant Professor of Computer Science · Purdue University
            </p>
            <h1>Machine learning theory for reliable and efficient systems.</h1>
            <p className="hero-summary">
              I work on the foundations of machine learning, with particular
              interests in optimization, stability, model memory, data
              selection, and human-AI collaboration.
            </p>
            <div className="hero-links" aria-label="Profile links">
              <a
                href="https://scholar.google.com/citations?user=523w4w8AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <ExternalMark />
              </a>
              <a
                href="https://dblp.org/pid/31/4624.html"
                target="_blank"
                rel="noreferrer"
              >
                DBLP <ExternalMark />
              </a>
              <a
                href="https://rjvak7.github.io/pubs.html"
                target="_blank"
                rel="noreferrer"
              >
                Full publication list <ExternalMark />
              </a>
            </div>
          </div>

          <figure className="hero-portrait">
            <img
              src="/rajiv-khanna.jpg"
              alt="Rajiv Khanna smiling against a light background"
              width="800"
              height="450"
            />
            <figcaption>
              <span>Rajiv Khanna</span>
              <span>Purdue Computer Science</span>
            </figcaption>
          </figure>
        </section>

        <section
          className="research section-block section-container"
          id="research"
          aria-labelledby="research-title"
        >
          <div className="section-heading">
            <div>
              <p className="section-label">Ongoing research</p>
              <h2 id="research-title">Current projects</h2>
            </div>
            <p>
              The group studies fundamental questions about how learning
              algorithms use data, what they retain, and how they interact with
              people. These four directions organize our current work.
            </p>
          </div>

          <div className="research-grid">
            {researchProjects.map((project) => (
              <article
                className="research-card"
                id={project.id}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <Tags tags={project.tags} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="publications section-block"
          id="publications"
          aria-labelledby="publications-title"
        >
          <div className="section-container">
            <div className="section-heading publications-heading">
              <div>
                <p className="section-label">Selected publications</p>
                <h2 id="publications-title">Recent and representative work</h2>
              </div>
              <div className="section-links">
                <a
                  href="https://rjvak7.github.io/pubs.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  All publications <ExternalMark />
                </a>
                <a
                  href="https://dblp.org/pid/31/4624.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  DBLP <ExternalMark />
                </a>
              </div>
            </div>

            <div className="publication-list">
              {selectedPublications.map((paper) => (
                <article className="publication" key={paper.title}>
                  <div className="publication-meta">
                    <span className="venue">{paper.venue}</span>
                    <span>{paper.year}</span>
                  </div>
                  <div className="publication-title">
                    <h3>{paper.title}</h3>
                    <Tags tags={paper.tags} inverse />
                  </div>
                  <p>{paper.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="news section-block section-container"
          id="news"
          aria-labelledby="news-title"
        >
          <div className="news-intro">
            <p className="section-label">News and updates</p>
            <h2 id="news-title">From the group</h2>
            <p>
              A running record of publications, talks, travel, awards, and
              group milestones.
            </p>
          </div>

          <div className="news-list">
            {newsItems.map((item) => (
              <article className="news-item" key={`${item.date}-${item.title}`}>
                <div className="news-meta">
                  <time>{item.date}</time>
                  <span>{item.category}</span>
                </div>
                <div>
                  <h3>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.title} <ExternalMark />
                    </a>
                  </h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="biography section-block"
          id="biography"
          aria-labelledby="biography-title"
        >
          <div className="section-container biography-grid">
            <div className="biography-copy">
              <p className="section-label">Biography</p>
              <h2 id="biography-title">Theory informed by practice</h2>
              <p>
                Before joining Purdue, I was a visiting researcher at Google
                Research and a postdoctoral scholar at UC Berkeley. Earlier in
                my career, I worked on large-scale prediction and recommendation
                systems at Yahoo! Labs, with additional research experience at
                LinkedIn, Microsoft Research, and ETH Zürich.
              </p>
              <p>
                I received my PhD in Electrical and Computer Engineering from
                the University of Texas at Austin and my MTech in Computer
                Science from IIT Bombay.
              </p>
            </div>

            <div className="timeline">
              {trajectory.map((item) => (
                <div className="timeline-row" key={`${item.date}-${item.place}`}>
                  <div className="timeline-date">{item.date}</div>
                  <div>
                    <h3>{item.place}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="opportunities" aria-labelledby="opportunities-title">
          <div className="section-container opportunities-grid">
            <div>
              <p className="section-label">Opportunities</p>
              <h2 id="opportunities-title">
                Prospective students and postdoctoral researchers
              </h2>
            </div>
            <div>
              <p>
                I have multiple PhD positions available and welcome
                conversations with Fall 2026 IPAI postdoctoral applicants.
                Prospective PhD students should apply to Purdue Computer Science
                and mention my name in their application.
              </p>
              <a className="contact-link" href="mailto:rajivak@purdue.edu">
                rajivak@purdue.edu <ExternalMark />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-container footer-inner">
          <div>
            <span className="footer-name">Rajiv Khanna</span>
            <span>Assistant Professor · Purdue Computer Science</span>
          </div>
          <div className="footer-links">
            <a
              href="https://scholar.google.com/citations?user=523w4w8AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Scholar
            </a>
            <a
              href="https://dblp.org/pid/31/4624.html"
              target="_blank"
              rel="noreferrer"
            >
              DBLP
            </a>
            <a
              href="https://www.cs.purdue.edu/people/faculty/rajivak.html"
              target="_blank"
              rel="noreferrer"
            >
              Purdue
            </a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
