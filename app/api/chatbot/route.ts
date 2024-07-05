import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import OpenAI from 'openai';
import type {
  ChatCompletionMessageParam,
  ChatCompletionSystemMessageParam,
} from 'openai/resources/index.mjs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getFirstMessage = async (
  supabase: ReturnType<typeof createClient>
): Promise<ChatCompletionSystemMessageParam> => {
  const { data: postMetadataList } = await supabase
    .from('Post')
    .select('id, title, category, tags');

  return {
    role: 'system',
    content: `너는 개발 전문 챗봇이야. 해당 글을 요약해서 답변해줘야 해. 
    [요약 해야 하는 글]
    ${JSON.stringify(postMetadataList ?? [])}`,
  };
};

const getBlogContent = async (id: string, supabase: ReturnType<typeof createClient>) => {
  const { data } = await supabase.from('Post').select('*').eq('id', id);

  if (!data) return {};
  return data[0];
};

export async function POST(request: NextRequest) {
  const { messages } = (await request.json()) as {
    messages: ChatCompletionMessageParam[];
  };

  const supabase = await createClient(cookies());

  if (messages.length === 1) {
    messages.unshift(await getFirstMessage(supabase));
  }

  while (messages.at(-1)?.role !== 'assistant') {
    const response = await openai.chat.completions.create({
      messages,
      model: 'gpt-4-1106-preview',
      function_call: 'auto',
      functions: [
        {
          name: 'retrieve',
          parameters: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: '가져올 블로그 글의 id',
              },
            },
          },
          description: '특정 id를 가진 블로그 글의 전체 내용을 가져옵니다.',
        },
      ],
    });

    const responseMessage = response.choices[0].message;

    if (responseMessage.function_call) {
      const { id } = JSON.parse(responseMessage.function_call.arguments);

      const functionResult = await getBlogContent(id, supabase);

      messages.push({
        role: 'function',
        content: JSON.stringify(functionResult),
        name: responseMessage.function_call.name,
      });
    } else {
      messages.push(responseMessage);
    }
  }

  return Response.json({ messages });
}
