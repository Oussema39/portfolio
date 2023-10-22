import { Box, Flex } from "@chakra-ui/react";
import Section from "../Section";
import FeedbackCard from "../FeedbackCard";
import { feedbacks } from "@/app/data/feedbacks";

const ClientsFeedback = () => {
  return (
    <Box
      id="feedback"
      isolation="isolate"
      position="relative"
      _after={{
        zIndex: -1,
        position: "absolute",
        content: `''`,
        inset: 0,
        backgroundImage:
          "linear-gradient(brand.main.default , brand.accent.default , transparent 60%)",
        borderTopLeftRadius: "full",
        left: ["10", "20"],
        top: 4,
        opacity: 0.05,
      }}
    >
      <Section title="What My Clients Say ?" withDivider>
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={8}>
          {feedbacks.map((feedback) => (
            <Box key={feedback.clientName}>
              <FeedbackCard {...feedback} />
            </Box>
          ))}
        </Flex>
      </Section>
    </Box>
  );
};

export default ClientsFeedback;
