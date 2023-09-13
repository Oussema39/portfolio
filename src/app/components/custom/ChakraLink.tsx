import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { forwardRef } from "react";

interface ChakraLinkProps extends Omit<LinkProps, "as"> {
  href: string;
}

const ChakraLink = forwardRef<HTMLAnchorElement, ChakraLinkProps>(
  ({ children, ...props }, ref) => (
    <Link
      ref={ref}
      as={NextLink}
      position="relative"
      _after={{
        content: `''`,
        position: "absolute",
        bg: "brand.main",
        height: "1px",
        width: "full",
        left: 0,
        bottom: 0,
        transformOrigin: "left",
        transform: "scaleX(100%)",
        transition: "transform 1s ease",
      }}
      _hover={{
        transform: "scaleX(100%)",
        transformOrigin: "right",
      }}
      {...props}
    >
      {children}
    </Link>
  )
);

ChakraLink.displayName = "ChakraLink";

export default ChakraLink;
