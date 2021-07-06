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

function Card() {
    return (
       <Flex flexDirection="column">
           <Image src="images/icon-online.svg" boxSize="5rem" zIndex="10"/>
           <Heading>Online Banking</Heading>
           <Text>
               Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
           </Text>
       </Flex>
    )
}

export default Card;
