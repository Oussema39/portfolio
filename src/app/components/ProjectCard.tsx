"use client";
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
import { Project } from "../interface/Project";

type ProjectCardProps = {
  comingSoon?: boolean;
} & Project;

const ProjectCard = ({
  comingSoon,
  name,
  description,
  githubRepoLink,
  liveDemoLink,
  imgPath,
}: ProjectCardProps) => {
  return (
    <Card
      isolation={"isolate"}
      position={"relative"}
      shadow={"none"}
      display={"flex"}
      flexDirection={"column"}
      height={"full"}
    >
      {/* {comingSoon && (
        <Box
          position="absolute"
          content={`''`}
          inset={0}
          backgroundColor="rgba(255,255,255,0.2)"
          backdropFilter="blur(5px)"
        />
      )} */}
      <CardHeader
        padding={0}
        borderBottom={"1px"}
        borderColor={"gray.200"}
        flexGrow={1}
      >
        <Image
          height={20}
          src={imgPath ?? "/images/image-preview.svg"}
          alt={`${name}-preview`}
          objectFit={"cover"}
          // fallback={"/images/image-preview.svg"}
        />
      </CardHeader>
      <CardBody overflow={"hidden"} flex={1}>
        <Heading
          as={"h2"}
          fontSize={"lg"}
          fontWeight={"bold"}
          color={"brand.accent.400"}
          mb={comingSoon ? "1" : "6"}
          zIndex={1}
        >
          {name}
        </Heading>
        {comingSoon && (
          <Text fontWeight={"light"} color={"brand.main.400"} fontSize={"sm"}>
            Coming Soon
          </Text>
        )}
        <Text>{description}</Text>
      </CardBody>
      <CardFooter justifySelf={"end"}>
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
            isDisabled={!liveDemoLink}
          >
            Live Demo {">"}
          </Button>
          <Button
            _hover={{
              bg: "gray.600",
              cursor: "pointer",
            }}
            bg={"gray.700"}
            color={"whiteAlpha.900"}
            borderRadius={"full"}
            onClick={() => {}}
            as={"a"}
            href={githubRepoLink}
            target="_blank"
            isDisabled={!githubRepoLink}
          >
            GitHub {">"}
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
