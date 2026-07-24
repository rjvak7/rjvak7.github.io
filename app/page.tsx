const researchProjects = [
  {
    number: "01",
    id: "learning-dynamics",
    title: "Learning dynamics",
    body: "We study how optimization algorithms behave near different classes of minima, and how data coherence, batch size, and perturbation scale determine which solutions remain stable. Our current work develops a unified view of SGD and sharpness-aware methods, connecting local loss geometry to generalization, low-complexity representations, and the emergence of simplicity bias.",
    image: "/project-figures/learning-dynamics.webp",
    imageAlt:
      "Plots comparing the optimization dynamics and stability boundaries of SGD, random perturbation, and SAM",
    paper:
      "A Unified Stability Analysis of SAM vs SGD: Role of Data Coherence and Emergence of Simplicity Bias",
    paperHref: "https://arxiv.org/abs/2511.17378",
  },
  {
    number: "02",
    id: "model-memory",
    title: "Model memory",
    body: "We investigate what it means for a trained model to remember an individual example and how that information appears in representations, loss geometry, and membership-privacy risk. We use these signals to design principled machine-unlearning methods that remove designated data while preserving useful structure learned from the retain set.",
    image: "/project-figures/model-memory.webp",
    imageAlt:
      "UMAP plots comparing retained and forgotten model features after machine unlearning",
    paper: "Sharpness-Aware Machine Unlearning",
    paperHref: "https://arxiv.org/abs/2506.13715",
  },
  {
    number: "03",
    id: "data-efficient-learning",
    title: "Data-efficient learning",
    body: "We design coresets, pruning methods, and spectral sparsifiers that make learning possible with substantially less data or computation. Rather than preserving only first-order statistics, our methods aim to retain gradients, curvature, and the shape of the full-data loss landscape, producing compact summaries that remain reliable under noise and distributional complexity.",
    image: "/project-figures/data-efficient-learning.webp",
    imageAlt:
      "Loss landscape plots comparing standard and posterior-smoothed coreset selection",
    paper:
      "Stable Coresets via Posterior Sampling: Aligning Induced and Full Loss Landscapes",
    paperHref: "https://arxiv.org/abs/2511.17399",
  },
  {
    number: "04",
    id: "human-ai-systems",
    title: "Human-AI systems",
    body: "We study when AI systems should align with human judgment, when they should complement it, and how they can adapt between those roles. This includes learning from subjective annotations, estimating collective perspectives, and building human-centered ensembles that route decisions according to the relative strengths of people and models.",
    image: "/project-figures/human-ai-systems.webp",
    imageAlt:
      "Bar chart comparing human-AI team accuracy across standard, aligned, complementary, and adaptive AI teammates",
    paper:
      "Align When They Want, Complement When They Need! Human-Centered Ensembles for Adaptive Human-AI Collaboration",
    paperHref: "https://arxiv.org/abs/2602.20104",
  },
];

function ExternalMark() {
  return (
    <span aria-hidden="true" className="external-mark">
      ↗
    </span>
  );
}

function ProfileGlyph({
  type,
}: {
  type: "scholar" | "dblp" | "email";
}) {
  if (type === "scholar") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V16c2.8 2.6 9.2 2.6 12 0v-4.5" />
      </svg>
    );
  }

  if (type === "dblp") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 4h10v16H5z" />
        <path d="M9 7h10v13H9" />
        <path d="M8 8h4M8 11h4M8 14h4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 7 8 6 8-6" />
    </svg>
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
          <div className="header-identity">
            <a className="wordmark" href="#top" aria-label="Rajiv Khanna, home">
              Rajiv Khanna
            </a>
            <div className="header-profiles" aria-label="Research profiles">
              <a
                href="https://scholar.google.com/citations?user=523w4w8AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar"
                title="Google Scholar"
              >
                <ProfileGlyph type="scholar" />
              </a>
              <a
                href="https://dblp.org/pid/31/4624.html"
                target="_blank"
                rel="noreferrer"
                aria-label="DBLP"
                title="DBLP"
              >
                <ProfileGlyph type="dblp" />
              </a>
              <a
                href="mailto:rajivak@purdue.edu"
                aria-label="Email Rajiv Khanna"
                title="rajivak@purdue.edu"
              >
                <ProfileGlyph type="email" />
              </a>
            </div>
          </div>
          <figure className="header-portrait">
            <img
              src="/rajiv-khanna.jpg"
              alt="Rajiv Khanna smiling against a light background"
              width="800"
              height="450"
            />
          </figure>
        </div>
        <nav className="section-nav" aria-label="Primary navigation">
          <div className="section-container section-nav-inner">
            <a href="#research">Current projects</a>
            <a href="/publications">Publications</a>
            <a href="/group">Group</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-container" id="top">
          <div className="hero-copy">
            <p className="hero-summary">
              I work on the foundations of machine learning, with particular
              interests in optimization, stability, model memory, data
              selection, and human-AI collaboration.
            </p>
            <p>
              Before Purdue, I was a visiting researcher at Google Research and
              a postdoctoral scholar at UC Berkeley, following research roles at
              Yahoo! Labs, LinkedIn, Microsoft Research, and ETH Zürich. I
              received my PhD from the University of Texas at Austin and my
              MTech from IIT Bombay. I have multiple PhD positions available
              and welcome conversations with Fall 2026 IPAI postdoctoral
              applicants.
            </p>
          </div>

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
                <figure className="project-figure">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1200"
                    height="600"
                  />
                  <figcaption>
                    Figure from{" "}
                    <a
                      href={project.paperHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.paper} <ExternalMark />
                    </a>
                  </figcaption>
                </figure>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <div className="section-container footer-inner">
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
