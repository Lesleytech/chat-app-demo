import { IBaseEntity } from './entity';

export interface IUser extends IBaseEntity {
  username: string;
  email: string;
}
