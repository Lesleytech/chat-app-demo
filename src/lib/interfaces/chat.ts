import { IBaseEntity } from './entity';

export interface IChatRoom extends IBaseEntity {
  name: string;
}

export interface IChatMessage extends IBaseEntity {
  userId: string;
  chatRoomId: string;
  type?: string;
  text: string;
  url?: string;
  isMedia: boolean;
  ack: number;
}

export interface IChatRoomUser extends IBaseEntity {
  chatRoomId: string;
  userId: string;
}

export interface IChatRoomWithUsers extends IChatRoom {
  chatRoomUsers: IChatRoomUser[];
}
