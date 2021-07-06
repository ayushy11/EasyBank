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
import Card from "../common/Card";

function Features() {
  return (
    <Section
      mt={{ xs: "", sm: "-12rem" }}
      bg="secondaryBlue"
      border="2px solid orange"
    //   h="50%"
    >
      <Flex
        flexDirection="column" 
        alignItems={{ xs: "center", sm: "flex-start" }}
        justifyContent="space-between"
        p="3rem"
      >
        <Flex flexDirection="column" p="1rem">
          <Heading>Why choose Easybank?</Heading>
          <Text>
            We leverage open banking to turn your bank account into your
            financial hub. Control your financeslike never before.
          </Text>
        </Flex>
        <Flex p="1rem" flexDirection="column">
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Flex>
    </Section>
  );
}

export default Features;
