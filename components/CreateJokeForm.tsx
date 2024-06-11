'use client';
import SubmitButton from '@/components/SubmitButton';
import { createJoke } from '@/lib/actions/createJoke';
import { useNavigate } from './ClientRouter';

export default function CreateJokeForm() {
  const navigate = useNavigate();
  async function submit(formData: FormData) {
    const joke = await createJoke(formData);
    navigate(joke.id)
  }
  return (
    <form autoComplete="off" action={submit}>
      <label>
        Name:
        <input name="name" type="text" required minLength={2} />
      </label>
      <label>
        Content:
        <textarea name="content" required minLength={5} />
      </label>
      <SubmitButton />
    </form>
  );

}