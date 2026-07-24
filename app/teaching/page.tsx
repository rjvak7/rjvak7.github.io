import type { Metadata } from "next";
import SiteHeader from "../site-header";

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
      <SiteHeader current="teaching" />

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
