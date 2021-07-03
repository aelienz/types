import { Entity, PlayerEntity } from "./entities";

export interface Socket {
	readonly id: string;
}

export interface Transform {
	x: number;
	y: number;
}

export interface Player {
	readonly name: string;
}

export interface GameState {
	entities: (Entity | PlayerEntity)[];
}
