import React from "react";
import bfc from "../assets/bfc.png";
import enlighten from "../assets/enlighten.png";
import madridMetro from "../assets/madridMetro.png";
import "./Projects.css";

import {
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Badge,
  Image,
  Button,
} from "@chakra-ui/react";

const Projects = () => {
  // Dummy data for projects
  const projects = [
    {
      title: "Bergen Family Center",
      type: "WEB APP",
      description:
        "A web-app built for a community services nonprofit in Boston called the 'Bergen Family Center'. App allows BFC staff and clients to manage, organize, and register to BFC events. Built using React, Next.js, Vercel and Firebase.",
      technologies: ["ReactJS", "Next.js", "Firebase"],
      link: "#project-1",
      image: bfc, // Replace with your image path
    },
    {
      title: "Enlighten",
      description:
        "An energy audit app to help households save money and the environment. Based on user inputs, the app calculates and displays individual home appliance electricity usage.",
      technologies: ["Angular", "IndexedDB"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    {
      title: "MadridMetroDB",
      description:
        "A database management system for the Madrid Metro, aiming to enhance the efficiency and user experience of the railway system. Models the relationships and dependencies of different entities involved including clients, tickets and metrocards.",
      technologies: ["SQL"],
      link: "#project-1",
      image: madridMetro, // Replace with your image path
    },
    {
      title: "Sudoku",
      description:
        "A program that identifies whether an inputted pgm file represents a solved sudoku puzzle.",
      technologies: ["C"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    {
      title: "Compress or Decompress",
      description:
        "A program that can compress and decompress an image of type ppm.",
      technologies: ["C"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    {
      title: "Image transformer",
      description:
        "A program that performs transformations (ie rotations and reflections) on ppm images.",
      technologies: ["C"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    {
      title: "pgm-file-restorer",
      description:
        "A program that restores a corrupted 'plain' pgm file to a functional 'raw' pgm file.",
      technologies: ["C"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    {
      title: "Gerp",
      description:
        "A program that indexes and searches files for strings. Allows users to search for a word(s) and the program prints the occurrences of the word + the file path.",
      technologies: ["C++"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    {
      title: "reddit-bot",
      description:
        "A reddit-bot with auto-commenting functionality. Python script that scrapes reddit for certain keywords. This example scrapes certain subreddits for the word 'cat' and comments 'I love dogs'.",
      technologies: ["Python", "PRAW"],
      link: "#project-1",
      image: enlighten, // Replace with your image path
    },
    // Add more projects as needed
  ];

  return (
    <div className="entireProjects">
      <Box
        fontFamily={"Courier New"}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="#0f172a"
        color="white"
        p={8}
        px={{ base: 4, md: 8, lg: 16 }} // Adding horizontal padding for responsiveness
      >
        <Heading
          as="h2"
          size="2xl"
          mb={8}
          fontFamily={"Courier New"}
          color="rgb(202, 205, 208)"
        >
          PROJECTS
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4} // Increase the gap between items
          width="100%"
        >
          {projects.map((project, index) => (
            <GridItem
              key={index}
              bg="#0d1626"
              p={5}
              borderRadius="lg"
              boxShadow="lg"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
              transition="transform 0.3s"
              width="90%"
              maxWidth="450px"
              height="auto"
              position="relative"
              mx="auto" // Center the GridItem horizontally
              marginY={1} // Add vertical margin to each GridItem
            >
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="lg"
                mb={2}
                width="100%"
                height="auto"
              />

              <Box p={2}>
                <Heading
                  as="h3"
                  size="lg"
                  mb={3}
                  color="rgb(202, 205, 208)"
                  textAlign={"left"}
                  fontFamily={"Courier New"}
                >
                  {project.title}
                </Heading>
                <Box mb={3} textAlign={"left"}>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      colorScheme="teal"
                      variant="solid"
                      mr={2}
                      mb={2}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      textTransform="none"
                    >
                      {tech}
                    </Badge>
                  ))}
                </Box>
                <Text fontSize="md" mb={4} textAlign={"left"} color={"#A0A0B0"}>
                  {project.description}
                </Text>

                <Button
                  as="a"
                  href={project.link}
                  colorScheme="teal"
                  variant="outline"
                  borderRadius="full"
                  px={4}
                  py={2}
                  _hover={{ bg: "teal.500", color: "white" }}
                >
                  Read more
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Projects;
