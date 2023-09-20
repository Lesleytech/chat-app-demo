import { Button, Input, Text, useToast } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../../../../../lib/components/Modal';
import chatApi from '../../../../../services/api/chat';
import { uiActions } from '../../../../../store/ui';
import { useAppSelector } from '../../../../../utils/hooks/useAppSelector';

const NewRoomModal = () => {
  const [roomName, setRoomName] = useState('');
  const toast = useToast();

  const { visible } = useAppSelector((state) => state.ui.modals.newRoom);

  const dispatch = useDispatch();

  const [createRoomMutate, { isLoading: isCreateRoomLoading }] = chatApi.useCreateNewRoomMutation();
  const [joinRoomMutate, { isLoading: isJoinRoomLoading }] = chatApi.useJoinNewRoomMutation();

  const handleSubmit = useCallback(() => {
    if (!roomName) return; // In case I support submit with enter key later

    try {
      createRoomMutate(roomName)
        .unwrap()
        .then((data) => {
          joinRoomMutate(data.id)
            .unwrap()
            .then(() => {
              setRoomName('');
              dispatch(uiActions.closeModal('newRoom'));
            });
        });
    } catch (e) {
      toast({ title: 'An error occurred', status: 'error' });
    }
  }, [createRoomMutate, dispatch, joinRoomMutate, roomName, toast]);

  const isLoading = isCreateRoomLoading || isJoinRoomLoading;

  return (
    <Modal
      title="New Room"
      isOpen={visible}
      onClose={() => {
        if (isLoading) return;

        dispatch(uiActions.closeModal('newRoom'));
      }}
      action={
        <Button
          onClick={handleSubmit}
          colorScheme="blue"
          isDisabled={!roomName}
          isLoading={isLoading}>
          Continue
        </Button>
      }>
      <Text mb="1em">
        Wanna start a new space, it&apos;s just a click away. Enter a room name and continue,
        you&apos;ll be the first one in the room.
      </Text>
      <Input
        placeholder="Enter room name"
        value={roomName}
        disabled={isLoading}
        onChange={(e) => setRoomName(e.target.value)}
      />
    </Modal>
  );
};

export default NewRoomModal;
