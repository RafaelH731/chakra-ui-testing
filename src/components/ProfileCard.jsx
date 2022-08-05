import { Box,
    Button,
    Flex,
    Heading,
    HStack,
    Stack,
    StackProps,
    Textarea,
    Text, } from '@chakra-ui/react';


    export const ListItem = (props: StackProps) => {
        const { children, ...rest } = props;
        return (
          <HStack as='li' spacing='20px' {...rest}>
            <Text>{children}</Text>
          </HStack>
        );
      };

export function Profile() {
    return (
        <Box
        maxW='994px'
        margin='auto'
        mt='-160px'
        borderRadius='12px'
        overflow='hidden'
        boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
        textAlign='center'
        as='section'
      >
        <Flex>
          <Box bg='#F0EAFB' p='60px'>
            <Text fontSize='24px' fontWeight='800'>
              Premium PRO
            </Text>
            
            <Button colorScheme='purple' size='lg' w='282px' mt='24px'>
              Get Started
            </Button>
          </Box>
          <Box p='60px' fontSize='18px' bg='white'>
            <Stack as='ul' spacing='20px' pt='24px'>
              <ListItem>Share your thought</ListItem>
              <Textarea placeholder='Here is a sample placeholder' />
            </Stack>
          </Box>
        </Flex>
      </Box>
    );
  }