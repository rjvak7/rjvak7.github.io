import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teaching | Rajiv Khanna",
  description:
    "Courses taught by Rajiv Khanna in the Department of Computer Science at Purdue University.",
};

const courses = [
  {
    semester: "Fall 2026",
    code: "CS 57300",
    title: "Data Mining",
    level: "Graduate",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2026_fall_courses.html",
  },
  {
    semester: "Spring 2026",
    code: "CS 37300",
    title: "Data Mining and Machine Learning",
    level: "Undergraduate · Co-instructor",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2026_spring_courses.html",
  },
  {
    semester: "Fall 2025",
    code: "CS 57300",
    title: "Data Mining",
    level: "Graduate",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2025_fall_courses.html",
  },
  {
    semester: "Spring 2025",
    code: "CS 57300",
    title: "Data Mining",
    level: "Graduate",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2025_spring_courses.html",
  },
  {
    semester: "Spring 2024",
    code: "CS 57300",
    title: "Data Mining",
    level: "Graduate",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2024_spring_courses.html",
  },
  {
    semester: "Fall 2023",
    code: "CS 37300",
    title: "Data Mining and Machine Learning",
    level: "Undergraduate · Co-instructor",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2023_fall_courses.html",
  },
  {
    semester: "Spring 2023",
    code: "CS 57300",
    title: "Data Mining",
    level: "Graduate",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2023_spring_courses.html",
  },
  {
    semester: "Fall 2022",
    code: "CS 57300",
    title: "Data Mining",
    level: "Graduate",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2022_fall_courses.html",
  },
  {
    semester: "Spring 2022",
    code: "CS 59200-IML",
    title: "Interpretability in Machine Learning",
    level: "Graduate special topics",
    href: "https://www.cs.purdue.edu/academic-programs/courses/2022_spring_courses.html",
  },
];

export default function TeachingPage() {
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
            <Link href="/publications">Publications</Link>
            <Link aria-current="page" href="/teaching">
              Teaching
            </Link>
            <Link href="/group">Group</Link>
          </div>
        </nav>
      </header>

      <main className="teaching section-block subpage-main">
        <div className="section-container">
          <p className="section-label">Teaching</p>
          <h1>Courses at Purdue</h1>
          <p className="teaching-intro">
            Undergraduate and graduate courses taught in the Department of
            Computer Science.
          </p>

          <div className="course-list">
            {courses.map((course) => (
              <article
                className="course-row"
                key={`${course.semester}-${course.code}`}
              >
                <time>{course.semester}</time>
                <div className="course-code">{course.code}</div>
                <div>
                  <h2>{course.title}</h2>
                  <p>{course.level}</p>
                </div>
                <a href={course.href} target="_blank" rel="noreferrer">
                  Purdue listing ↗
                </a>
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
