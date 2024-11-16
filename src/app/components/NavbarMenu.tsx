"use client";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useBoolean,
} from "@chakra-ui/react";
import ChakraLink from "./custom/ChakraLink";
import { NavbarInnerLinks } from "../utils/config";
import EmailButton from "./EmailButton";

const NavbarMenu = () => {
  const [open, setOpen] = useBoolean();

  return (
    <Menu isOpen={open} onClose={setOpen.off} isLazy>
      <MenuButton
        onClick={() => setOpen.toggle()}
        as={IconButton}
        aria-label="Options"
        icon={
          open ? (
            <CloseIcon color="brand.main.default" boxSize="3" />
          ) : (
            <HamburgerIcon color="brand.main.default" boxSize="5" />
          )
        }
        variant="outline"
      />
      <MenuList>
        <MenuGroup>
          {NavbarInnerLinks.map(({ href, label }) => (
            <MenuItem
              key={href.toString()}
              as={ChakraLink}
              href={`#${href}`}
              _hover={{
                color: "brand.main.default",
              }}
            >
              {label}
            </MenuItem>
          ))}
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem
            ml="3"
            width="fit-content"
            autoFocus
            as={Button}
            textAlign="left"
            bg="brand.main.default"
            color="whiteAlpha.900"
            _hover={{
              bg: "brand.main.default",
            }}
          >
            <EmailButton>Contact</EmailButton>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
