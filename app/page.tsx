import ProjectList from '../components/ProjectList';

const projects = [
  {
    title: 'MealPrep Companion',
    description: 'A responsive frontend web app that helps users search for recipes by ingredient, plan weekly meals, and generate dynamic shopping lists.',
    technologies: ['JavaScript', 'HTML/CSS', 'TheMealDB API', 'Local Storage'],
    link: 'https://github.com/malcomothieno/MealPrep-Companion'
  },
  {
    title: 'CSE Motors',
    description: 'A full-stack dealership web application featuring dynamic inventory listings, classification views, customer reviews, and user authentication.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'Tailwind CSS'],
    link: 'https://github.com/malcomothieno/cse340-motors'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Welcome! I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}