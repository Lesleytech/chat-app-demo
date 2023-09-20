import { Button, Text, useToast } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../../../../../lib/components/Modal';
import chatApi from '../../../../../services/api/chat';
import { ChatRoomStore } from '../../../../../services/memStore/chatRoom';
import { uiActions } from '../../../../../store/ui';
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector';

const JoinRoomModal = () => {
  const { visible, data: roomId } = useAppSelector((state) => state.ui.modals.joinRoom);
  const toast = useToast();

  const dispatch = useDispatch();

  const [joinRoomMutate, { isLoading: isJoinRoomLoading }] = chatApi.useJoinNewRoomMutation();

  const handleSubmit = useCallback(() => {
    joinRoomMutate(roomId as string)
      .unwrap()
      .then(() => {
        dispatch(uiActions.closeModal('joinRoom'));
      })
      .catch(() => {
        toast({ title: 'An error occurred', status: 'error' });
      });
  }, [dispatch, joinRoomMutate, roomId, toast]);

  if (!roomId) return null;

  const room = ChatRoomStore.getById(roomId);

  const isLoading = isJoinRoomLoading;

  return (
    <Modal
      title="Join Room"
      isOpen={visible}
      onClose={() => {
        if (isLoading) return;

        dispatch(uiActions.closeModal('joinRoom'));
      }}
      action={
        <Button onClick={handleSubmit} colorScheme="blue" isLoading={isLoading}>
          Join
        </Button>
      }>
      <Text mb="1em">
        You are about joining{' '}
        <Text as="span" fontWeight="bold">
          {room.name}
        </Text>
        . Do you confirm?
      </Text>
    </Modal>
  );
};

export default JoinRoomModal;
