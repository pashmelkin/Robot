export interface IProcessor {
    process: (command: string) => void;
    report: () => string;
}
