import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { ChatCompletionMessageParam } from 'openai/resources/index';

const useChatbotMutation = (onSuccess: (data: ChatCompletionMessageParam[]) => void) => {
  return useMutation<ChatCompletionMessageParam[], unknown, ChatCompletionMessageParam[]>({
    mutationFn: async (messages) => {
      const res = await axios.post('/api/chatbot', {
        messages,
      });
      return res.data.messages;
    },
    onSuccess,
  });
};

export default useChatbotMutation;
