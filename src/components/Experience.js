import React from "react";
import { Box, Heading, Text, Flex, Badge, Link, Image } from "@chakra-ui/react";
import "./Experience.css";
import nintex from "../assets/nintex-logo.png";
import ey from "../assets/EY-logo.png";
import avpn from "../assets/avpn-logo.png";
import SAF from "../assets/SAF.PNG";

function ExperienceCard({
  title,
  company,
  description,
  technologies,
  link,
  date,
  location,
  icon,
}) {
  return (
    <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
      <Box
        bg="#0d1626"
        // bg="#3c3c3c"
        py={6}
        pr={6}
        borderRadius="md"
        boxShadow={"lg"}
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
        color="white"
        mb={4}
        maxW="1000px"
        mx="auto"
        fontFamily="'Courier', monospace"
        letterSpacing={-0.5}
      >
        <Flex alignItems="flex-start">
          <Image
            src={icon}
            alt={company}
            borderRadius="full"
            boxSize="50px"
            border="2px solid white"
            ml={6}
            mr={4}
          />
          <Box flex="1">
            <Flex justify="space-between" align="flex-start" mb={2}>
              <Box>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="bold"
                  mb={1}
                  fontFamily={"Courier"}
                  letterSpacing={-0.5}
                  color="rgb(202, 205, 208)"
                >
                  {title}
                </Heading>
                <Text
                  fontSize="lg"
                  color="teal.400"
                  fontWeight="medium"
                  textAlign="left"
                >
                  {company}
                </Text>
              </Box>
              <Text fontSize="sm" color={"#A0A0B0"} textAlign="right">
                {date}
                <br />
                {location}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Text
          mt={4}
          mb={4}
          fontSize="sm"
          lineHeight="1.6"
          textAlign="left"
          pl={6}
          color={"#A0A0B0"}
        >
          {description}
        </Text>
        <Flex wrap="wrap" pl={6}>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              colorScheme="teal"
              variant="solid"
              mr={2}
              mb={2}
              px={3}
              py={1}
              borderRadius="full"
              fontSize="sm"
              _hover={{
                bg: "teal.500", // Change background color on hover
                color: "white", // Change text color on hover
              }}
              textTransform={"none"}
            >
              {tech}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Link>
  );
}

function Experience() {
  const experienceData = [
    {
      title: "Software Engineer Intern",
      company: "Nintex",
      description:
        "Developing an AI-powered interface that allows business to create custom applications using Skuid.",
      technologies: ["NestJS", "React", "Langchain"],
      link: "https://www.nintex.com/",
      date: "Jun 2024 - Present",
      location: "Bellevue, WA",
      icon: nintex,
    },
    {
      title: "Software Engineer Intern",
      company: "EY",
      description:
        "Designed and built the front-end of phase 1 of an internal EY auditing platform, EY Hive, which included user log-in functionality, client onboarding and settings customization dashboard pages.",
      technologies: ["Angular", "Docker", "PostgreSQL", "Jasmine", "Karma"],
      link: "https://www.ey.com/en_us",
      date: "May 2023 - Aug 2023",
      location: "Bangalore, India",
      icon: ey,
    },
    {
      title: "Digital Transformation Jr. Associate",
      company: "AVPN",
      description:
        "Designed and developed a pilot web-app that allows clients to submit, record and update project proposals for effective capital mobilization in Asia.",
      technologies: ["Softr", "Airtable", "Figma"],
      link: "https://avpn.asia/",
      date: "Jun 2022 - Aug 2022",
      location: "Singapore",
      icon: avpn,
    },
    {
      title: "Intelligence Research Assistant",
      company: "Singapore Armed Forces",
      description:
        "Identified and eliminated potential maritime terrorist threats to Singapore as an Intelligence Researcher in the Singapore Maritime Crisis Centre.",
      technologies: ["Open Source"],

      link: "https://www.mindef.gov.sg/web/portal/mindef/home",
      date: "Jul 2019 - Jul 2021",
      location: "Singapore",
      icon: SAF,
    },
  ];

  return (
    <div className="entireExperience">
      <div className="experience-page">
        <Heading
          as="h2"
          size="2xl"
          mb={8}
          fontFamily={"Courier New"}
          color="rgb(202, 205, 208)"
        >
          EXPERIENCE
        </Heading>
        <div className="experience-grid">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              description={experience.description}
              technologies={experience.technologies}
              link={experience.link}
              date={experience.date}
              location={experience.location}
              icon={experience.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
