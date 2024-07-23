import React, { useState } from "react";
import "./Navbar.css";
import xIcon from "../assets/x.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { ChakraProvider, Text } from "@chakra-ui/react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  // };
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <ScrollLink to="home" smooth={true} duration={20} className="home-link">
          <Text
            _hover={{
              color: "teal.500", // Change text color to teal
              cursor: "pointer", // Change cursor to pointer
            }}
          >
            Kabir Pamnani
          </Text>
        </ScrollLink>
      </div>
      {/* <div className="navbar-menu">
        <a
          href="https://github.com/kabirgpamnani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={xIcon} alt="Github" className="footer-icon" />
        </a>
      </div> */}
      <div className="navbar-contact">
        <Button
          size="sm"
          // rightIcon={<ArrowForwardIcon />}
          colorScheme="white"
          variant="outline"
          _hover={{
            // backgroundColor: "white", // Change background color to teal
            color: "teal.500", // Change text color to white
            cursor: "pointer", // Change cursor to pointer
          }}
        >
          Resume
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
