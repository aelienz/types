import { Transform } from "../interfaces";

export class Entity {
	public transform: Transform;
	public readonly image: string;

	public constructor({
		transform = { x: 0, y: 0 },
		image
	}: {
		transform: Transform;
		image: string;
	}) {
		this.transform = transform;
		this.image = image;
	}
}
