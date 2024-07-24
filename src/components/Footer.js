import React from "react";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import { FiArrowUpCircle } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="footer"
      width="100%"
      bg="#0d1626"
      color="rgb(202, 205, 208)"
      py={4}
      bottom="0"
      left="0"
      right="0"
      fontFamily="Courier"
      zIndex="1000"
    >
      <Flex
        align="center"
        justify="space-between"
        mx="auto"
        px={4}
        marginLeft="20px"
        marginRight="20px"
      >
        <Text color={"#A0A0B0"} ml={4}>
          © 2024 Kabir Pamnani – made with React and ChakraUI
        </Text>
        <Icon
          as={FiArrowUpCircle}
          boxSize={8}
          color={"rgb(202, 205, 208)"}
          _hover={{ cursor: "pointer", color: "teal.500" }}
          onClick={scrollToTop}
          mr={4}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
