import { Transform } from "../interfaces";
import { Entity } from "./entity";

export class PlayerEntity extends Entity {
	public constructor({
		ctx,
		transform,
		image
	}: {
		ctx: CanvasRenderingContext2D;
		transform: Transform;
		image: HTMLImageElement;
	}) {
		super({ ctx, transform, image });
	}

	public update() {}
}
