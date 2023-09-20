import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { formatUnixTime } from '../../../../../../utils/format';

interface IProps {
  sender: string;
  text: string;
  time: number;
  self: boolean;
}

const MessageItem: FC<IProps> = ({ sender, time, text, self }) => {
  return (
    <Box w="fit-content" ml={self ? 'auto' : 'unset'}>
      <Text
        fontSize="sm"
        color="gray.500"
        fontWeight="normal"
        textAlign={self ? 'right' : 'left'}
        px="0.5em">
        {self ? 'You' : sender}
      </Text>
      <Box bg="blue.400" color="white" p="0.25em 0.5em" borderRadius="lg" w="fit-content">
        <Text>{text}</Text>
        <Text fontSize="xs" textAlign="right">
          {formatUnixTime(time)}
        </Text>
      </Box>
    </Box>
  );
};

export default MessageItem;
