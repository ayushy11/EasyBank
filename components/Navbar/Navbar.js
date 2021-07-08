import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { Container, Section } from "../library";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function Navbar() {
  const [menuStatus, setMenuStatus] = useState(true);
  const menuVisible = useRef("");

  const showMenu = (e) => {
    setMenuStatus(false);
    menuVisible.current.classList.toggle("visible");
  };
  const hideMenu = (e) => {
    setMenuStatus(true);
    menuVisible.current.classList.toggle("hidden");
  };

  return (
    <Container
      // border="2px solid black"
      h="4rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      zIndex="1000"
    >
      <Flex pl={{ xs: "1rem", sm: "8rem" }} bg="white">
        <Image src="images/logo.svg" w="8rem" h="20px" />
      </Flex>
      <Flex
        ref={menuVisible}
        // border="2px solid black"
        bg="white"
        pl={{ sm: "1rem" }}
        borderRadius="0.5rem"
        boxShadow={{ xs: "lg", sm: "none" }}
        textAlign="center"
        ml="2rem"
        display={{ xs: "none", sm: "flex" }}
        position={{ xs: "absolute", sm: "static" }}
        top={{ xs: "90" }}
        width={{ xs: "16rem", sm: "initial" }}
        listStyleType="none"
        alignItems="center"
        sx={{
          li: {
            listStyle:"none",
            p: "0.8rem",
            "&:hover": {
              borderBottom: "4px",
              borderBottomColor: "#31d35c",
            },
          },
        }}
        fontSize={{ xs: "md", sm: "sm" }}
        color={{ xs: "primaryBlue", sm: "secondaryBlue" }}
        zIndex="10000000"
      >
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Careers</a>
        </li>
      </Flex>
      <Flex pr="8rem">
        <Button variant="primary" display={{ xs: "none", sm: "block" }}>
          request invite
        </Button>
      </Flex>
      <Flex pr="2.5rem" display={{ xs: "flex", sm: "none" }}>
        {menuStatus ? (
          <HamburgerIcon cursor="pointer" w={6} h={6} onClick={showMenu} />
        ) : (
          <CloseIcon cursor="pointer" w={6} h={6} onClick={hideMenu} />
        )}
      </Flex>
    </Container>
  );
}

export default Navbar;
