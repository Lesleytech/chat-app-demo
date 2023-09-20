import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
}

const UserAvatar: FC<IProps> = ({ title, subtitle, onClick }) => {
  return (
    <Flex
      alignItems="center"
      onClick={onClick}
      cursor="pointer"
      borderRadius="5px"
      _hover={{ bg: 'gray.200' }}
      p="0.5em">
      <Avatar name={title} size="md" mr="0.5em" />
      <Box>
        <Text>{title}</Text>
        <Text noOfLines={1} color="gray.500">
          {subtitle}
        </Text>
      </Box>
    </Flex>
  );
};

export { UserAvatar };
