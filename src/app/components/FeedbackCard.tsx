"use client";
import {
  Card,
  CardBody,
  Text,
  Avatar,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { QuotesIcon } from "../icons/QuotesIcon";
import { Feedback } from "../interface/Feedback";

const FeedbackCard = ({ clientName, feedback }: Feedback) => {
  return (
    <Card flexDir="column" alignItems="center" height={"full"}>
      <CardBody textAlign="center" flexDirection={"column"}>
        <VStack height={"full"}>
          <QuotesIcon color="brand.main.default" boxSize={"8"} mb={"8"} />
          <Avatar
            size={["lg", "lg", "md"]}
            outline={"3px solid #ec5b53"}
            mb={"6"}
            name={clientName}
          />
          <Text maxW="30ch" mb={"8"}>
            {`"${feedback}"`}
          </Text>
          <Divider variant="custom" width={"2rem"} mb={"4"} flex={1} />
          <Text>{clientName}</Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
