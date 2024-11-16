import { EventBus } from "@hexaform/events";
import { Command } from "./Command";

export class CommandBus {
    protected eventBus: EventBus<any, any>;

    constructor(eventBus: EventBus<any, any>) {
        this.eventBus = eventBus;
    }

    async dispatch(command: Command): Promise<any> {
        await this.eventBus.dispatch(command);
    }
}