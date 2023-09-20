import { IChatRoomWithUsers } from '../../lib/interfaces/chat';

export class ChatRoomStore {
  private static rooms: Record<string, IChatRoomWithUsers> = {};

  static setFromResponse(data: IChatRoomWithUsers[]) {
    this.rooms = data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
  }

  static getById(id: string) {
    return this.rooms[id];
  }
}
