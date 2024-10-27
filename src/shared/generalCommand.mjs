import { Command } from '@sapphire/framework';

export class GeneralCommand extends Command {
    constructor(context, options) {
        super(context, options);
    }

    async sendInitialMessage() {
        throw new Error('Method "sendInitialMessage" must be implemented.');
    }

    getMessage() {
        throw new Error('Method "getMessage" must be implemented.');
    }

    async messageRun(message) {
        const initialMessageContent = await this.sendInitialMessage();
        if (!initialMessageContent) {
            throw new Error('Initial message content cannot be empty.');
        }
        const msg = await message.channel.send(initialMessageContent);

        const content = this.getMessage();
        if (!content) {
            throw new Error('Message content cannot be empty.');
        }
        await msg.edit(content);
    }
}
