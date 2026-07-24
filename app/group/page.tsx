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
    name: "Student Name",
    role: "PhD Student",
    interests: "Machine learning theory · Optimization",
    image: "/group/student-placeholder-1.svg",
  },
  {
    name: "Student Name",
    role: "PhD Student",
    interests: "Data-efficient learning · Human-AI systems",
    image: "/group/student-placeholder-2.svg",
  },
];

const graduatedStudents = [
  {
    name: "Hasan Amin Mehmood",
    role: "PhD, Summer 2025",
    details: "Jointly advised with Ming Yin",
    placement: "First job: Microsoft Research",
    image: "/group/hasan-amin-mehmood.jpeg",
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
                  alt=""
                  width="600"
                  height="600"
                />
                <div>
                  <h2>{member.name}</h2>
                  <p className="member-role">{member.role}</p>
                  <p>{member.interests}</p>
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
                    <h3>{student.name}</h3>
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
