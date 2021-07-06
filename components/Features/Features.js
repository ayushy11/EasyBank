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
      bg="lightGray"
      border="2px solid orange"
      //   h="50%"
    >
      <Flex
        flexDirection="column"
        alignItems={{ xs: "center", sm: "flex-start" }}
        justifyContent="space-between"
        // p="3rem"
      >
        <Flex
          flexDirection="column"
          p="1rem"
          w={{ xs: "180%", sm: "60%" }}
          mt="4rem"
          alignItems={{ xs: "center", sm: "flex-start" }}
          border="2px solid brown"
        >
          <Heading
            textAlign={{ xs: "center", sm: "left" }}
            fontWeight="500"
            fontSize={{ xs: "2rem", sm: "2.2rem" }}
            p={{ xs: "0rem", sm: "1rem" }}
            color="primaryBlue"
            fontFamily=""
          >
            Why choose Easybank?
          </Heading>
          <Text
            textAlign={{ xs: "center", sm: "left" }}
            p={{ xs: "0.8rem", sm: "0.5rem" }}
            color="secondaryBlue"
            fontSize={{ xs: "0.875rem", sm: "1rem" }}
            ml="0.5rem"
          >
            We leverage open banking to turn your bank account into your
            financial hub. Control your financeslike never before.
          </Text>
        </Flex>
        <Flex
          border="2px solid brown"
          p="1rem"
          flexDirection={{ xs: "column", sm: "row" }}
          width={{ xs: "200%", sm: "100%" }}
          mb={{xs:"1.3rem"}}
        >
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
