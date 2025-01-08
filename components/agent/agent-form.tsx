"use client";

import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import type { AgentDetails } from "@/types/agent";

interface AgentFormProps {
  predefinedTask: {
    taskDescription: string;
    taskExpectedOutput: string;
  };
  predefinedPrompt: string;
  onSubmit: (details: AgentDetails) => Promise<void>;
}

export function AgentForm({
  predefinedTask,
  predefinedPrompt,
  onSubmit,
}: AgentFormProps) {
  const [details, setDetails] = useState<AgentDetails>({
    role: "",
    goal: "",
    backstory: "",
  });

  const agentSchema = z.object({
    role: z.string().min(1, "Role is required"),
    goal: z.string().min(1, "Goal is required"),
    backstory: z.string().min(1, "Backstory is required"),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitted) {
      setError("You can run only once");
      return;
    }

    const result = agentSchema.safeParse(details);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await onSubmit(details);
      setIsSubmitted(true);
      toast.success("Response Generated");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Response generation failed";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Agent Page</h1>
        <p className="text-muted-foreground">
          In this page the task is predefined and your role is to define the
          agent and then rate the task
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Prompt:</h2>
        <div className="p-4 bg-card rounded-lg border border-[#B799CC] dark:border-[#B799CC]">
          <p className="text-card-foreground">{predefinedPrompt}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Task Description:
        </h2>
        <div className="p-4 bg-card rounded-lg border border-[#B799CC] dark:border-[#B799CC]">
          <p className="text-card-foreground">
            {predefinedTask.taskDescription}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Task Expected Output::
        </h2>
        <div className="p-4 bg-card rounded-lg border border-[#B799CC] dark:border-[#B799CC]">
          <p className="text-card-foreground">
            {predefinedTask.taskExpectedOutput}
          </p>
        </div>
      </div>
      {/* 
      <div className='space-y-4'>
        <div className='p-4 bg-card rounded-lg border border-[#B799CC] dark:border-[#B799CC]'>
          <h2 className='text-l font-semibold text-foreground'>
            Task Description:
          </h2>
          <p className='text-card-foreground'>
            {predefinedTask.taskDescription}
          </p>
          <h2 className='text-l font-semibold text-foreground'>
            Task Expected Output:
          </h2>
          <p className='text-card-foreground'>
            {predefinedTask.taskExpectedOutput}
          </p>
        </div>
      </div> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Define Agent Details:
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-muted-foreground">
                Define Agent Role :
              </label>
              <Textarea
                value={details.role}
                onChange={(e) =>
                  setDetails((prev) => ({ ...prev, role: e.target.value }))
                }
                placeholder="Enter Agent Role here"
                className="bg-white text-black dark:bg-secondary dark:text-foreground border-[#B799CC] dark:border-[#B799CC]"
                disabled={isSubmitted}
              />
            </div>
            <div className="space-y-2">
              <label className="text-muted-foreground">
                Define Agent Goal :
              </label>
              <Textarea
                value={details.goal}
                onChange={(e) =>
                  setDetails((prev) => ({ ...prev, goal: e.target.value }))
                }
                placeholder="Enter Agent Goal here"
                className="bg-white text-black dark:bg-secondary dark:text-foreground border-[#B799CC] dark:border-[#B799CC]"
                disabled={isSubmitted}
              />
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <label className="text-muted-foreground">
              Define Agent Backstory :
            </label>
            <Textarea
              value={details.backstory}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, backstory: e.target.value }))
              }
              placeholder="Enter Agent Backstory here"
              className="bg-white text-black dark:bg-secondary dark:text-foreground border-[#B799CC] dark:border-[#B799CC]"
              disabled={isSubmitted}
            />
          </div>
        </div>
        {!isSubmitted && (
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-[#8C59A6] hover:bg-[#8C59A6]/90 text-white dark:bg-[#442B55] dark:hover:bg-accent/90 dark:text-accent-foreground dark:border dark:border-[#B799CC]"
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
        {error && <p className="text-destructive mt-2">{error}</p>}
      </form>
    </div>
  );
}
