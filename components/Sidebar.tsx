import React from 'react';
import JokesList from './JokesList';
import RandomJokeButton from './RandomJokeButton';
import Outline from './Outline';
import Link from './Link';

export default function Sidebar() {
  return (
    <div className="flex min-w-max flex-col gap-y-5">
      <RandomJokeButton />
      <Outline text="Here are a few more jokes to check out:">
        <JokesList />
      </Outline>
      <Link href="new">Add your own</Link>
    </div>
  );
}
