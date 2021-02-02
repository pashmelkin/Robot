import {read} from "./CommandLine";
import {IProcessor} from "../Processor/Processor";
import {sanitize} from "./Sanitizer";

interface IInput {
    GetInput: (output: IProcessor) => any
    Sanitize: (input: string) => string

};


const Input: IInput = {
    GetInput : read,
    Sanitize: sanitize
};

export default Input;
