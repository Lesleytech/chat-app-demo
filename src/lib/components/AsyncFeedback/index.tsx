import { Alert, AlertIcon, Center, Spinner, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  isLoading: boolean;
  error: any;
  isEmpty?: boolean;
}

const AsyncFeedback: FC<IProps> = ({ error, isLoading, children, isEmpty }) => {
  if (isLoading) {
    return (
      <Center h="100%" minH="150px">
        <Spinner colorScheme="blue" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error" m="1em">
        <AlertIcon />
        Sorry, an error occurred :(
      </Alert>
    );
  }

  if (isEmpty) {
    return (
      <Text fontSize="xs" p="1em" textAlign="center">
        No record at this time :(
      </Text>
    );
  }

  return <>{children}</>;
};

export { AsyncFeedback };
