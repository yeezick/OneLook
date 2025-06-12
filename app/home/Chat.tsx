import LlmConnector, { OpenaiProvider } from '@rcb-plugins/llm-connector';
import React from 'react';
import ChatBot from 'react-chatbotify';
const Chat = () => {
    let apiKey = "";
    const plugins = [LlmConnector()];

    const flow = {
		start: {
			message: "Hello! This is assistant! Please ask question about your meeting.",
			path: "openai"
		},
		openai: {
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connector/blob/main/docs/providers/OpenAI.md
				provider: new OpenaiProvider({
					mode: 'direct',
					model: 'gpt-4.1-nano',
					responseFormat: 'stream',
					apiKey: apiKey,
				}),
				outputType: 'character',
			},
		},
	};
    return (
        <div>
            <ChatBot plugins={plugins} flow={flow}/>
        </div>
    );
};
export default Chat