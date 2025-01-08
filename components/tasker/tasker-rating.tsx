'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import type { TaskerRatings } from '../../types/tasker'

interface TaskerRatingProps {
  response: string;
  onSubmit: (ratings: TaskerRatings) => void;
}

export function TaskerRating({ response, onSubmit }: TaskerRatingProps) {
  const [ratings, setRatings] = useState<TaskerRatings>({
    coordination: 0,
    agenticDelegation: 0,
    goalAlignment: 0,
    verbosity: 0,
    toolCallingAbility: 0,
    instructionFollowing: 0,
    contentCompleteness: 0,
    domainRelevance: 0,
    quantitativeAccuracy: 0,
    dataBreachSecurity: 0,
    justification: ''
  })

  const [justificationLength, setJustificationLength] = useState(0)
  const [error, setError] = useState<string | null>(null);

  const ratingParameters = [
    { key: 'coordination', label: 'Coordination' },
    { key: 'agenticDelegation', label: 'Agentic Delegation' },
    { key: 'goalAlignment', label: 'Goal Alignment' },
    { key: 'verbosity', label: 'Verbosity(Excess Communication)' },
    { key: 'toolCallingAbility', label: 'Tool Calling Ability' },
    { key: 'instructionFollowing', label: 'Instruction Following' },
    { key: 'contentCompleteness', label: 'Content Completeness' },
    { key: 'domainRelevance', label: 'Domain Relevance' },
    { key: 'quantitativeAccuracy', label: 'Quantitative Accuracy' },
    { key: 'dataBreachSecurity', label: 'Data Breach Security' }
  ] as const

  const handleRatingChange = (parameter: keyof Omit<TaskerRatings, 'justification'>, value: number) => {
    setRatings(prev => ({ ...prev, [parameter]: value }));
    setError(null);
  }

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
    <div className='mt-8 space-y-6'>
      <div className='p-4 bg-white dark:bg-[#2D2D2D] text-black dark:text-gray-300 rounded-lg border border-[#B799CC]'>
        <p>{response}</p>
        <div className='text-right text-sm text-gray-600 dark:text-gray-400'>
          Response Generated
        </div>
      </div>

      <div>
        <h3 className='text-lg font-medium text-black dark:text-white mb-4'>
          Rate the above response from the below parameters.
        </h3>

        <div className='space-y-6'>
          {ratingParameters.map(({ key, label }) => (
            <div key={key} className='space-y-2'>
              <label className='text-gray-600 dark:text-gray-400'>
                {label}
              </label>
              <div className='grid grid-cols-7 gap-2'>
                {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                  <button
                    key={value}
                    type='button'
                    onClick={() => handleRatingChange(key, value)}
                    className={`p-4 rounded ${
                      ratings[key] === value
                        ? "bg-[#8C59A6] dark:bg-[#442B55] text-white"
                        : "bg-white dark:bg-[#2D2D2D] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#3D3D3D]"
                    } border border-[#B799CC]`}>
                    {value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-6 space-y-2'>
          <label className='text-gray-600 dark:text-gray-400'>
            Enter Justification with respect to the response generated
          </label>
          <Textarea
            value={ratings.justification}
            onChange={(e) => {
              const newValue = e.target.value;
              setRatings((prev) => ({ ...prev, justification: newValue }));
              setJustificationLength(newValue.length);
            }}
            className='bg-white text-black dark:bg-[#2D2D2D] dark:text-white border border-[#B799CC]'
            rows={6}
          />
          <div className='mt-2 text-sm'>
            {justificationLength < 250 ? (
              <span className='text-red-500'>
                Justification must be at least 250 characters. Current:{" "}
                {justificationLength}
              </span>
            ) : (
              <span className='text-green-500'>
                Character count: {justificationLength}
              </span>
            )}
          </div>
        </div>

        {error && <p className='text-destructive mt-4'>{error}</p>}

        <Button
          onClick={handleSubmit}
          className='mt-6  hover:bg-[#8C59A6]/90 text-white bg-[#8C59A6] dark:bg-[#442B55] dark:hover:bg-[#6938EF]/90'>
          Submit
        </Button>
      </div>
    </div>
  );
}

