"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor({ ctx, transform = { x: 0, y: 0 }, image }) {
        this.transform = transform;
        this.ctx = ctx;
        this.image = image;
    }
    render() {
        if (!this.image.complete || this.image.naturalHeight === 0)
            return;
        this.ctx.drawImage(this.image, this.transform.x, this.transform.y);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map