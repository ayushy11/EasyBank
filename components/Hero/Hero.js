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
  Link,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Section bg="secondaryLight" zIndex="1" px="0rem">
      <Flex
        // border="2px solid purple"
        maxWidth="1440px"
        position="relative"
        height="100%"
        justifyContent="space-between"
        // mb="8rem"
      >
        <Flex
          // border="2px solid red"
          flexDirection="column"
          p="2rem"
          w="67%"
          mt="5rem"
          pl="6rem"
        >
          <Heading
            fontWeight="500"
            fontSize="3rem"
            p="1.5rem"
            color="primaryBlue"
            fontFamily=""
          >
            Next generation digital banking
          </Heading>
          <Text p="1.5rem" color="secondaryBlue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </Text>
          <Button variant="primary" display="block" ml="1.3rem">
            request invite
          </Button>
        </Flex>

        <Flex
          // border="2px solid green"
          //   p="2rem"
          position="relative"
          justifyContent="center"
          w="100%"
          h="100vh"
          zIndex="100"
          overflow="hidden"
          sx={{
            "&:before": {
              content: '""',
              position: "absolute",
              top: "-254px",
              left: "1rem",
              display: "block",
              width: "111%",
              height: "1015px",
              maxHeight: "1034px",
              bgImage: "../images/bg-intro-desktop.svg",
              bgRepeat: "no-repeat",
              bgPosition: "10 -145px",
              bgSize: "cover",
              zIndex: "-10",
            },
          }}
        >
          <Image
            // border="2px solid black"
            src="/images/image-mockups.png"
            position="absolute"
            top="-2.3rem"
            w="100%"
            transform="translate(140px, -84px)"
          />
        </Flex>
      </Flex>
    </Section>
  );
}

export default Hero;
