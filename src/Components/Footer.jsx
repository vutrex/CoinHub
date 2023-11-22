import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Image from '../assets/img4.jpg'
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Our founder is Mr. Ashish Kandari who is a very proficient front end
            developer. XD
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}></Avatar>
          <Text>Ashish Kandari</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
