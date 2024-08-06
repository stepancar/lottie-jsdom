export * from 'lottie-web';
import originalLottie from 'lottie-web';

let lottie: typeof originalLottie & {
    /**
     * JSDOM document object, for creating containers for your animations.
     * DO NOT USE it for anything else.
     */
    document: Document;
}
export default lottie;
