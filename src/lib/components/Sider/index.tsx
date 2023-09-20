import { Box, Flex, FlexProps, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { RiLayoutLeft2Line } from 'react-icons/ri';
import PerfectScrollbar from 'react-perfect-scrollbar';

interface IProps extends PropsWithChildren, FlexProps {
  header?: ReactNode;
  footer?: ReactNode;
}

const siderVariants = {
  open: { width: '300px' },
  closed: { width: '0px' },
};

const closeSiderVariants = {
  open: { opacity: 1, transition: { delay: 0.25, duration: 0 } },
  closed: { opacity: 0, transition: { duration: 0 } },
};

const siderContentVariants = {
  open: { opacity: 1, transition: { delay: 0.25, ease: 'easeIn' } },
  closed: { opacity: 0, transition: { duration: 0 } },
};

const Sider: FC<IProps> = ({ footer, header, children, ...otherProps }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box pos="relative" h="100%">
      <Box
        pos="absolute"
        left="15px"
        top="20px"
        as={motion.div}
        variants={closeSiderVariants}
        animate={isOpen ? 'closed' : 'open'}>
        <IconButton
          icon={<RiLayoutLeft2Line size={20} />}
          zIndex="2"
          aria-label="Show sider"
          size="md"
          // colorScheme="white"
          onClick={() => setIsOpen(true)}
        />
      </Box>
      <Box
        h="100%"
        bg="blackAlpha.800"
        color="white"
        w="300px"
        as={motion.div}
        variants={siderVariants}
        animate={isOpen ? 'open' : 'closed'}
        {...otherProps}>
        <Flex
          flexDir="column"
          h="100%"
          as={motion.div}
          variants={siderContentVariants}
          animate={isOpen ? 'open' : 'closed'}>
          <Flex alignItems="center" justifyContent="space-between" p="0.875em 0.75em">
            <Box>{header}</Box>
            <IconButton
              icon={<RiLayoutLeft2Line size={20} />}
              aria-label="Hide sider"
              size="md"
              bg="none"
              color="white"
              _hover={{ color: 'unset' }}
              onClick={() => setIsOpen(false)}
            />
          </Flex>
          <Box flex="1" as={PerfectScrollbar} p="0 0.75em">
            {children}
          </Box>
          {footer && <Box p="0.5em 0.75em">{footer}</Box>}
        </Flex>
      </Box>
    </Box>
  );
};

export { Sider };
