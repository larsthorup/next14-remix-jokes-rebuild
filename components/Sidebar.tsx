import React from 'react';
import JokesList from './JokesList';
import NavButton from './NavButton';
import RandomJokeButton from './RandomJokeButton';
import Outline from './Outline';

export default function Sidebar() {
  return (
    <div className="flex min-w-max flex-col gap-y-5">
      <RandomJokeButton />
      <Outline text="Here are a few more jokes to check out:">
        <JokesList />
      </Outline>
      <NavButton href="/jokes/new">Add your own</NavButton>
    </div>
  );
}
