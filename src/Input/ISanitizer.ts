export default interface ISanitizer {
    Sanitize: (input: string) => { command: string; error: string };
}
