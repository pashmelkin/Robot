import {read} from "./CommandLine";

interface IInput {
    GetInput: () => any

};


const Input: IInput = {
    GetInput : read
};

export default Input;
