import { Center, Spinner, VStack } from '@chakra-ui/react';

import chatApi from '../../../../../services/api/chat';
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector';
import MessageItem from './MessageItem';

const MessageList = () => {
  const { selectedRoomId } = useAppSelector((state) => state.chat);
  const { currentUser } = useAppSelector((state) => state.auth);
  const { data, isLoading } = chatApi.useGetMessagesQuery(selectedRoomId as string);

  if (!currentUser) return null;

  if (isLoading) {
    return (
      <Center h="100%">
        <Spinner colorScheme="blue" />
      </Center>
    );
  }

  return (
    <VStack alignItems="unset" as="ul" py="1em">
      {data?.map((msg) => (
        <MessageItem
          time={msg.createdAt}
          self={msg.userId === currentUser.id}
          sender={msg.user.username}
          text={msg.text}
          key={msg.id}
        />
      ))}
    </VStack>
  );
};

export default MessageList;
