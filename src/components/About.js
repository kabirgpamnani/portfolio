import React from "react";
import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";
import profile from "../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <div className="entireAbout">
      <Box
        bg="#0f172a"
        color="rgb(202, 205, 208)"
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
          color="rgb(202, 205, 208)"
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
                <b>CS Major at Tufts University</b>
              </Text>
              <Text fontSize="md" mb={4}>
                • Born in Singapore <br></br>• Graduate of UWCSEA <br></br>•
                Completed 2 year Singapore military<br></br>• Current senior
                studying CS
              </Text>
              <Image
                src={profile}
                alt="Kabir Pamnani"
                borderRadius="full"
                boxSize="250px"
                mt={18}
                ml={10}
                border="4px solid rgb(202, 205, 208)"
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
                My first introduction to programming was in 9th Grade when I
                took my first Computer Science class. For many years,
                programming was nothing to me but a bunch of if-else statements.
                I had no understanding of its significance, and more
                importantly, its power as a tool to create.
              </Text>
              <Text fontSize="md" mb={4}>
                However, my perspective changed once I started creating
                impactful solution for clients at companies like{" "}
                <b color="white">AVPN</b>, <b color="white">EY</b>, and{" "}
                <b color="white">Nintex</b>. These experiences showcased the
                transformative power of technology and fueled my passion for
                developing apps that enhance user experiences. If I can make
                even one person's life easier, I see that as meaningful.
              </Text>
              <Text fontSize="md" mb={4}>
                When I'm not programming, I'm either playing pádel, cooking,
                meditating or watching any and every major sports tournament.
              </Text>
              <Text fontSize="md" mb={4}>
                This website is intended to be a living record of my
                achievements (and challenges) as I navigate this beautiful gift
                of life. Hope you enjoy learning about my journey as much as I
                enjoy living it.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
