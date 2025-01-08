export interface AgentDetails {
  role: string;
  goal: string;
  backstory: string;
}
export type response = string;

export interface TaskResponse {
  id: string;
  content: string;
}

export interface TaskRatings {
  instructionFollowing: number;
  contentCompleteness: number;
  domainRelevance: number;
  toolCallingAbility: number;
  quantitativeAccuracy: number;
  dataBreachSecurity: number;
  justification: string;
}

export interface InitialData {
  sessionId: string;
  predefinedTask: {
    taskDescription: string;
    taskExpectedOutput: string;
  };
  predefinedPrompt: string;
}
