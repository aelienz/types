import { Player, Socket, Transform } from "../interfaces";
import { Entity } from "./entity";

export class PlayerEntity extends Entity {
	public readonly socket: Socket;
	public readonly player: Player;

	public constructor({
		socket,
		player,
		transform,
		image
	}: {
		socket: Socket;
		player: Player;
		transform: Transform;
		image: string;
	}) {
		super({ transform, image });

		this.socket = socket;
		this.player = player;
	}
}
