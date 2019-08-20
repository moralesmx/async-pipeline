export class AsyncPipeline {
    constructor() {
        this.last = Promise.resolve();
    }
    pipe(asyncFunction, ...args) {
        return this.last = this.last.then(() => asyncFunction(...args));
    }
}
