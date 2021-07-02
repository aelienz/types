import { Transform } from "../interfaces";

export abstract class Entity {
	private transform: Transform;
	private ctx: CanvasRenderingContext2D;
	private image: HTMLImageElement;

	public constructor({
		ctx,
		transform = { x: 0, y: 0 },
		image
	}: {
		ctx: CanvasRenderingContext2D;
		transform: Transform;
		image: HTMLImageElement;
	}) {
		this.transform = transform;
		this.ctx = ctx;
		this.image = image;
	}

	public abstract update(): any;

	public translate({ x = 0, y = 0 }) {
		this.transform.x += x;
		this.transform.y += y;
	}

	public render() {
		if (!this.image.complete || this.image.naturalHeight === 0) return;

		this.ctx.drawImage(this.image, this.transform.x, this.transform.y);
	}
}
