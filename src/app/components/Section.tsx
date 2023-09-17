import {
  Box,
  Center,
  Container,
  ContainerProps,
  Divider,
  Heading,
  HeadingProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionProps extends Omit<ContainerProps, "title"> {
  title?: string | ReactNode;
  subtitle?: string;
  titleHeadingProps?: HeadingProps;
  subtitleHeadingProps?: TextProps;
  withDivider?: boolean;
  children?: ReactNode;
}

const Section = ({
  children,
  title,
  subtitle,
  titleHeadingProps,
  subtitleHeadingProps,
  withDivider,
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
          textAlign="center"
          mb={6}
          color="brand.accent.default"
          textTransform="capitalize"
          {...titleHeadingProps}
        >
          {title}
        </Heading>
      )}
      {subtitle && (
        <Text
          textAlign="center"
          color="brand.accent.400"
          mb={withDivider ? 8 : 14}
          fontSize={["sm", "md", "md"]}
          fontWeight="medium"
          {...subtitleHeadingProps}
        >
          {subtitle}
        </Text>
      )}
      {withDivider && (
        <Center mb={14}>
          <Divider variant="custom" width={["3rem", "3rem", "5rem"]} />
        </Center>
      )}
      {children}
    </Container>
  );
};

export default Section;
