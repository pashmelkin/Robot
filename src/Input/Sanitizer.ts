import ISanitizer from "./ISanitizer";
import {BoardSides} from "../models/BoardSides";

export default class Sanitizer implements ISanitizer{
    Sanitize(input: string) : string
    {

        const command = input.toLocaleUpperCase();
        /*const regex =
            new RegExp( "\\d+ \\d+ " +`${BoardSides.NORTH}|${BoardSides.EAST}|
                                                   ${BoardSides.WEST}|${BoardSides.SOUTH}`);

        if(!regex.test(command)){
            console.log("wrong direction!!");
            return "";
        }*/
        return command;
    }
}
