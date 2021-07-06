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
import SecondaryCard from "../common/SecondaryCard";

function Articles() {
  return (
    <Section bg="gray">
      <Flex
        flexDirection="column"
        alignItems={{ xs: "center", sm: "flex-start" }}
        justifyContent="space-between"
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
            Latest Articles
          </Heading>
        </Flex>
        <Flex
          border="2px solid brown"
          p={{xs:"1.5rem",sm:"1rem"}}
          flexDirection={{ xs: "column", sm: "row" }}
          width={{ xs: "200%", sm: "100%" }}
          mb={{ xs: "1.3rem" }}
         
        >
          <SecondaryCard />
          <SecondaryCard />
          <SecondaryCard />
          <SecondaryCard />
        </Flex>
      </Flex>
    </Section>
  );
}

export default Articles;
