'use client';

import React from 'react';
import { useNavigate } from './ClientRouter';

export default function RandomJokeButton() {
  const navigate = useNavigate();
  function onClick() {
    navigate('all');
  }

  return (
    <button className="padding-0 text-left text-yellow hover:underline" onClick={onClick}>
      Get random joke
    </button>
  );
}
