import { Container } from "@hexaform/container";
import { EventBus } from "@hexaform/events";
import { CommandBus } from "./CommandBus";
import { CommandHandler } from "./CommandHandler";

type Class<T> = {
    new (...args: any[]): T;
};

export class ReflectiveCommandBus extends CommandBus {
    constructor(container: Container) {
        super(new EventBus<any, any>(container));
    }

    register(handler: Class<CommandHandler>): void {
        this.eventBus.subscribe(handler.prototype.handle["reflect:paramtypes"].pop(), handler);
    }
}