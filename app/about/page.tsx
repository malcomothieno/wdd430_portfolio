import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work.
      </p>
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-2xl font-bold mb-4">
          Technical Skills
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <SkillCard
            title="Front-End"
            skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
          />
          <SkillCard
            title="Back-End & Tools"
            skills={["Next.js", "TypeScript", "Node.js", "Git", "GitHub"]}
          />
        </div>
      </section>
    </main>
  );
}
