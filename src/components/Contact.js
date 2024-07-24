import React from "react";
import { Box, Heading, Text, Badge, Flex } from "@chakra-ui/react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="entireContact">
      <Box
        bg="#0d1626"
        color="white"
        p={8}
        mt={8}
        fontFamily="Courier"
        textAlign="center"
        borderRadius="lg"
        maxW="800px"
        mx="auto"
        boxShadow="lg"
      >
        <Heading
          as="h2"
          size="2xl"
          mb={8}
          fontFamily={"Courier New"}
          color="rgb(202, 205, 208)"
        >
          CONTACT
        </Heading>
        <Flex justifyContent="space-around">
          <Box>
            <Badge
              colorScheme="teal"
              variant="solid"
              mb={2}
              px={3}
              py={1}
              borderRadius="full"
              fontSize="md"
              color={"white"}
            >
              PERSONAL
            </Badge>
            <Text fontSize="lg" mt={2}>
              <a
                href="mailto:kabirpamnani.careers@gmail.com"
                style={{ color: "#A0A0B0" }}
              >
                kabirpamnani.careers@gmail.com
              </a>
            </Text>
          </Box>
          <Box>
            <Badge
              colorScheme="teal"
              variant="solid"
              mb={2}
              px={3}
              py={1}
              borderRadius="full"
              fontSize="md"
              color={"white"}
            >
              ACADEMIC
            </Badge>
            <Text fontSize="lg" mt={2}>
              <a
                href="mailto:kabir.pamnani@tufts.edu"
                style={{ color: "#A0A0B0" }}
              >
                kabir.pamnani@tufts.edu
              </a>
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Contact;
