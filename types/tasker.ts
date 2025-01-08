export interface Agent {
  id: number;
  role: string;
  goal: string;
  backstory: string;
}
export interface InitialData {
  session_id: string;
  prompt: string;
  agents: Agent[];
}
export interface TaskerRatings {
  coordination: number;
  agenticDelegation: number;
  goalAlignment: number;
  verbosity: number;
  toolCallingAbility: number;
  instructionFollowing: number;
  contentCompleteness: number;
  domainRelevance: number;
  quantitativeAccuracy: number;
  dataBreachSecurity: number;
  justification: string;
}

export interface TaskResponse {
  id: string;
  content: string;
}
