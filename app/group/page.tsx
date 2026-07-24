import type { Metadata } from "next";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Group | Rajiv Khanna",
  description: "Students and collaborators in Rajiv Khanna’s research group.",
};

// Edit these entries to update the roster. Place replacement photos in
// public/group/ and change the corresponding image path below.
const groupMembers = [
  {
    name: "Young In Kim",
    role: "PhD Student",
    interests: null,
    image: "/group/young-in-kim.png",
    website:
      "https://scholar.google.com/citations?user=_-xgkHEAAAAJ&hl=en",
  },
  {
    name: "Wei-Kai Chang",
    role: "PhD Student",
    interests: null,
    image: "/group/wei-kai-chang.png",
    website:
      "https://scholar.google.com/citations?user=o-cU7CAAAAAJ&hl=en",
  },
  {
    name: "Haoran Tang",
    role: "PhD Student",
    interests: null,
    image: "/group/haoran-tang.png",
    website: "https://haorantang.github.io/",
  },
  {
    name: "Pinaki Mohanty",
    role: "PhD Student",
    interests: null,
    image: "/group/student-placeholder-1.svg",
    website: "https://pinakirm.github.io/",
  },
];

const graduatedStudents = [
  {
    name: "Hasan Amin Mehmood",
    role: "PhD, Summer 2026",
    details: "Jointly advised with Ming Yin",
    placement: "First job: Microsoft Research",
    image: "/group/hasan-amin-mehmood.jpeg",
    website: "https://shasanamin.github.io/",
  },
  {
    name: "Gregory Dexter",
    role: "PhD, May 2024",
    details: "Jointly advised with Petros Drineas",
    placement: "First job: Research Scientist at LinkedIn",
    image: "/group/gregory-dexter.png",
    website: "https://www.gregorydexter.com/",
  },
];

export default function GroupPage() {
  return (
    <>
      <SiteHeader current="group" />

      <main className="group section-block subpage-main">
        <div className="section-container group-inner">
          <p className="section-label">Group</p>
          <h1>Students and collaborators</h1>
          <div className="group-grid">
            {groupMembers.map((member, index) => (
              <article className="member-card" key={`${member.name}-${index}`}>
                <img
                  src={member.image}
                  alt={
                    member.image.includes("placeholder")
                      ? ""
                      : `Portrait of ${member.name}`
                  }
                  width="600"
                  height="600"
                />
                <div>
                  <h2>
                    {member.website ? (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {member.name}
                      </a>
                    ) : (
                      member.name
                    )}
                  </h2>
                  <p className="member-role">{member.role}</p>
                  {member.interests && <p>{member.interests}</p>}
                </div>
              </article>
            ))}
          </div>

          <section
            className="group-subsection"
            aria-labelledby="graduated-students"
          >
            <p className="section-label">Alumni</p>
            <h2 id="graduated-students">Graduated students</h2>
            <div className="group-grid alumni-grid">
              {graduatedStudents.map((student) => (
                <article className="member-card" key={student.name}>
                  <img
                    src={student.image}
                    alt={`Portrait of ${student.name}`}
                    width="800"
                    height="800"
                  />
                  <div>
                    <h3>
                      {student.website ? (
                        <a
                          href={student.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {student.name}
                        </a>
                      ) : (
                        student.name
                      )}
                    </h3>
                    <p className="member-role">{student.role}</p>
                    <p>{student.details}</p>
                    <p>{student.placement}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
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
