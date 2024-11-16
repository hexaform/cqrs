import { EventBus } from "@hexaform/events";
import { Query } from "./Query";
import { QueryHandler } from "./QueryHandler";

export class QueryBus {
    protected eventBus: EventBus<any, any>;

    constructor(eventBus: EventBus<any, any>) {
        this.eventBus = eventBus;
    }

    async dispatch<Handler extends QueryHandler>(query: Query): Promise<ReturnType<Handler["handle"]>> {
        let result = await this.eventBus.dispatch(query);

        return result.pop() as ReturnType<Handler["handle"]>;
    }
}