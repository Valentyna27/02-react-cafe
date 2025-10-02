import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  total: number;
  positive: number;
}

export default function VoteStats({ votes, total, positive }: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: {votes.good} <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: {votes.neutral} <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: {votes.bad} <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: {total} <strong>{total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: {positive}% <strong>{positive}%</strong>
      </p>
    </div>
  );
}
