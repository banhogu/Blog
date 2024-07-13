import { cotMessage, fewShotMessage, framingMessage } from '@/constants/promptMessage';
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
          content: `
          ${framingMessage}

          ${cotMessage}
          여기 몇 가지 예시가 있어:
          
          ${fewShotMessage}
          이제 이 과정을 참고하여 주어진 글을 요약해줘.

          요약 중에 참고할만한 내용이 있다면 해당 링크[https://www.banghojin.site]를 참고해서 뒤에 구체적인 경로를 포함해서 제공해줘.
          
        `,
        },
        ...messages,
      ],
      model: 'gpt-3.5-turbo-1106',
    });

    messages.push(response.choices[0].message);

    return NextResponse.json({ messages });
  } catch (error) {
    return new NextResponse('An error occurred while processing your request.', { status: 500 });
  }
}
