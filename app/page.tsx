import ProjectList from "@/components/ProjectList";

// TODO: replace with at least two projects you have actually built,
// each with an accurate description and a working GitHub/live-demo link.
const projects = [
  {
    title: "Project One",
    description: "Describe what you built and what it does.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-username/project1",
  },
  {
    title: "Project Two",
    description: "Describe what you built and what it does.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-username/project2",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
