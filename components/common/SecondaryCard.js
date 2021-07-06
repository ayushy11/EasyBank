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

function SecondaryCard() {
  return (
    <Flex
      flexDirection="column"
      ml={{ sm: "1rem" }}
      mb={{ xs: "1.8rem", sm: "5rem" }}
      bg="white"
      borderTopRadius="0.5rem"
    >
      <Image
        src="images/image-currency.jpg"
        h="45%"
        w="100%"
        zIndex="10"
        borderTopRadius="0.5rem"
      />
      <Flex flexDirection="column" p="1.2rem">
        <Text
          color="secondaryBlue"
          //   textAlign={{ xs: "center", sm: "left" }}
          fontSize="0.8rem"
          py="0.5rem"
        >
          By claire robinson
        </Text>
        <Heading
          //   textAlign={{ xs: "center", sm: "left" }}
          fontWeight="500"
          fontSize={{ xs: "1rem", sm: "1.1rem" }}
          // p={{ xs: "0rem", sm: "1rem" }}
          color="primaryBlue"
          fontFamily=""
          //   mb={{ xs: "0rem", sm: "0rem" }}
        >
          Receive money in any currency with no fees
        </Heading>
        <Text
          color="secondaryBlue"
          //   textAlign={{ xs: "center", sm: "left" }}
          fontSize={{ xs: "0.8rem", sm: "0.875rem" }}
          py="1rem"
        >
          Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.
        </Text>
      </Flex>
    </Flex>
  );
}

export default SecondaryCard;
