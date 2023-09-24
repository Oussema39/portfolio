import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

type ProjectCardProps = {
  comingSoon?: boolean;
};

const ProjectCard = ({ comingSoon }: ProjectCardProps) => {
  return (
    <Card isolation={"isolate"} position={"relative"} overflow={"hidden"}>
      {comingSoon && (
        <Box
          position="absolute"
          content={`''`}
          inset={0}
          backgroundColor="rgba(255,255,255,0.2)"
          backdropFilter="blur(5px)"
        />
      )}
      <CardHeader padding={0}>
        <Image src="/images/computer.jpg" alt="project-image" />
      </CardHeader>
      <CardBody overflow={"hidden"}>
        <Heading
          as={"h2"}
          fontSize={"lg"}
          fontWeight={"bold"}
          color={"brand.accent.400"}
          mb={comingSoon ? "1" : "6"}
          zIndex={1}
        >
          Password Generator
        </Heading>
        {comingSoon && (
          <Text fontWeight={"light"} color={"brand.main.400"} fontSize={"sm"}>
            Coming Soon
          </Text>
        )}
        <Text>
          This is a simple Next.js web application that generates random
          passwords and provides the ability to refresh for a new password or
          copy the generated password to the clipboard.
        </Text>
      </CardBody>
      <CardFooter>
        <HStack>
          {
            //TODO: change button chevron right to icons not text
          }
          <Button
            _hover={{
              bg: "gray.600",
            }}
            bg={"gray.700"}
            color={"whiteAlpha.900"}
            borderRadius={"full"}
          >
            Live Demo {">"}
          </Button>
          <Button
            _hover={{
              bg: "gray.600",
            }}
            bg={"gray.700"}
            color={"whiteAlpha.900"}
            borderRadius={"full"}
          >
            GitHub {">"}
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
