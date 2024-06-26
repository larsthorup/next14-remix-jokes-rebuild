'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import Button from './Button';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end">
      <Button disabled={pending} type="submit">
        {pending ? 'Adding...' : 'Add'}
      </Button>
    </div>
  );
}
