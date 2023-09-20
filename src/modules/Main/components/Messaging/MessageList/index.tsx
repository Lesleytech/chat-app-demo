import { VStack } from '@chakra-ui/react';

import { AsyncFeedback } from '../../../../../lib/components';
import chatApi from '../../../../../services/api/chat';
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector';
import MessageItem from './MessageItem';

const MessageList = () => {
  const { selectedRoomId } = useAppSelector((state) => state.chat);
  const { currentUser } = useAppSelector((state) => state.auth);
  const { data, isLoading, error } = chatApi.useGetMessagesQuery(selectedRoomId as string);

  if (!currentUser) return null;

  return (
    <AsyncFeedback isLoading={isLoading} error={error}>
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
    </AsyncFeedback>
  );
};

export default MessageList;
