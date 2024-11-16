// @ts-nocheck

import { CommandBus as CommandBus_1 } from "./CommandBus";
  import { EventBus as EventBus_1 } from "@hexaform/events";
    Object.defineProperty(CommandBus_1.prototype, "reflect:paramtypes", { get() { return [ EventBus_1 ]; }});
  import { Command as Command_1 } from "./Command";
    Object.defineProperty(CommandBus_1.prototype.dispatch, "reflect:paramtypes", { get() { return [ Command_1 ]; }});

import { QueryBus as QueryBus_1 } from "./QueryBus";
  import { EventBus as EventBus_2 } from "@hexaform/events";
    Object.defineProperty(QueryBus_1.prototype, "reflect:paramtypes", { get() { return [ EventBus_2 ]; }});
  import { Query as Query_1 } from "./Query";
    Object.defineProperty(QueryBus_1.prototype.dispatch, "reflect:paramtypes", { get() { return [ Query_1 ]; }});

import { ReflectiveCommandBus as ReflectiveCommandBus_1 } from "./ReflectiveCommandBus";
  import { Container as Container_1 } from "@hexaform/container";
    Object.defineProperty(ReflectiveCommandBus_1.prototype, "reflect:paramtypes", { get() { return [ Container_1 ]; }});
    Object.defineProperty(ReflectiveCommandBus_1.prototype.register, "reflect:paramtypes", { get() { return [ "undefined" ]; }});

import { ReflectiveQueryBus as ReflectiveQueryBus_1 } from "./ReflectiveQueryBus";
  import { Container as Container_2 } from "@hexaform/container";
    Object.defineProperty(ReflectiveQueryBus_1.prototype, "reflect:paramtypes", { get() { return [ Container_2 ]; }});
    Object.defineProperty(ReflectiveQueryBus_1.prototype.register, "reflect:paramtypes", { get() { return [ "undefined" ]; }});
