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
    <Section bg="secondaryLight" zIndex="1">
      <Flex position="relative" width="100%" >
        <Flex flexDirection="column" p="2rem" w="50%" mt="4rem">
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
          <Button variant="primary" display="block">
            request invite
          </Button>
        </Flex>

        <Flex
        //   p="2rem"
          position="absolute"
          display="block"
          top="-258px"
          left="31rem"
          w="80%"
          zIndex="0"
          border="2px solid green"
          overflow="hidden"
          h="100%"
        >
          <Image
            src="/images/bg-intro-desktop.svg"
            h="50rem"
            w="240rem"
            border="2px solid black"
          />
        </Flex>
      </Flex>
    </Section>
  );
}

export default Hero;
