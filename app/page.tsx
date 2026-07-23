const researchThreads = [
  {
    number: "01",
    title: "Understand the geometry",
    body: "I study how loss landscapes shape stability, memorization, generalization, and the surprising simplicity bias of modern optimizers.",
    tags: ["Optimization", "Stability", "Generalization"],
  },
  {
    number: "02",
    title: "Make forgetting real",
    body: "Privacy is not just an output-layer problem. My group develops methods to find, measure, and remove what models have memorized.",
    tags: ["Unlearning", "Privacy", "Memorization"],
  },
  {
    number: "03",
    title: "Distill the data",
    body: "From coresets to sparsification and active inference, I build principled ways to do more with less data, labeling, and computation.",
    tags: ["Coresets", "Data selection", "Efficiency"],
  },
  {
    number: "04",
    title: "Design with people",
    body: "I investigate when AI should align with human judgment, when it should complement it, and when it should know enough to defer.",
    tags: ["Human-AI", "LLMs", "Collaboration"],
  },
];

const selectedWork = [
  {
    year: "2026",
    venue: "ICLR",
    title: "Sharpness-Aware Machine Unlearning",
    note: "Moves machine forgetting beyond logits and into learned representations.",
    tone: "acid",
  },
  {
    year: "2026",
    venue: "ACL Findings",
    title:
      "From Fallback to Frontline: When Can LLMs be Superior Annotators of Human Perspectives?",
    note: "Asks when language models can responsibly improve on human annotation.",
    tone: "coral",
  },
  {
    year: "2025",
    venue: "NeurIPS",
    title:
      "Stable Coresets via Posterior Sampling: Aligning Induced and Full Loss Landscapes",
    note: "Builds compact datasets that preserve the geometry of the full problem.",
    tone: "blue",
  },
  {
    year: "2025",
    venue: "NeurIPS",
    title:
      "A Unified Stability Analysis of SAM vs SGD: Role of Data Coherence and Emergence of Simplicity Bias",
    note: "Connects optimization, data coherence, and the solutions models prefer.",
    tone: "violet",
  },
  {
    year: "2024",
    venue: "KDD",
    title:
      "Approximating Memorization Using Loss Surface Geometry for Dataset Pruning and Summarization",
    note: "Turns a model’s geometry into a practical signal for selecting data.",
    tone: "pink",
  },
  {
    year: "2020",
    venue: "NeurIPS · Best Paper",
    title:
      "Improved Guarantees and a Multiple-Descent Curve for Column Subset Selection and the Nyström Method",
    note: "One of three best papers selected from more than 9,400 submissions.",
    tone: "gold",
  },
];

const trajectory = [
  {
    date: "2022 — now",
    place: "Purdue University",
    role: "Assistant Professor · Computer Science",
  },
  {
    date: "2021",
    place: "Google Research",
    role: "Visiting Faculty Researcher",
  },
  {
    date: "2019 — 2021",
    place: "UC Berkeley",
    role: "Postdoctoral Scholar · Foundations of Data Analysis Institute",
  },
  {
    date: "2018",
    place: "Simons Institute",
    role: "Research Fellow · Foundations of Data Science",
  },
];

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Rajiv Khanna, home">
          <span>RK</span>
          <span className="wordmark-text">Rajiv Khanna</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Selected work</a>
          <a href="#path">Path</a>
        </nav>
        <a className="header-contact" href="mailto:rajivak@purdue.edu">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              NSF CAREER awardee · Purdue Computer Science
            </div>
            <h1 id="hero-title">
              Machine learning that knows{" "}
              <span className="underline acid-line">what to keep,</span>{" "}
              <span className="underline coral-line">what to forget,</span> and{" "}
              <span className="underline blue-line">when to defer.</span>
            </h1>
            <div className="hero-bottom">
              <p>
                I build theoretical foundations for machine learning systems
                that behave predictably in the messy real world—from the
                geometry of optimization and data selection to privacy,
                unlearning, and human-AI collaboration.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#research">
                  Explore the research <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="text-link"
                  href="https://scholar.google.com/citations?user=523w4w8AAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Scholar <Arrow />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="contour contour-one" aria-hidden="true" />
            <div className="contour contour-two" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src="/rajiv-khanna.jpg"
                alt="Rajiv Khanna smiling against a light background"
                width="800"
                height="450"
              />
            </div>
            <div className="portrait-stamp" aria-label="Theory meets practice">
              <span>Theory</span>
              <span aria-hidden="true">×</span>
              <span>Practice</span>
            </div>
            <p className="portrait-caption">
              Rajiv Khanna
              <span>Assistant Professor · Purdue CS</span>
            </p>
          </div>
        </section>

        <aside className="proof-strip" aria-label="Selected highlights">
          <div className="proof-label">Signal, not noise</div>
          <div className="proof-item">
            <strong>2026</strong>
            <span>NSF CAREER</span>
          </div>
          <div className="proof-item">
            <strong>16</strong>
            <span>publications · 2024–26</span>
          </div>
          <div className="proof-item">
            <strong>1 of 3</strong>
            <span>NeurIPS 2020 best papers</span>
          </div>
          <div className="proof-venues">
            ICLR · ICML · NeurIPS · COLT · ACL
          </div>
        </aside>

        <section className="research section-shell" id="research">
          <div className="section-kicker">Research program</div>
          <div className="research-intro">
            <h2>
              Powerful models are easy to admire.
              <br />
              <em>Understanding their behavior is the work.</em>
            </h2>
            <p>
              My group works across machine learning theory, optimization, and
              human-centered AI. The common thread is a practical one: build
              systems whose behavior we can explain, shape, and trust.
            </p>
          </div>

          <div className="research-grid">
            {researchThreads.map((thread) => (
              <article className="research-card" key={thread.number}>
                <div className="card-number">{thread.number}</div>
                <h3>{thread.title}</h3>
                <p>{thread.body}</p>
                <ul aria-label={`${thread.title} topics`}>
                  {thread.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="work-heading">
            <div>
              <div className="section-kicker">Selected work</div>
              <h2>Recent ideas, in the wild.</h2>
            </div>
            <div className="work-links">
              <a
                href="https://rjvak7.github.io/pubs.html"
                target="_blank"
                rel="noreferrer"
              >
                All publications <Arrow />
              </a>
              <a
                href="https://dblp.org/pid/31/4624.html"
                target="_blank"
                rel="noreferrer"
              >
                DBLP <Arrow />
              </a>
            </div>
          </div>

          <div className="publication-list">
            {selectedWork.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-meta">
                  <span className={`venue venue-${paper.tone}`}>
                    {paper.venue}
                  </span>
                  <span>{paper.year}</span>
                </div>
                <h3>{paper.title}</h3>
                <p>{paper.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="award-callout" aria-labelledby="award-title">
          <div className="award-mark" aria-hidden="true">
            26
          </div>
          <div className="award-copy">
            <div className="section-kicker">Current signal</div>
            <h2 id="award-title">NSF CAREER Award · 2026</h2>
            <p>
              Recognized by the National Science Foundation for a program of
              ambitious research and education at the intersection of machine
              learning theory and real-world behavior.
            </p>
          </div>
          <a
            className="button button-light"
            href="https://research.purdue.edu/about/research-updates/academic-and-research-excellence-updates/are-2026-06-29/"
            target="_blank"
            rel="noreferrer"
          >
            Purdue announcement <Arrow />
          </a>
        </section>

        <section className="path section-shell" id="path">
          <div className="path-intro">
            <div className="section-kicker">The path here</div>
            <h2>
              Theory that has
              <br />
              survived contact
              <br />
              <span>with practice.</span>
            </h2>
            <p>
              Before academia, I built web-scale prediction and recommendation
              systems at Yahoo! Labs, then worked at LinkedIn, Microsoft
              Research, ETH Zürich, and Google Research.
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
            <div className="timeline-row timeline-education">
              <div className="timeline-date">Education</div>
              <div>
                <h3>UT Austin · IIT Bombay</h3>
                <p>PhD, ECE · MTech, Computer Science</p>
              </div>
            </div>
          </div>
        </section>

        <section className="join" id="join" aria-labelledby="join-title">
          <div className="join-top">
            <div className="section-kicker">Build with us</div>
            <span className="join-status">
              <span aria-hidden="true" /> Recruiting
            </span>
          </div>
          <h2 id="join-title">
            Bring a hard question.
            <br />
            <span>Leave with a sharper one.</span>
          </h2>
          <div className="join-bottom">
            <div className="join-copy">
              <p>
                I have multiple PhD positions available and am welcoming
                conversations with Fall 2026 IPAI postdoctoral applicants. If
                you are drawn to theory that survives contact with practice,
                tell me what you want to understand.
              </p>
              <p className="join-note">
                Prospective PhD students should apply to Purdue Computer Science
                and mention my name in their application.
              </p>
            </div>
            <a className="email-link" href="mailto:rajivak@purdue.edu">
              rajivak@purdue.edu <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer>
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
          <a href="#top">Back to top ↑</a>
        </div>
        <div className="footer-note">
          Learning is geometry.
          <br />
          Make the shape legible.
        </div>
      </footer>
    </>
  );
}
