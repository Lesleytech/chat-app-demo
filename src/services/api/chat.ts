import { createApi } from '@reduxjs/toolkit/dist/query/react';

import {
  IChatMessage,
  IChatRoom,
  IChatRoomUser,
  IChatRoomWithUsers,
} from '../../lib/interfaces/chat';
import { IUser } from '../../lib/interfaces/user';
import store from '../../store';
import { generateBaseFields } from '../../utils/api';
import { baseQuery } from '../rtkQuery.service';

export const chatApi = createApi({
  baseQuery,
  reducerPath: 'chatApi',
  tagTypes: ['ChatRooms', 'ChatMessages'],
  endpoints: (builder) => ({
    getChatRooms: builder.query<Array<IChatRoomWithUsers>, void>({
      query: () => '/chatRooms?_embed=chatRoomUsers&_sort=createdAt&_order=desc',
      providesTags: ['ChatRooms'],
    }),
    getMessages: builder.query<Array<IChatMessage & { user: IUser }>, string>({
      query: (roomId) => `/messages?chatRoomId=${roomId}&_expand=user&_sort=createdAt`,
      providesTags: ['ChatMessages'],
    }),
    createNewRoom: builder.mutation<IChatRoom, string>({
      query: (name) => {
        return {
          url: '/chatRooms',
          method: 'POST',
          body: {
            name,
            ...generateBaseFields(),
          } as IChatRoom,
        };
      },
      // invalidatesTags: ['ChatRooms'], // No longer needed as joinNewRoom invalidates
    }),
    joinNewRoom: builder.mutation<IChatRoom, string>({
      query: (chatRoomId) => {
        const userId: string = (store.getState().auth.currentUser as IUser)?.id;

        return {
          url: '/chatRoomUsers',
          method: 'POST',
          body: {
            chatRoomId,
            userId,
            ...generateBaseFields(),
          } as IChatRoomUser,
        };
      },
      invalidatesTags: ['ChatRooms'],
    }),
    createNewMessage: builder.mutation<IChatMessage, string>({
      query: (text) => {
        const currentUser = store.getState().auth.currentUser as IUser;
        const selectedRoomId = store.getState().chat.selectedRoomId as string;

        return {
          url: '/messages',
          method: 'POST',
          body: {
            text,
            ack: 1,
            chatRoomId: selectedRoomId,
            isMedia: false,
            userId: currentUser.id,
            ...generateBaseFields(),
          } as IChatMessage,
        };
      },
      invalidatesTags: ['ChatMessages'], // No longer needed as joinNewRoom invalidates
    }),
  }),
});

export default chatApi;
