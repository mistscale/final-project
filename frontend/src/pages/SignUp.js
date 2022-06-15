import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

const Signup = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 10, 20]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>UserName</FormLabel>
                <Input placeholder="John" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Due" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Sunset boulevard 21" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="Califonia" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button size="lg" w="full">
                Register
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="center"
          justifyContent="center"
          bg="gray.50"
        >
          <Box boxSize="500px">
            <Image
              src="https://img.freepik.com/free-vector/multicultural-people-standing-together_74855-6583.jpg?w=1480&t=st=1654772133~exp=1654772733~hmac=76f3c304ae21e917b61eea3f80465aca2ae415a1bb03d5802aa8ef60322eabd3"
              alt="Tourist planning trip"
            />
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};
export default Signup;
