import { Alert, AlertDescription, AlertIcon, AlertTitle, Center } from '@chakra-ui/react';

const MobileLayout = () => {
  return (
    <Center h="100vh" p="1em">
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px">
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Mobile Support
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          There is no support for mobile yet. Support for mobile is on the way.
        </AlertDescription>
      </Alert>
    </Center>
  );
};

export default MobileLayout;
