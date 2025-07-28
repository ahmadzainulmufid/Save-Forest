import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [
      { role: "user", parts: [{ text: "Hello" }] },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  const stream1 = await chat.sendMessageStream({
    message:
      "Saya ingin tahu berapa banyak **kebakaran hutan** di Indonesia saat ini.",
  });
  for await (const chunk of stream1) {
    console.log(chunk.text);
  }

  const stream2 = await chat.sendMessageStream({
    message:
      "Berapa luas lahan yang sudah terbakar akibat kebakaran hutan di Indonesia hingga Mei 2025?",
  });
  for await (const chunk of stream2) {
    console.log(chunk.text);
  }
}

await main();
