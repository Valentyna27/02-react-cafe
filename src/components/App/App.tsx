import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import { useState, useEffect} from 'react';
import type { Votes, VoteType } from '../../types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>(() => {
    const savedVotes = window.localStorage.getItem('saved-votes');

    return savedVotes
      ? JSON.parse(savedVotes)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (vote: VoteType) => {
    setVotes(previousVotes => ({
      ...previousVotes,
      [vote]: previousVotes[vote] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const canReset = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {totalVotes > 0 ? (
        <VoteStats votes={votes} total={totalVotes} positive={positiveRate} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
