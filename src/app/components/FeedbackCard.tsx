"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  Circle,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Avatar,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ComputerIcon } from "../icons/ComputerIcon";
import { QuotesIcon } from "../icons/QuotesIcon";

const FeedbackCard = () => {
  return (
    <Card flexDir="column" alignItems="center">
      <CardBody textAlign="center" flexDirection={"column"}>
        <VStack>
          <QuotesIcon color="brand.main.default" boxSize={"8"} mb={"8"} />
          <Avatar
            display={"block"}
            size={["lg", "lg", "md"]}
            outline={"3px solid #ec5b53"}
            mb={"6"}
          />
          <Text maxW="30ch" mb={"8"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
            natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            ducimus!
          </Text>
          <Divider variant="custom" width={"2rem"} mb={"4"} />
          <Text>Unknown</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
