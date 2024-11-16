import { Container } from "@hexaform/container";
import { EventBus } from "@hexaform/events";
import { QueryBus } from "./QueryBus";
import { QueryHandler } from "./QueryHandler";

type Class<T> = {
    new (...args: any[]): T;
};

export class ReflectiveQueryBus extends QueryBus {
    constructor(container: Container) {
        super(new EventBus<any, any>(container));
    }

    register(handler: Class<QueryHandler>): void {
        this.eventBus.subscribe(handler.prototype.handle["reflect:paramtypes"].pop(), handler);
    }
}