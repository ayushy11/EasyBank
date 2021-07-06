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
        <Section bg="gray" >
          <Flex
        flexDirection="column" 
        alignItems={{ xs: "center", sm: "flex-start" }}
        justifyContent="space-between"
        p="3rem"
      >
        <Flex flexDirection={{xs:"row",sm:"column"}} p="1rem">
          <Heading>Latest Articles</Heading>         
        </Flex>
        <Flex p="1rem" flexDirection="column">
          <SecondaryCard />
          <SecondaryCard />
          <SecondaryCard />
          <SecondaryCard />
        </Flex>
      </Flex>
        </Section>
    )
}

export default Articles
