import { Socket } from "../common";
import { Entity } from "./entity";

export interface PlayerEntity extends Entity {
	readonly socket: Socket;
	readonly player: Player;
}

export interface Player {
	readonly name: string;
	hp: number;
}
