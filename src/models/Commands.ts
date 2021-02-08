export enum SimpleCommands {
    MOVE = 'MOVE',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    REPORT = 'REPORT',
}

export enum ComplexCommands {
    PLACE = 'PLACE',
}

export const Commands = { ...SimpleCommands, ...ComplexCommands };
export type Commands = typeof Commands;
