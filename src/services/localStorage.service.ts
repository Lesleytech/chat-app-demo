import localStore from 'store';

import { IUser } from '../lib/interfaces/user';

interface ILocalStore {
  authUser: IUser | null;
}

type StoreKeys = keyof ILocalStore;

export class LocalStorageService {
  static getItem<T extends StoreKeys>(key: T): ILocalStore[T] | null {
    return localStore.get(key);
  }

  static setItem<T extends StoreKeys>(key: T, value: ILocalStore[T]) {
    localStore.set(key, value);
  }
}
