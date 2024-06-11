'use server';

import { prisma } from '@/db';

export async function createJoke(data: FormData) {
  const name = data.get('name');
  const content = data.get('content');

  const joke = await prisma.joke.create({
    data: {
      content: content as string,
      name: name as string,
    },
  });
  return joke;
}
