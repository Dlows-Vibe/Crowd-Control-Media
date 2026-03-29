
import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (brandName: string, industry: string, goals: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Act as the Lead AI Strategist for "Crowd Control Marketing". 
  Develop a high-impact, disruptive marketing strategy for:
  Brand: ${brandName}
  Industry: ${industry}
  Key Objectives: ${goals}
  
  Explain how "Crowd Control" (mass-scale AI-driven attention management) will dominate this market.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: {
              type: Type.STRING,
              description: "A visionary strategic overview."
            },
            steps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "4 critical tactical phases."
            },
            projectedImpact: {
              type: Type.STRING,
              description: "Growth projection (e.g., '340% increase in LTV')."
            }
          },
          required: ["overview", "steps", "projectedImpact"]
        }
      }
    });

    if (!response.text) throw new Error("Null response from AI");
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Strategy Generation Failed:", error);
    throw error;
  }
};
