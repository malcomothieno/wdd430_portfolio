import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I am a web development student passionate about building efficient frontend user interfaces and robust backend APIs.
      </p>
      
      <SkillCard 
        category="Technical Proficiencies" 
        skills={['JavaScript (ES6+)', 'Node.js & Express', 'React & Next.js', 'PostgreSQL & MongoDB', 'Tailwind CSS']} 
      />
    </main>
  );
}