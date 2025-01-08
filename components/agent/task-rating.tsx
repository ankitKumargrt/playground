"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { TaskRatings } from "@/types/agent";

interface RatingProps {
  response: string;
  onSubmit: (ratings: TaskRatings) => void;
}

export function TaskRating({ response, onSubmit }: RatingProps) {
  const [ratings, setRatings] = useState<TaskRatings>({
    instructionFollowing: 0,
    contentCompleteness: 0,
    domainRelevance: 0,
    toolCallingAbility: 0,
    quantitativeAccuracy: 0,
    dataBreachSecurity: 0,
    justification: "",
  });

  const [justificationLength, setJustificationLength] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const ratingParameters = [
    { key: "instructionFollowing", label: "Instruction Following" },
    { key: "contentCompleteness", label: "Content Completeness" },
    { key: "domainRelevance", label: "Domain Relevance" },
    { key: "toolCallingAbility", label: "Tool Calling Ability" },
    { key: "quantitativeAccuracy", label: "Quantitative Accuracy" },
    { key: "dataBreachSecurity", label: "Data Breach Security" },
  ] as const;

  const handleRatingChange = (
    parameter: keyof Omit<TaskRatings, "justification">,
    value: number
  ) => {
    setRatings((prev) => ({ ...prev, [parameter]: value }));
    setError(null); // Clear error when a rating is updated
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allRatingsFilled = ratingParameters.every(
      ({ key }) => ratings[key] !== 0
    );
    if (!allRatingsFilled) {
      setError("Please provide a rating for all parameters.");
      return;
    }
    if (justificationLength < 250) {
      setError("Justification must be at least 250 characters.");
      return;
    }
    setError(null);
    onSubmit(ratings);
  };

  return (
    <div className="mt-8 space-y-6">
      <div className="p-4 bg-card rounded-lg border border-[#B799CC] dark:border-[#B799CC]">
        <p className="text-card-foreground">{response}</p>
        <div className="text-right text-sm text-muted-foreground">
          Response Generated
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Rate the above response from the below parameters.
        </h3>

        <div className="space-y-6">
          {ratingParameters.map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <label className="text-muted-foreground">{label}</label>
              <div className="grid grid-cols-7 gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleRatingChange(key, value)}
                    className={`p-4 rounded border ${
                      ratings[key] === value
                        ? "bg-[#8C59A6] text-white dark:bg-[#442B55] dark:text-accent-foreground border-[#8C59A6] dark:border-[#B799CC]"
                        : "bg-white text-black dark:bg-secondary dark:text-secondary-foreground border-[#B799CC] dark:border-[#B799CC] hover:bg-gray-50 dark:hover:bg-secondary/80"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <label className="text-muted-foreground">
            Enter Justification with respect to the response generated
          </label>
          <Textarea
            value={ratings.justification}
            onChange={(e) => {
              const newValue = e.target.value;
              setRatings((prev) => ({ ...prev, justification: newValue }));
              setJustificationLength(newValue.length);
              setError(null); // Clear error when justification is updated
            }}
            className="bg-white text-black dark:bg-secondary dark:text-foreground border-[#B799CC] dark:border-[#B799CC]"
            rows={6}
          />
          <div className="mt-2 text-sm">
            {justificationLength < 250 ? (
              <span className="text-destructive">
                Justification must be at least 250 characters. Current:{" "}
                {justificationLength}
              </span>
            ) : (
              <span className="text-green-500">
                Character count: {justificationLength}
              </span>
            )}
          </div>
        </div>

        {error && <p className="text-destructive mt-4">{error}</p>}

        <Button
          onClick={handleSubmit}
          className="mt-6 bg-[#8C59A6] hover:bg-accent/90 text-white dark:bg-[#442B55] dark:border dark:border-[#B799CC]"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
