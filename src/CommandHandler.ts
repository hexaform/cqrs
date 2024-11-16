import { Command } from "./Command";

export interface CommandHandler {
    handle(command: Command): Promise<void> | void;
}