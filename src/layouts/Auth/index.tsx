import { Box, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Center h="100vh" bg="blackAlpha.800">
      <Box>
        <Outlet />
      </Box>
    </Center>
  );
};

export default AuthLayout;
