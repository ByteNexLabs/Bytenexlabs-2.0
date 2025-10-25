
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateGreeting = async (): Promise<string> => {
  try {
    const prompt = `Generate a short, punchy, and futuristic welcome message for a visitor to the website of a cutting-edge software and AI lab named 'ByteNex Labs'. The tone should be inspiring and innovative. Maximum 15 words.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to communicate with Gemini API");
  }
};
