import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { FormEvent, useCallback, useState } from 'react';
import { CgAttachment } from 'react-icons/cg';
import { IoSend } from 'react-icons/io5';

import chatApi from '../../../../../services/api/chat';

const MessageInput = () => {
  const [text, setText] = useState('');

  const [createNewMsgMutate, { isLoading }] = chatApi.useCreateNewMessageMutation();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createNewMsgMutate(text)
        .unwrap()
        .then(() => {
          setText('');
        });
    },
    [createNewMsgMutate, text],
  );

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg">
        <InputLeftElement h="100%" px="1.5em">
          <IconButton
            aria-label="Send msg"
            icon={<CgAttachment size={20} />}
            _hover={{ bg: 'none' }}
            bg="none"
            borderRadius="50%"
            size="lg"
          />
        </InputLeftElement>
        <Input
          bg="white"
          isDisabled={isLoading}
          size="lg"
          h="60px"
          value={text}
          onChange={(e) => setText(e.target.value)}
          borderRadius="12px"
          shadow="lg"
          fontSize="0.975rem"
          outline="none !important"
          _focus={{ outline: 'none !important' }}
          placeholder="Type message..."
        />
        <InputRightElement h="100%" px="1.5em">
          <IconButton
            type="submit"
            isDisabled={!text}
            isLoading={isLoading}
            aria-label="Send msg"
            icon={<IoSend size={20} />}
            colorScheme="whatsapp"
            borderRadius="50%"
            size="md"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default MessageInput;
