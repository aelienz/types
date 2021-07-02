import { Socket, Transform } from "../interfaces";
import { Entity } from "./entity";

export class PlayerEntity extends Entity {
	public readonly socket: Socket;

	public constructor({
		socket,
		ctx,
		transform,
		image
	}: {
		socket: Socket;
		ctx: CanvasRenderingContext2D;
		transform: Transform;
		image: HTMLImageElement;
	}) {
		super({ ctx, transform, image });

		this.socket = socket;
	}

	public update() {}
}
