import { createOpenAI } from '@ai-sdk/openai';
import { streamText, generateText } from 'ai';
import type { RequestHandler } from './$types';

import { env } from '$env/dynamic/private';

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const POST = (async ({ request }) => {
  const { messages } = await request.json();
  
  console.log(messages)
  const result = streamText({
    model: openai('gpt-3.5-turbo', {}),
    messages,
    // onStepFinish: console.log,
    system:  "AI do paulinho",
    // onFinish: console.log,
  });

  return result.toDataStreamResponse();
  // return result
}) satisfies RequestHandler;