import { Query } from "./Query";

export interface QueryHandler {
    handle(query: Query): Promise<unknown> | unknown;
}