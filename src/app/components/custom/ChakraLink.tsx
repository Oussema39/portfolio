import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { forwardRef } from "react";

interface ChakraLinkProps extends Omit<LinkProps, "as"> {
  href: string;
}

const ChakraLink = forwardRef<HTMLAnchorElement, ChakraLinkProps>(
  ({ children, ...props }, ref) => (
    <Link ref={ref} as={NextLink} {...props}>
      {children}
    </Link>
  )
);

ChakraLink.displayName = "ChakraLink";

export default ChakraLink;
