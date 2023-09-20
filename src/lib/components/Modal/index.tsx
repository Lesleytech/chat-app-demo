import {
  Button,
  HStack,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface IProps extends PropsWithChildren {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  action?: ReactNode;
}

const Modal: FC<IProps> = ({ isOpen, onClose, children, title, action }) => {
  return (
    <ChakraModal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <HStack>
            <Button onClick={onClose}>Close</Button>
            {action}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
