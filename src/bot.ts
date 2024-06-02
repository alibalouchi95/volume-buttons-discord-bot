import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent // Enable the Message Content Intent
  ]
});

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().startsWith('!ask')) {
    const responses = ['Yes', 'No'];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    message.channel.send(randomResponse);
  }
});

client.login(DISCORD_TOKEN);
