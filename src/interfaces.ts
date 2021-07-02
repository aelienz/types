import { Entity, PlayerEntity } from "./entities";

export interface Socket {
	id: string;
}

export interface Transform {
	x: number;
	y: number;
}

export interface Player {
	name: string;
}

export interface GameState {
	entities: (Entity | PlayerEntity)[];
}
