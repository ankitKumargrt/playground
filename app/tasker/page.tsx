import { TaskerPageClient } from "@/components/tasker/tasker-page-client";
import type { Agent, InitialData } from "@/types/tasker";

// Dummy function to simulate fetching agent data
async function getAgentData(): Promise<InitialData> {
  // Simulating an API call
  const response = await fetch(`${process.env.API_BASE_URL}/task_page`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch agent data");
  return response.json();
}

// Commented out live API endpoint
// async function getAgentData() {
//   const response = await fetch('https://api.example.com/agent-data', { cache: 'no-store' });
//   if (!response.ok) throw new Error('Failed to fetch agent data');
//   return response.json();
// }

export default async function TaskerPage() {
  const agentData = await getAgentData();
  return <TaskerPageClient initialData={agentData} />;
}
