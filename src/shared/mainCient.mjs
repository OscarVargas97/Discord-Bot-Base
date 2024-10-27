import '@sapphire/plugin-subcommands/register';
import '@sapphire/plugin-hmr/register';
import '@sapphire/plugin-i18next/register';
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';

export class MainClient extends SapphireClient {
    constructor(discordToken, nodeEnv) {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent],
            loadMessageCommandListeners: true,
            hmr: {
                enabled: nodeEnv === 'development'
            }
        });
        this.json_token = discordToken;
    }
    async start() {
        this.on('shardError', error => {
            console.error('A websocket connection encountered an error:', error);
        });
        process.on('unhandledRejection', error => {
            console.error('Unhandled promise rejection:', error);
        });
        try {
            await this.login(this.json_token);
            console.log('Logged in successfully!');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }
}