import { Transform } from "../interfaces";
import { Entity } from "./entity";
export declare class PlayerEntity extends Entity {
    constructor({ ctx, transform, image }: {
        ctx: CanvasRenderingContext2D;
        transform: Transform;
        image: HTMLImageElement;
    });
    update(): void;
}
//# sourceMappingURL=player.d.ts.map