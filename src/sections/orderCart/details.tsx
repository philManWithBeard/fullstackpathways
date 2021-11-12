import {
  FormControl,
  Button,
  FormLabel,
  Select,
  Input,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const Details = () => (
  <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-start">
      <Heading size="2xl">Your details</Heading>
      <Text>If you already have an account, click here </Text>
    </VStack>
    <SimpleGrid columns="2" columnGap="3" rowGap="6" w="full">
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="Kerry" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Leslie" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Blvd, Broken Dreams 21" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder="Birmingham" />
        </FormControl>
      </GridItem>
      <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="uk">United Kingdom</option>
            <option value="usa">United States of America</option>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Button size="lg" w="full">
            Place Order
          </Button>
        </FormControl>
      </GridItem>
    </SimpleGrid>
  </VStack>
);
export default Details;
