import { config } from 'dotenv'
config()
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

const content = 'Hello.';

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].message.content);
}

main()
