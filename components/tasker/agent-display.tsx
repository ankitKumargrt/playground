interface AgentDisplayProps {
  id: number;
  role: string;
  goal: string;
  backstory: string;
}

export function AgentDisplay({ id, role, goal, backstory }: AgentDisplayProps) {
  return (
    <div className="space-y-4">
      <div className="inline-block px-4 py-2 bg-[#8C59A6] dark:bg-[#442B55] text-white rounded-lg">
        <h3 className="font-medium">Agent {id}</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-gray-600 dark:text-gray-400">
            Agent Role :
          </label>
          <div className="p-3 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]">
            <p>{role}</p>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-gray-600 dark:text-gray-400">
            Agent Goal :
          </label>
          <div className="p-3 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]">
            <p>{goal}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-gray-600 dark:text-gray-400">
          Agent Backstory :
        </label>
        <div className="p-3 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]">
          <p>{backstory}</p>
        </div>
      </div>
    </div>
  );
}
