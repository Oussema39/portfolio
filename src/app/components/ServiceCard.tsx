"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Circle,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ComputerIcon } from "../icons/ComputerIcon";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Service } from "../interface/Service";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card flexDir="column" alignItems="center" py={10} maxW={"md"}>
      <CardHeader justifyContent="center" display="flex">
        <Circle bg="brand.main.100" maxWidth="fit-content">
          <ComputerIcon color="brand.main.default" boxSize="20" />
        </Circle>
      </CardHeader>
      <CardBody textAlign="center" flex={1}>
        <Heading as="h2" mb={6} color="brand.accent.default">
          {service.title}
        </Heading>
        <Text maxW="container.md">{service.description}</Text>
      </CardBody>
      <CardFooter
        cursor="pointer"
        transition="color 0.2s ease"
        _hover={{
          color: "brand.main.default",
        }}
      >
        <Circle border="2px" padding={2} maxWidth="fit-content">
          <ArrowForwardIcon boxSize={6} />
        </Circle>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
