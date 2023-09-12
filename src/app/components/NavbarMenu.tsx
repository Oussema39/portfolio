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
import { Navbarlinks } from "../utils/config";

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
            <CloseIcon color="brand.main" boxSize="3" />
          ) : (
            <HamburgerIcon color="brand.main" boxSize="5" />
          )
        }
        variant="outline"
      />
      <MenuList>
        <MenuGroup>
          {Navbarlinks.map(({ href, label }) => (
            <MenuItem
              key={href.toString()}
              as={ChakraLink}
              href={href}
              _hover={{
                color: "brand.main",
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
            bg="brand.main"
            color="whiteAlpha.900"
            _hover={{
              bg: "brand.main",
            }}
          >
            Hire Me
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default NavbarMenu;
