'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';
import { JokeSchemaStricter, type JokeSchemaType } from '@/src/validations/jokeSchema';

export async function createJoke(data: JokeSchemaType) {
  const result = JokeSchemaStricter.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    console.log('SERVER ERROR: ' + errorMessages);
    return {
      error: errorMessages,
    };
  }

  await prisma.joke.create({
    data: result.data,
  });
  revalidatePath('/demo/forms');
}
