import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncFeedback } from '../../../../lib/components';
import { IChatRoomWithUsers } from '../../../../lib/interfaces/chat';
import { IUser } from '../../../../lib/interfaces/user';
import chatApi from '../../../../services/api/chat';
import { ChatRoomStore } from '../../../../services/memStore/chatRoom';
import { chatActions } from '../../../../store/chat';
import { uiActions } from '../../../../store/ui';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import ChatRoomItem from './ChatRoomItem';

const ChatRooms = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const { selectedRoomId } = useAppSelector((state) => state.chat);

  const dispatch = useDispatch();

  const { data, isLoading, error } = chatApi.useGetChatRoomsQuery();

  const { notJoined, joined } = useMemo(() => {
    const joined: IChatRoomWithUsers[] = [];
    const notJoined: IChatRoomWithUsers[] = [];

    data?.forEach((room) => {
      if (room.chatRoomUsers.some((roomUser) => roomUser.userId === (currentUser as IUser).id)) {
        joined.push(room);
      } else {
        notJoined.push(room);
      }
    });

    return { joined, notJoined };
  }, [currentUser, data]);

  useEffect(() => {
    ChatRoomStore.setFromResponse(data || []);
  }, [data]);

  return (
    <AsyncFeedback error={error} isLoading={isLoading} isEmpty={data?.length === 0}>
      <Box>
        <Flex alignItems="center" gap="1em" color="gray.400" mb="1em">
          <Text>Joined</Text>
          <Divider bg="red" borderColor="gray.400" />
        </Flex>
        {joined.length ? (
          <VStack as="ul" alignItems="unset">
            {joined.map((room) => (
              <ChatRoomItem
                name={room.name}
                numMembers={room.chatRoomUsers.length}
                key={room.id}
                onClick={() => dispatch(chatActions.setSelectedRoomId(room.id))}
                selected={room.id === selectedRoomId}
              />
            ))}
          </VStack>
        ) : null}
      </Box>
      <Box>
        <Flex alignItems="center" gap="1em" color="gray.400" my="1em">
          <Text>Not joined</Text>
          <Divider bg="red" borderColor="gray.400" flex="1" />
        </Flex>
        {notJoined.length ? (
          <VStack as="ul" alignItems="unset">
            {notJoined.map((room) => (
              <ChatRoomItem
                name={room.name}
                numMembers={room.chatRoomUsers.length}
                key={room.id}
                onClick={() => {
                  dispatch(uiActions.openModal({ name: 'joinRoom', data: room.id }));
                }}
              />
            ))}
          </VStack>
        ) : null}
      </Box>
    </AsyncFeedback>
  );
};

export default ChatRooms;
