export class AsyncPipeline {

  private _last: Promise<any> = Promise.resolve();
  public get last(): Promise<any> {
    return this._last;
  }

  public pipe<T, U extends any[]>(asyncFunction: (...args: U) => Promise<T>, ...args: U): Promise<T> {
    return this._last = this._last.then(() => asyncFunction(...args));
  }

}
