import { Box, Flex } from "@chakra-ui/react";
import Section from "../Section";
import FeedbackCard from "../FeedbackCard";

const ClientsFeedback = () => {
  return (
    <Box
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
        opacity: 0.05,
      }}
    >
      <Section
        title="What My Clients Says"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        withDivider
      >
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={8}>
          {[0, 1, 2].map((feedback) => (
            <FeedbackCard key={feedback.toString()} />
          ))}
        </Flex>
      </Section>
    </Box>
  );
};

export default ClientsFeedback;
