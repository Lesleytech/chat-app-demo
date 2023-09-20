import { Card, CardBody, Text, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AsyncFeedback, UserAvatar } from '../../../../lib/components';
import { IUser } from '../../../../lib/interfaces/user';
import { getAllUsers } from '../../../../services/api/user';
import { authActions } from '../../../../store/auth';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery('all-users', getAllUsers, { refetchOnMount: false });

  const handleLogin = useCallback(
    (user: IUser) => {
      dispatch(authActions.login(user));
      setTimeout(() => navigate('/'), 10);
    },
    [dispatch, navigate],
  );

  return (
    <Card w="90vw" maxW="400px">
      <CardBody>
        <Text fontSize="xl" fontWeight="bold" mb="1em" px="0.5em">
          Select a Test Account
        </Text>
        {
          <AsyncFeedback isLoading={isLoading} error={error} isEmpty={data?.length === 0}>
            <VStack alignItems="unset">
              {data?.map((user) => (
                <UserAvatar
                  title={user.username}
                  subtitle={user.email}
                  key={user.id}
                  onClick={() => handleLogin(user)}
                />
              ))}
            </VStack>
          </AsyncFeedback>
        }
      </CardBody>
    </Card>
  );
};

export default LoginPage;
