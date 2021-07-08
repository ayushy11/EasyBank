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

function Card({ img, title, content }) {
  return (
    <Flex
      flexDirection="column"
      pl="1rem"
      mb={{ xs: "1rem", sm: "4rem" }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      textAlign={{ xs: "center" }}
    >
      <Image src={img} boxSize="4rem" my="2rem" zIndex="10" />
      <Heading
        textAlign={{ xs: "center", sm: "left" }}
        fontWeight="500"
        fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
        // p={{ xs: "0rem", sm: "1rem" }}
        color="primaryBlue"
        fontFamily=""
        mb={{ xs: "1rem", sm: "1.6rem" }}
      >
        {title}
      </Heading>
      <Text
        color="secondaryBlue"
        textAlign={{ xs: "center", sm: "left" }}
        fontSize={{ xs: "0.875rem", sm: "1rem" }}
      >
        {content}
      </Text>
    </Flex>
  );
}

export default Card;
