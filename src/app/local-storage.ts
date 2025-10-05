import { InjectionToken } from '@angular/core';

export interface IStorage {
  /**
   * The **`length`** read-only property of the `Storage` object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/length)
   */
  readonly length: number;
  /**
   * The **`clear()`** method of the Storage interface clears all keys stored in a given `Storage` object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/clear)
   */
  clear(): void;
  /**
   * The **`getItem()`** method of the Storage interface, when passed a key name, will return that key's value, or `null` if the key does not exist, in the given `Storage` object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/getItem)
   */
  getItem(key: string): string | null;
  /**
   * The **`key()`** method of the Storage interface, when passed a number n, returns the name of the nth key in a given `Storage` object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/key)
   */
  key(index: number): string | null;
  /**
   * The **`removeItem()`** method of the Storage interface, when passed a key name, will remove that key from the given `Storage` object if it exists.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/removeItem)
   */
  removeItem(key: string): void;
  /**
   * The **`setItem()`** method of the Storage interface, when passed a key name and value, will add that key to the given `Storage` object, or update that key's value if it already exists.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/setItem)
   */
  setItem(key: string, value: string): void;
  [name: string]: any;
}

export const LocalStorage = new InjectionToken<IStorage>('localStorage');

/**
 * A memory-based implementation of the Storage interface for use on the server.
 */
export class MemoryStorage implements IStorage {
  [name: string]: any;
  length: number = 0;
  clear(): void {}
  getItem(key: string): string | null {
    return null;
  }
  key(index: number): string | null {
    return null;
  }
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}
