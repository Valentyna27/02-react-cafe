interface Votes {
  good: number;
  neutral: number;
  bad: number;
}

type VoteType = 'good' | 'neutral' | 'bad';

export type { Votes, VoteType };
