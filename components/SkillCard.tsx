interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white my-4">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{category}</h3>
      <ul className="list-disc list-inside text-gray-700">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}