import { Transform } from "../interfaces";
export declare abstract class Entity {
    private transform;
    private ctx;
    private image;
    constructor({ ctx, transform, image }: {
        ctx: CanvasRenderingContext2D;
        transform: Transform;
        image: HTMLImageElement;
    });
    abstract update(): any;
    render(): void;
}
//# sourceMappingURL=entity.d.ts.map