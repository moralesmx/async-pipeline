"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncPipeline {
    constructor() {
        this._last = Promise.resolve();
    }
    get last() {
        return this._last;
    }
    pipe(asyncFunction, ...args) {
        return this._last = this._last.then(() => asyncFunction(...args));
    }
}
exports.AsyncPipeline = AsyncPipeline;
