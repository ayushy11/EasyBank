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

function SecondaryCard({ title, author, img, content }) {
  return (
    <Flex
      flexDirection="column"
      ml={{ sm: "1rem" }}
      mb={{ xs: "1.8rem", sm: "5rem" }}
      bg="white"
      borderTopRadius="0.5rem"
    >
      <Image src={img} h="45%" w="100%" zIndex="10" borderTopRadius="0.5rem" />
      <Flex flexDirection="column" p="1.2rem">
        <Text
          color="secondaryBlue"
          //   textAlign={{ xs: "center", sm: "left" }}
          fontSize="0.8rem"
          py="0.5rem"
          textTransform="capitalize"
        >
          {author}
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
          {title}
        </Heading>
        <Text
          color="secondaryBlue"
          //   textAlign={{ xs: "center", sm: "left" }}
          fontSize={{ xs: "0.8rem", sm: "0.875rem" }}
          py="1rem"
        >
          {content}
        </Text>
      </Flex>
    </Flex>
  );
}

export default SecondaryCard;
