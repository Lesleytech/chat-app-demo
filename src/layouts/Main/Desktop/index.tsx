import { Avatar, Box, Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { RxPlus } from 'react-icons/rx';
import { useDispatch } from 'react-redux';

import { Sider } from '../../../lib/components';
import ChatRooms from '../../../modules/Main/components/ChatRooms';
import Messaging from '../../../modules/Main/components/Messaging';
import { authActions } from '../../../store/auth';
import { chatActions } from '../../../store/chat';
import { uiActions } from '../../../store/ui';
import { useAppSelector } from '../../../utils/hooks/useAppSelector';

const DesktopLayout = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  return (
    <Flex h="100vh">
      <Sider
        header={
          <Button
            colorScheme="blue"
            leftIcon={<RxPlus size={18} />}
            onClick={() => dispatch(uiActions.openModal({ name: 'newRoom' }))}>
            New Room
          </Button>
        }
        footer={
          <Button w="100%" h="fit-content" p="0" colorScheme="blackAlpha">
            <Flex w="100%" alignItems="center" justifyContent="space-between" p="0.75em">
              <HStack spacing="10px">
                <Avatar
                  icon={<AiOutlineUser fontSize="1.5rem" />}
                  bg="blue.400"
                  h="40px"
                  w="40px"
                />
                <Text>{currentUser?.username}</Text>
              </HStack>
              <IconButton
                colorScheme="red"
                aria-label="Logout"
                icon={<MdLogout size={18} />}
                onClick={() => {
                  dispatch(authActions.logout());
                  dispatch(chatActions.setSelectedRoomId(null));
                }}
              />
            </Flex>
          </Button>
        }>
        <ChatRooms />
      </Sider>
      <Box flex="1" bg="white" h="100%">
        <Messaging />
      </Box>
    </Flex>
  );
};

export default DesktopLayout;
