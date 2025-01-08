"use client";

import { useState } from "react";
import { TaskHeader } from "../task-header";
import { AgentForm } from "./agent-form";
import { TaskRating } from "./task-rating";
import toast from "react-hot-toast";
import type {
  AgentDetails,
  TaskResponse,
  TaskRatings,
  InitialData,
  response,
} from "@/types/agent";
import { useRouter } from "next/navigation";

interface AgentPageClientProps {
  initialData: InitialData;
}

export function AgentPageClient({ initialData }: AgentPageClientProps) {
  const [response, setResponse] = useState<response | null>(null);
  const [sessionId, setSessionId] = useState(initialData.sessionId);
  const [mailId, setMailId] = useState("");
  const router = useRouter();
  const handleAgentSubmit = async (details: AgentDetails) => {
    try {
      // // Simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // const response: TaskResponse = {
      //   id: "dummy-response-1",
      //   content:
      //     "Artificial Intelligence (AI) is like teaching computers to think and learn like humans. It's creating smart machines that can solve problems, recognize patterns, and make decisions on their own.",
      // };
      // setResponse(response);

      // Commented out live API call
      const payload = {
        Agent: details,
        mailid: mailId,
      };
      //`${process.env.API_BASE_URL}/agent_page`
      const res = await fetch(`https://9d1e-2401-4900-1c23-7602-795c-aad5-9ba6-a8a5.ngrok-free.app/playground/${sessionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit agent details");
      const data = await res.json();
      const { response } = data;
      setResponse(response);
    } catch (error) {
      console.error("Error submitting agent details:", error);
      throw error;
    }
  };

  const handleRatingSubmit = async (ratings: TaskRatings) => {
    try {
      // // Simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // console.log("Submitting ratings:", ratings);

      // Commented out live API call

      const res = await fetch(`${process.env.API_BASE_URL}/${sessionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...ratings }),
      });
      if (!res.ok) throw new Error("Failed to submit ratings");
      toast.success("Task Submitted");
      router.push("/");

      console.log("Rating submission response:");
    } catch (error) {
      toast.error("Failed to submit task");
      console.error("Error submitting ratings:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TaskHeader
        sessionId={sessionId}
        mailId={mailId}
        onMailIdChange={setMailId}
      />
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <AgentForm
          predefinedTask={initialData.predefinedTask}
          predefinedPrompt={initialData.predefinedPrompt}
          onSubmit={handleAgentSubmit}
        />
        {response && (
          <TaskRating response={response} onSubmit={handleRatingSubmit} />
        )}
      </main>
    </div>
  );
}