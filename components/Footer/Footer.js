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
    <Section bg="primaryBlue">
      <Flex w="100%">
        <Flex color="white" border="2px solid white" w="50%">
          <Flex flexDirection="column" p="1.8rem">
            <Image src="images/logoWhite.svg" w="8rem" h="20px" />
            <Flex p="1rem">
              <Image src="images/icon-facebook.svg" boxSize="1.6rem" />
              <Image src="images/icon-youtube.svg" boxSize="1.6rem" />
              <Image src="images/icon-twitter.svg" boxSize="1.6rem" />
              <Image src="images/icon-pinterest.svg" boxSize="1.6rem" />
              <Image src="images/icon-instagram.svg" boxSize="1.6rem" />
            </Flex>
          </Flex>
          <Flex
            sx={{
              li: {
                listStyle: "none",
                padding: "0.5rem",
              },
            }}
            flexDirection="column"
            p="1rem"
          >
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </Flex>
          <Flex
            sx={{
              li: {
                listStyle: "none",
                padding: "0.5rem",
              },
            }}
            flexDirection="column"
            p="1rem"
          >
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
          </Flex>
        </Flex>
        <Flex
          color="white"
          flexDirection="column"
          alignItems="flex-end"
          border="2px solid white"
          p="1rem"
          w="50%"
        >
          <Button variant="primary" display="block">
            request invite
          </Button>
          <Text>&#169; Easybank. All Rights Reserved</Text>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Footer;
