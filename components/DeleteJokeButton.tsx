'use client';

import React, { useTransition } from 'react';
import Button from '@/components/Button';
import { deleteJoke } from '@/lib/actions/deleteJoke';
import { useNavigate } from './ClientRouter';

export default function DeleteJokeButton({ jokeid }: { jokeid: string }) {
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  return (
    <Button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteJoke(jokeid);
          navigate('all');
        });
      }}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </Button>
  );
}
