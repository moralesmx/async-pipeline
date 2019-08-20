export declare class AsyncPipeline {
    private _last;
    get last(): Promise<any>;
    pipe<T, U extends any[]>(asyncFunction: (...args: U) => Promise<T>, ...args: U): Promise<T>;
}
