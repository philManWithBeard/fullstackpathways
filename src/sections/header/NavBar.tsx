import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { FC } from "react";
import Logo from "./logo";

const NavBar = (
  props: JSX.IntrinsicAttributes & { [x: string]: any; children: any }
) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="220px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white">
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle: FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

interface MenuItemProps {
  isLast: boolean;
  to: string;
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  isLast,
  to = "/",
  ...rest
}) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

interface MenuLinksProps {
  isOpen: boolean;
}

const MenuLinks: FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}>
        <MenuItem to="/" isLast={false}>
          How It works
        </MenuItem>
        <MenuItem to="/pathways" isLast={false}>
          Pathways
        </MenuItem>
        <MenuItem to="/tutors" isLast={false}>
          Tutors
        </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button size="sm" rounded="md" colorScheme="teal">
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

interface NavBarContainerProps {}

const NavBarContainer: FC<NavBarContainerProps> = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["teal", "teal", "primary.700", "primary.700"]}
      {...props}>
      {children}
    </Flex>
  );
};

export default NavBar;
