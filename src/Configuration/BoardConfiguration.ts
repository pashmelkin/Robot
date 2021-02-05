export class BoardConfiguration{
    get width(): number {
        return this._width;
    }
    get length(): number {
        return this._length;
    }

    constructor(length: number , width: number) {
        this._length = length;
        this._width = width;
    }

    private readonly _length: number;
    private readonly _width: number;
}
