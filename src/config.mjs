process.loadEnvFile();

export const config = {
    env: {
        DISCORD_TOKEN: process.env.DISCORD_TOKEN || '',
        NODE_ENV: process.env.NODE_ENV || ''
    }
};