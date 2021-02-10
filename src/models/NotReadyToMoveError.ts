import { Commands } from './Commands';
import { CustomError } from 'ts-custom-error';

export class NotReadyToMoveError extends CustomError {
    public constructor() {
        super(`Not ready to process the command. Please put the ${Commands.PLACE} command first.`);
    }
}
