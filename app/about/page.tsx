import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        I&apos;m Othieno Malcom, a web developer in training. Through my
        coursework I&apos;ve built a responsive frontend app that works with
        public APIs and a full-stack dealership site backed by a PostgreSQL
        database.
      </p>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m now learning Next.js, React, TypeScript, and Tailwind CSS to
        build faster, more maintainable web applications.
      </p>
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-bold mb-4">
          Technical Skills
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <SkillCard
            title="Front-End"
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
            ]}
          />
          <SkillCard
            title="Back-End & Tools"
            skills={[
              "Node.js",
              "Express",
              "EJS",
              "PostgreSQL",
              "TypeScript",
              "Git & GitHub",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
