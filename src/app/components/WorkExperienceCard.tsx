import {
  Card,
  CardBody,
  Circle,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { WorkExperience } from "../interface/WorkExperience";

const WorkExperienceCard = ({
  jobTitle,
  description,
  companyName,
  startDate,
  endDate,
}: WorkExperience) => {
  return (
    <Card height="full">
      <CardBody display={"flex"} flexDirection={"column"}>
        <VStack spacing={6} mb={6} alignItems={"start"} flex={1}>
          <VStack alignItems={"start"}>
            <Heading as="h3" color="brand.accent.400" fontSize={"24px"}>
              {jobTitle}
            </Heading>
            <Text color="brand.accent.400">{companyName}</Text>
          </VStack>
          <Text color="brand.main.400">{`${startDate.getFullYear()}-${endDate.getFullYear()}`}</Text>
          <Text>{description}</Text>
        </VStack>
        <Circle bg="brand.main.400" justifyContent={"left"} pl={"6"}>
          <Text textAlign={"left"} color={"whiteAlpha.900"}>
            {jobTitle}
          </Text>
        </Circle>
      </CardBody>
    </Card>
  );
};

export default WorkExperienceCard;
