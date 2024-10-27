import { GeneralCommand } from './generalCommand.mjs';

export function createCommand({ name, aliases, description, initialMessageContent, messageContent }) {
    return class extends GeneralCommand {
        constructor(context) {
            super(context, { name, aliases, description });
            this.initialMessageContent = initialMessageContent;
            this.messageContent = messageContent;
        }

        async sendInitialMessage() {
            const content = this.initialMessageContent;
            if (!content) {
                throw new Error('initialMessageContent cannot be empty.');
            }
            return content;
        }

        getMessage() {
            const content = this.messageContent;
            if (!content) {
                throw new Error('messageContent cannot be empty.');
            }
            return content;
        }
    };
}
