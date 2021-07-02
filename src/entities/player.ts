import { Player, Socket, Transform } from "../interfaces";
import { Entity } from "./entity";

export class PlayerEntity extends Entity {
	public readonly socket: Socket;
	public readonly player: Player;

	public constructor({
		socket,
		player,
		ctx,
		transform,
		image
	}: {
		socket: Socket;
		player: Player;
		ctx: CanvasRenderingContext2D;
		transform: Transform;
		image: HTMLImageElement;
	}) {
		super({ ctx, transform, image });

		this.socket = socket;
		this.player = player;
	}

	public update() {}
}
