import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  TagLabel,
} from "@chakra-ui/react";
import React from "react";

const Address = () => {
  return (
    <Box>
      <Container  maxW="50%">
      
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
    </Container>
    </Box>
  );
};

export default Address;
