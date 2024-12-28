import { Card } from '../ui/Card';

interface SkillCardProps {
  name: string;
  proficiency: number;
  description?: string;
  icon?: string;
}

export function SkillCard({ name, proficiency, description, icon }: SkillCardProps) {
  return (
    <Card
      title={name}
      icon={icon && <img src={icon} alt={name} className="w-8 h-8" />}
      action={
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {proficiency}/10
        </span>
      }
    >
      {description && <p className="mb-4">{description}</p>}
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div 
          className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${proficiency * 10}%` }}
        />
      </div>
    </Card>
  );
}