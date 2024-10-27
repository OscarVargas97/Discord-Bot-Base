import { MainClient } from './shared/mainCient.mjs';
import { config } from './config.mjs';

const client = new MainClient(
    config.env.DISCORD_TOKEN,
    config.env.NODE_ENV
);

client.start();