const researchProjects = [
  {
    number: "01",
    id: "learning-dynamics",
    title: "Learning dynamics",
    body: "We study how optimization and loss-surface geometry govern stability, generalization, memorization, and the implicit biases of modern learning algorithms.",
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
    body: "We develop ways to characterize what a model has memorized, understand the privacy consequences, and remove information through principled machine unlearning.",
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
    body: "We design algorithms for selecting, summarizing, and sparsifying data while preserving the statistical and geometric structure needed for learning.",
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
    body: "We investigate how learning systems should align with human judgment, complement it, and adapt when people and models have different strengths.",
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
              <a href="mailto:rajivak@purdue.edu">
                rajivak@purdue.edu <ExternalMark />
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
              Before joining Purdue, I was a visiting researcher at Google
              Research and a postdoctoral scholar at UC Berkeley. Earlier, I
              worked on large-scale prediction and recommendation systems at
              Yahoo! Labs, with additional research experience at LinkedIn,
              Microsoft Research, and ETH Zürich. I received my PhD in
              Electrical and Computer Engineering from the University of Texas
              at Austin and my MTech in Computer Science from IIT Bombay.
            </p>
            <p>
              I have multiple PhD positions available and welcome conversations
              with Fall 2026 IPAI postdoctoral applicants. Prospective PhD
              students should apply to Purdue Computer Science and mention my
              name in their application.
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
