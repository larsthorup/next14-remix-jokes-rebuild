import React from 'react';
import type { Metadata } from 'next';
import CreateJokeForm from '@/components/CreateJokeForm';

export const metadata: Metadata = {
  title: 'New joke',
};

export default function NewJokePage() {
  return (
    <div className="flex flex-col gap-5">
      <p>Add your own hilarious joke</p>
      <CreateJokeForm />
    </div>
  );
}
