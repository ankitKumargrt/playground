"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TaskHeader } from "@/components/task-header";
import { AgentDisplay } from "@/components/tasker/agent-display";
import { TaskerRating } from "@/components/tasker/tasker-rating";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import type {
  Agent,
  TaskResponse,
  TaskerRatings,
  InitialData,
} from "@/types/tasker";

interface TaskerPageClientProps {
  initialData: InitialData;
}

export function TaskerPageClient({ initialData }: TaskerPageClientProps) {
  const router = useRouter();
  const [taskDescription, setTaskDescription] = useState("");
  const [taskExpectedOutput, setTaskExpectedOutput] = useState("");
  const [response, setResponse] = useState<TaskResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [agents] = useState<Agent[]>(initialData.agents);
  const [sessionId] = useState(initialData.session_id);
  const [mailId, setMailId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prompt] = useState(initialData.prompt);

  const handleTaskSubmit = async () => {
    if (!taskDescription.trim() || !taskExpectedOutput.trim()) {
      setError("Please enter both Task Description and Task Expected Output");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      // // Simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // const response = {
      //   id: "response-1",
      //   content: "Task processed successfully.",
      // };
      // setResponse(response);
      // setIsSubmitted(true);
      // toast.success("Response Generated");

      // Commented out live API call
      const payload = {
        task: {
          description: taskDescription,
          expected_output: taskExpectedOutput,
        },
        mailid: mailId,
      };
      const res = await fetch(`${process.env.API_BASE_URL}/${sessionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit task");
      const data = await res.json();
      setResponse(data.response);
      toast.success("Response Generated");
    } catch (error) {
      console.error("Error submitting task:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred while submitting the task";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRatingSubmit = async (ratings: TaskerRatings) => {
    try {
      // // Simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // console.log("Submitting ratings:", ratings);
      // toast.success("Task Submitted");

      // // Redirect to homepage
      // router.push("/");

      // Commented out live API call
      const res = await fetch(`${process.env.API_BASE_URL}/${sessionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ratings }),
      });
      if (!res.ok) throw new Error("Failed to submit ratings");
      const data = await res.json();
      toast.success("Task Submitted");
      router.push("/");
    } catch (error) {
      console.error("Error submitting ratings:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred while submitting ratings";
      toast.error(errorMessage);
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
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
              Tasker Page
            </h1>
            <p className="text-black dark:text-gray-400">
              Enter a task for the agents to complete and rate their performance
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              Prompt
            </h2>
            <div className="p-4 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]">
              <p>{prompt}</p>
            </div>
          </div>

          <div className="space-y-8">
            {agents.map((agent) => (
              <AgentDisplay key={agent.id} {...agent} />
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-black dark:text-gray-400 mb-2">
                Task Description:
              </label>
              <Textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="w-full bg-white text-black dark:bg-[#2D2D2D] dark:text-white border border-[#B799CC]"
                rows={4}
                required
                disabled={isSubmitted}
              />
            </div>
            <div>
              <label className="block text-black dark:text-gray-400 mb-2">
                Task Expected Output:
              </label>
              <Textarea
                value={taskExpectedOutput}
                onChange={(e) => setTaskExpectedOutput(e.target.value)}
                className="w-full bg-white text-black dark:bg-[#2D2D2D] dark:text-white border border-[#B799CC]"
                rows={4}
                required
                disabled={isSubmitted}
              />
            </div>
          </div>

          {!isSubmitted && (
            <Button
              onClick={handleTaskSubmit}
              disabled={
                isLoading ||
                !taskDescription.trim() ||
                !taskExpectedOutput.trim()
              }
              className="hover:bg-[#8C59A6]/90 text-white bg-[#8C59A6] dark:bg-[#442B55] dark:hover:bg-[#6938EF]/90"
            >
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Running...
                </>
              ) : (
                "Run"
              )}
            </Button>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          {response && (
            <TaskerRating
              response={response.content}
              onSubmit={handleRatingSubmit}
            />
          )}
        </div>
      </main>
    </div>
  );
}
