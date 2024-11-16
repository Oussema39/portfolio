"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Project } from "../interface/Project";
import ColorThief from "colorthief";
import { ExpandIcon } from "../icons/ExpandIcon";
import { useProjectModalContext } from "../context/ProjectModalProvider";

type ProjectCardProps = {
  comingSoon?: boolean;
  fullDetails?: boolean;
} & Project;

const ProjectCard = ({
  comingSoon,
  fullDetails,
  id,
  name,
  description,
  technologies,
  githubRepoLink,
  liveDemoLink,
  imgPath,
}: ProjectCardProps) => {
  const { setSelectedProject, onOpen, isOpen } = useProjectModalContext();

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
        // backgroundColor={`rgba(${imgDominantColor?.join(",")},.8)`}
      >
        <Image
          onLoad={handleOnLoad}
          ref={imgRef}
          src={imgPath ?? "/images/image-preview.svg"}
          alt={`${name}-preview`}
          width={"full"}
          height={60}
          style={{
            objectFit: "contain",
          }}
          // fallback={"/images/image-preview.svg"}
        />
      </CardHeader>
      <CardBody {...(fullDetails && { px: "0" })}>
        {!fullDetails && (
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
        )}

        {comingSoon && (
          <Text fontWeight={"light"} color={"brand.main.400"} fontSize={"sm"}>
            Coming Soon
          </Text>
        )}
        <Text noOfLines={fullDetails ? Number.POSITIVE_INFINITY : 4}>
          {description}
        </Text>
        {fullDetails && technologies && (
          <Box
            display={"flex"}
            gap={2}
            flexWrap={"wrap"}
            alignItems={"baseline"}
            mt={4}
          >
            <Text fontWeight={"bold"}>Technologies:</Text>
            {technologies.map((technology) => (
              <Badge
                variant={"subtle"}
                colorScheme="cyan"
                key={technology}
                userSelect={"none"}
              >
                {technology}
              </Badge>
            ))}
          </Box>
        )}
      </CardBody>
      <CardFooter justifySelf={"end"} {...(fullDetails && { px: "0" })}>
        <HStack display={"flex"}>
          {
            //TODO: change button chevron right to icons not text
          }
          <Button
            size={"sm"}
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
            size={"sm"}
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
            cursor={!githubRepoLink ? "not-allowed !important" : "pointer"}
          >
            GitHub {">"}
          </Button>
          {!fullDetails && (
            <Tooltip label="See full details">
              <IconButton
                justifySelf={"end"}
                variant={"ghost"}
                aria-label="expand"
                icon={<ExpandIcon />}
                onClick={() => {
                  setSelectedProject({
                    id,
                    name,
                    description,
                    githubRepoLink,
                    liveDemoLink,
                    technologies,
                    imgPath,
                  });
                  onOpen();
                }}
              />
            </Tooltip>
          )}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
