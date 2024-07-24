import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as ChakraLink, Box, VStack } from "@chakra-ui/react";
import "./CenterContent.css";
import Footer from "./Footer";

function CenterContent() {
  return (
    <Box className="center-content">
      <VStack as="nav" spacing={0}>
        <ChakraLink
          as={ScrollLink}
          to="home"
          smooth={true}
          duration={20}
          _hover={{
            cursor: "pointer",
            color: "teal.500",
            transition: "color 0.3s",
          }}
        >
          HOME
        </ChakraLink>
        <ChakraLink
          as={ScrollLink}
          to="about"
          smooth={true}
          duration={20}
          _hover={{
            cursor: "pointer",
            color: "teal.500",
            transition: "color 0.3s",
          }}
        >
          ABOUT
        </ChakraLink>
        <ChakraLink
          as={ScrollLink}
          to="experience"
          smooth={true}
          duration={20}
          _hover={{
            cursor: "pointer",
            color: "teal.500",
            transition: "color 0.3s",
          }}
        >
          EXPERIENCE
        </ChakraLink>
        <ChakraLink
          as={ScrollLink}
          to="projects"
          smooth={true}
          duration={20}
          _hover={{
            cursor: "pointer",
            color: "teal.500",
            transition: "color 0.3s",
          }}
        >
          PROJECTS
        </ChakraLink>
        <ChakraLink
          as={ScrollLink}
          to="contact"
          smooth={true}
          duration={20}
          _hover={{
            cursor: "pointer",
            color: "teal.500",
            transition: "color 0.3s",
          }}
        >
          CONTACT
        </ChakraLink>
      </VStack>
      <Box className="arrow-container">
        <div className="arrow"></div>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </Box>

      {/* <Footer /> */}
    </Box>
  );
}

export default CenterContent;
