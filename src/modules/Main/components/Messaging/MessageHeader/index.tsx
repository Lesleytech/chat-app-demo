import { Avatar, Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';
import { MdMoreVert } from 'react-icons/md';

import chatApi from '../../../../../services/api/chat';
import { ChatRoomStore } from '../../../../../services/memStore/chatRoom';
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector';

const MessageHeader = () => {
  const { selectedRoomId } = useAppSelector((state) => state.chat);
  const { data } = chatApi.useGetChatRoomsQuery();

  if (!data || !selectedRoomId) return null;

  const room = ChatRoomStore.getById(selectedRoomId);

  return (
    <Flex py="0.5em" justifyContent="space-between">
      <Flex
        alignItems="center"
        cursor="pointer"
        borderRadius="5px"
        _hover={{ bg: '#ffffff22' }}
        p="0.5em">
        <Avatar name={room.name} size="md" mr="0.5em" />
        <Box>
          <Text>{room.name}</Text>
          <Text noOfLines={1} color="gray.400">
            {room.chatRoomUsers.length} members
          </Text>
        </Box>
      </Flex>
      <HStack>
        <IconButton aria-label="Search for message" icon={<LuSearch size={20} />} bg="none" />
        <IconButton aria-label="Search for message" icon={<MdMoreVert size={20} />} bg="none" />
      </HStack>
    </Flex>
  );
};

export default MessageHeader;
