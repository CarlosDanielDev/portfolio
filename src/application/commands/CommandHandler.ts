import type { Command } from '@domain/value-objects/Command';

interface CommandHandler {
  canHandle(command: Command): boolean;
  handle(command: Command): string | null;
}

export type { CommandHandler }; 