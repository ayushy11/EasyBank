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
       <Flex flexDirection="column">
           <Image src="images/image-currency.png" boxSize="5rem" zIndex="10"/>
           <Text>By claire robinson</Text>
           <Heading>Receive money in any currency with no fees</Heading>
           <Text>
               Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
           </Text>
       </Flex>
    )
}

export default SecondaryCard;

