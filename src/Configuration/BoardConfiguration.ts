import { load } from 'ts-dotenv';

export class BoardConfiguration {
    get width(): number {
        return this._width;
    }
    get length(): number {
        return this._length;
    }

    constructor() {
        const env = load({
            LENGTH: Number,
            WIDTH: Number,
        });

        this._length = env.LENGTH;
        this._width = env.WIDTH;
    }

    private readonly _length: number;
    private readonly _width: number;
}
