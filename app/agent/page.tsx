import { AgentPageClient } from "@/components/agent/agent-page-client";
import type { InitialData } from "@/types/agent";
import { number, string } from "zod";

// Dummy function to simulate fetching initial data
// async function getInitialData(): Promise<InitialData> {
//   // Simulating an API call
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return {
//     sessionId: "session-" + Math.random().toString(36).substr(2, 9),
//     predefinedTask: {
//       taskDescription: "Explain the concept of artificial intelligence in simple terms.",
//     taskExpectedOutput: "Explain the concept of artificial intelligence in simple terms."
//     },
//     predefinedPrompt: "Explain the concept of artificial intelligence in simple terms.",
//   };
// }

// Commented out live API endpoint
async function getInitialData(): Promise<InitialData> {
  const response = await fetch(`https://playground.greenridertech.co.in/agent_page`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch initial data");
  const data = await response.json();
  console.log(data)
  const { session_id, task, prompt } = data;
  const { description, expected_output } = task;
  return {
    sessionId: session_id,
    predefinedTask: {
      taskDescription: description,
      taskExpectedOutput: expected_output,
    },
    predefinedPrompt: prompt,
  };
}

export default async function AgentPage() {
  const initialData = await getInitialData();
  return <AgentPageClient initialData={initialData} />;
}
