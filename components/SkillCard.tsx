interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <article className="p-4 rounded border border-gray-300 bg-white shadow-sm">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
