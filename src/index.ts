export class AsyncPipeline {

  private last: Promise<any> = Promise.resolve();

  public pipe<T, U extends any[]>(asyncFunction: (...args: U) => Promise<T>, ...args: U): Promise<T> {
    return this.last = this.last.then(() => asyncFunction(...args));
  }

}
