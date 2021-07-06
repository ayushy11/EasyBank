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

function Footer() {
  return (
    <Section bg="primaryBlue" height="15rem">
      <Flex color="white">
        <Flex>
          <Image src="images/logo.svg" w="8rem" h="20px" />
        </Flex>
        <Flex>
          <li>
            <Link>About us</Link>
          </li>
        </Flex>
        <Flex>
          <li>
            <Link>Careers</Link>
          </li>
        </Flex>
      </Flex>
      <Flex>
        <Button variant="primary" display="block">
          request invite
        </Button>
      </Flex>
    </Section>
  );
}

export default Footer;
