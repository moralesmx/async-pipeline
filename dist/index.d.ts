export declare class AsyncPipeline {
    private last;
    pipe<T, U extends any[]>(asyncFunction: (...args: U) => Promise<T>, ...args: U): Promise<T>;
}
