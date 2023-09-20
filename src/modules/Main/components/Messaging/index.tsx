import { Box, Center, Flex, Text } from '@chakra-ui/react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import MessageHeader from './MessageHeader';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const Messaging = () => {
  const { selectedRoomId } = useAppSelector((state) => state.chat);

  if (!selectedRoomId) {
    return (
      <Center h="100%">
        <Box color="gray.500" textAlign="center">
          <Text fontWeight="bold" fontSize="3xl" mb="10px">
            Start a Chat
          </Text>
          <Text>Select a room to continue chatting!</Text>
          <Text>New here? You can join existing rooms or create one of your own.</Text>
        </Box>
      </Center>
    );
  }

  return (
    <Flex flexDir="column" h="100%">
      <Box maxW="1000px" mx="auto" w="90%">
        <MessageHeader />
      </Box>
      <Box
        flex="1"
        as={PerfectScrollbar}
        bg="gray.100"
        borderBottom="1px solid"
        borderColor="gray.200">
        <Box h="100%" w="90%" maxW="1000px" mx="auto" px="1em">
          <MessageList />
        </Box>
      </Box>
      <Box maxW="1000px" mx="auto" w="90%" py="3em">
        <MessageInput />
      </Box>
    </Flex>
  );
};

export default Messaging;
