import {read} from "./CommandLine";
import {IProcessor} from "../Processor/Processor";

interface IInput {
    GetInput: (output: IProcessor) => any

};


const Input: IInput = {
    GetInput : read
};

export default Input;
