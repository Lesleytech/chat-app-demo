import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  name: string;
  numMembers: number;
  onClick?: () => void;
  selected?: boolean;
}

const ChatRoomItem: FC<IProps> = ({ numMembers, name, onClick, selected }) => {
  return (
    <Flex
      onClick={onClick}
      as="li"
      alignItems="center"
      cursor="pointer"
      borderRadius="5px"
      _hover={{ bg: '#ffffff22' }}
      bg={selected ? '#ffffff22' : 'initial'}
      p="0.5em">
      <Avatar name={name} size="md" mr="0.5em" />
      <Box>
        <Text>{name}</Text>
        <Text noOfLines={1} color="gray.400">
          {numMembers} members
        </Text>
      </Box>
    </Flex>
  );
};

export default ChatRoomItem;
