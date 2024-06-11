import React from 'react';
import { getJokes } from '@/lib/services/getJokes';
import Link from './Link';

export default async function JokesList() {
  const jokes = await getJokes();

  return (
    <ul>
      {jokes
        .sort((a, b) => {
          return b.createdAt.getTime() - a.createdAt.getTime();
        })
        .map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={id}>{name}</Link>
            </li>
          );
        })}
    </ul>
  );
}
