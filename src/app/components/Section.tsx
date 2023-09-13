import {
  Container,
  ContainerProps,
  Heading,
  HeadingProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface SectionProps extends Omit<ContainerProps, "title"> {
  title?: string | ReactNode;
  subtitle?: string;
  titleHeadingProps?: HeadingProps;
  subtitleHeadingProps?: TextProps;
  children: ReactNode;
}

const Section = ({
  children,
  title,
  subtitle,
  titleHeadingProps,
  subtitleHeadingProps,
  ...props
}: SectionProps) => {
  return (
    <Container
      maxW="container.xl"
      p={["60px 20px", "60px 20px", "auto"]}
      {...props}
    >
      {title && (
        <Heading
          whiteSpace="nowrap"
          textAlign="center"
          mb={6}
          color="brand.accent"
          textTransform="capitalize"
          {...titleHeadingProps}
        >
          {title}
        </Heading>
      )}
      {subtitle && (
        <Text
          textAlign="center"
          color="gray.600"
          mb={14}
          fontSize={["sm", "md", "md"]}
          fontWeight="medium"
          {...subtitleHeadingProps}
        >
          {subtitle}
        </Text>
      )}
      {children}
    </Container>
  );
};

export default Section;
