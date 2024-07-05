import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    const messages = requestData.messages as ChatCompletionMessageParam[];

    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: '너는 개발 전문 챗봇이야.',
        },
        ...messages,
      ],
      model: 'gpt-3.5-turbo-0125',
    });

    messages.push(response.choices[0].message);

    return NextResponse.json({ messages });
  } catch (error) {
    return new NextResponse('An error occurred while processing your request.', { status: 500 });
  }
}
