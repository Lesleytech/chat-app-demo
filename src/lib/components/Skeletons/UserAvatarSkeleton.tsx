import { Box, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  numItems?: number;
}

const UserAvatarSkeleton: FC<IProps> = ({ numItems = 1 }) => {
  return (
    <VStack alignItems="unset">
      {Array(numItems)
        .fill(null)
        .map((a, i) => (
          <Flex key={i}>
            <SkeletonCircle mr="1em" />
            <Box>
              <Skeleton mb="0.5em" h="1rem" />
              <Skeleton h="0.875rem" />
            </Box>
          </Flex>
        ))}
    </VStack>
  );
};

export { UserAvatarSkeleton };
