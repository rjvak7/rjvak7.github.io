import Link from "next/link";

type CurrentPage = "home" | "publications" | "teaching" | "group";

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

export default function SiteHeader({
  current,
}: {
  current: CurrentPage;
}) {
  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <div className="header-identity">
          <Link className="wordmark" href="/" aria-label="Rajiv Khanna, home">
            Rajiv Khanna
          </Link>
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
          <Link aria-current={current === "home" ? "page" : undefined} href="/">
            Home
          </Link>
          <Link href="/#research">Recent projects</Link>
          <Link
            aria-current={current === "publications" ? "page" : undefined}
            href="/publications"
          >
            Publications
          </Link>
          <Link
            aria-current={current === "teaching" ? "page" : undefined}
            href="/teaching"
          >
            Teaching
          </Link>
          <Link
            aria-current={current === "group" ? "page" : undefined}
            href="/group"
          >
            Group
          </Link>
        </div>
      </nav>
    </header>
  );
}
