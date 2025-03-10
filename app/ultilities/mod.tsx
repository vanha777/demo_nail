import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { LLMChain } from "langchain/chains";

export default async function processCommand(transcript: string): Promise<string> {
    console.log("processing command");
    if (!transcript.trim()) return "";

    try {
        // Initialize OpenAI model through LangChain
        const model = new ChatOpenAI({
            temperature: 0,
            modelName: 'gpt-4', // Use 'gpt-4' or 'gpt-3.5-turbo' if 'gpt-4o-mini' is not a valid model name
            openAIApiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        });

        // Create a prompt template with a placeholder for the transcript
        const promptTemplate = new PromptTemplate({
            template: `You are an expert social media marketing consultant. 
            When providing advice, format your response for a chat interface with clear line breaks, bullet points, and emphasis where needed.
            
            Input: {text}
            
            Example output:
            **Here are some suggestions:**
            - 🟢 *Automate repetitive tasks to save time.*
            - 📈 *Use AI for data-driven decision-making.*
            - 💡 *Improve customer engagement through personalized interactions.*

            Provide your response in a similar format.`,
            inputVariables: ["text"],
        });

        // Create a chain with the model and prompt template
        const chain = new LLMChain({
            llm: model,
            prompt: promptTemplate,
        });

        // Execute the chain with the transcript as input
        const response = await chain.call({
            text: transcript,
        });

        console.log("response", response);

        // Return the response text directly (no need for JSON parsing if response is a plain string)
        return response.text ?? "";
    } catch (error) {
        console.error('Error processing command:', error);
        return "";
    } finally {
        console.log("command processed");
    }
}
