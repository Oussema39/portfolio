import {
  Card,
  CardBody,
  Circle,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const WorkExperienceCard = (props: Props) => {
  return (
    <Card>
      <CardBody textAlign={"left"}>
        <VStack spacing={6} mb={6} alignItems={"start"}>
          <Heading as="h3" color="brand.accent.400" fontSize={"24px"}>
            UI/UX Designer
          </Heading>
          <Text color="brand.main.400">2015-2018</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            ratione porro cumque optio dolor suscipit consequatur modi tempora.
            Praesentium atque minus incidunt exercitationem consequatur dolores.
            Tempora sequi tenetur id dolor.
          </Text>
        </VStack>
        <Circle bg="brand.main.400" justifyContent={"left"} pl={"6"}>
          <Text textAlign={"left"}>UI/UX Designer</Text>
        </Circle>
      </CardBody>
    </Card>
  );
};

export default WorkExperienceCard;
