"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var cli_d_1 = __importDefault(require("./utils/cli.d"));
dotenv_1.default.config({
    path: '.env'
});
cli_d_1.default;
