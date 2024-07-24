import React from "react";
import { Text, Link, Icon, Flex, Button } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <ScrollLink to="home" smooth={true} duration={20} className="home-link">
          <Text
            _hover={{
              color: "teal.500",
              cursor: "pointer",
            }}
          >
            Kabir Pamnani
          </Text>
        </ScrollLink>
      </div>
      <div className="navbar-menu">
        <Flex align="center">
          <Link
            href="https://www.linkedin.com/in/kabirpamnani/"
            isExternal
            mx={2}
            _hover={{ cursor: "pointer" }}
          >
            <Icon as={FiLinkedin} boxSize={5} color={"#A0A0B0"} />
          </Link>
          <Link
            href="https://github.com/kabirgpamnani"
            isExternal
            mx={2}
            _hover={{ cursor: "pointer" }}
          >
            <Icon as={FiGithub} boxSize={5} color={"#A0A0B0"} />
          </Link>
          <Link
            href="mailto:kabirpamnani.careers@gmail.com"
            mx={2}
            _hover={{ cursor: "pointer" }}
          >
            <Icon as={FiMail} boxSize={5} color={"#A0A0B0"} />
          </Link>
          <Button
            as="a"
            href="/resume.pdf" // Path to your PDF file in the public directory
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer"
            size="sm"
            colorScheme="white"
            variant="outline"
            _hover={{
              color: "teal.500",
              borderColor: "teal.500",
              cursor: "pointer",
            }}
            ml={4}
          >
            Resume
          </Button>
        </Flex>
      </div>
    </header>
  );
};

export default Navbar;
