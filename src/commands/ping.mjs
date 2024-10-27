import { createCommand } from '../shared/builderCommand.mjs';
import { PingService } from './../app/ping/services.mjs';

export const GenerateCommand = createCommand({
    name: 'ping',
    aliases: ['pong'],
    description: 'Muestra la latencia del bot.',
    initialMessageContent: 'Calculando latencia...',
    messageContent: PingService.ping()
});