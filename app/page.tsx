import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "MealPrep Companion",
    description:
      "A responsive frontend web application that helps users search for recipes by ingredient, plan weekly meals, and generate dynamic shopping lists.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript (ES Modules)",
      "Local Storage",
      "TheMealDB API",
      "Advice Slip API",
    ],
    link: "https://github.com/malcomothieno/wdd330-FINAL-PROJECT",
  },
  {
    title: "CSE Motors",
    description:
      "A full-stack dealership web application featuring dynamic inventory listings, classification views, customer reviews, and user authentication.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    link: "https://github.com/malcomothieno/cse340",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m Othieno Malcom, a full-stack developer learning Next.js and
          React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
