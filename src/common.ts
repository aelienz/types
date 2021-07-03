import { Entity, PlayerEntity } from "./entities";

export interface Socket {
	readonly id: string;
}

export interface GameState {
	entities: (Entity | PlayerEntity)[];
}
