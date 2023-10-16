"use client";
import {
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
import React, { useRef, useState } from "react";
import { Project } from "../interface/Project";
import ColorThief from "colorthief";

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
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgDominantColor, setImgDominantColor] = useState<RGB | null>(null);

  const handleOnLoad = () => {
    const colorThief = new ColorThief();
    const img = imgRef.current;
    const result = colorThief.getColor(img, 25);
    setImgDominantColor(result);
  };

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
        height={60}
        padding={0}
        borderBottom={"1px"}
        borderColor={"gray.200"}
        backgroundColor={`rgba(${imgDominantColor?.join(",")},.8)`}
      >
        <Image
          onLoad={handleOnLoad}
          ref={imgRef}
          src={imgPath ?? "/images/image-preview.svg"}
          alt={`${name}-preview`}
          width={"full"}
          height={60}
          objectFit={"contain"}
          // fallback={"/images/image-preview.svg"}
        />
      </CardHeader>
      <CardBody>
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
        <Text noOfLines={4}>{description}</Text>
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
