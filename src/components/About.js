import React from "react";
import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import profile from "../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <div className="entireAbout">
      <Box
        bg="#0f172a"
        color="white"
        minHeight="100vh"
        padding={{ base: 4, md: 8 }}
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb={8}
          fontFamily="Courier"
          color="rgb(202, 205, 208)"
        >
          ABOUT
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          fontFamily="Courier"
          textColor="#A0A0B0"
          letterSpacing={-0.5}
        >
          <GridItem
            display="flex"
            flexDirection="column"
            justifyContent={{ base: "center", md: "flex-start" }} // Align to the top on larger screens
            alignItems="center"
            textAlign="left"
            width="100%"
            marginTop={{ base: 0, md: 0 }} // Adjust the margin-top to align with the right side
            marginLeft={{ base: 0, md: 31 }} // Add margin-left to move text to the right on larger screens
          >
            <Box maxWidth="400px">
              <Heading
                as="h2"
                size="2xl"
                mb={4}
                fontFamily="Courier"
                color="rgb(202, 205, 208)"
              >
                Kabir Pamnani
              </Heading>
              <Text fontSize="xl" mb={2} color="rgb(202, 205, 208)">
                Senior at Tufts University
              </Text>
              <Text fontSize="md" mb={4}>
                I'm passionate about building aesthetic full-stack web-apps.
              </Text>
              <Image
                src={profile}
                alt="Kabir Pamnani"
                borderRadius="full"
                boxSize="250px"
                mt={18}
                ml={10}
                border="4px solid white"
              />
            </Box>
          </GridItem>
          <GridItem
            display="flex"
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent="center"
            textAlign={{ base: "center", md: "left" }}
            width="100%"
          >
            <Box maxWidth="550px">
              <Text fontSize="md" mb={4}>
                I was introduced to the world of programming in 9th Grade when I
                took my first Computer Science class. For many years,
                programming was nothing to me but a bunch of If-else statements
                with little-to-no practical applications. I wasn't inspired by
                the field, and considered switching my area of study.
              </Text>
              <Text fontSize="md" mb={4}>
                This all changed the moment I started to work on projects that
                added value for clients. Through working at a range of companies
                including <b color="rgb(202, 205, 208)">AVPN</b>,{" "}
                <b color="rgb(202, 205, 208)">EY</b>, and{" "}
                <b color="rgb(202, 205, 208)">Nintex</b>, I learned to build and
                deliver products for a diverse range of clients. It was these
                experiences that demonstrated the ability of technology to
                change the lives of others.
              </Text>
              <Text fontSize="md" mb={4}>
                Since this realization, I've been driven to create apps that aim
                to ease user experiences. If I can create something that will
                solve even just one person’s problem, I consider that a victory.
              </Text>
              <Text fontSize="md" mb={4}>
                Other than programming, I'm either playing padel, cooking,
                DJ-ing or watching any and every major sports tournament.
              </Text>
              <Text fontSize="md" mb={4}>
                This site is not just intended to be a showcase of my endeavors
                as a programmer, but rather a documentation of all of my feats
                (and setbacks) as I navigate through this beautiful gift of
                life.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
