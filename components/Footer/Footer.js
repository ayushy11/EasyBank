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
    <Section bg="primaryBlue" px={{xs:"0rem",sm:"5rem"}}>
      <Flex w="100%" flexDirection={{xs:"column",sm:"row"}}>
        <Flex
          color="white"
          border="2px solid orange"
          w={{xs:"100%",sm:"70%"}}
          px="2rem"
          my="1rem"
          flexDirection={{xs:"column",sm:"row"}}
        >
          <Flex flexDirection="column" p={{xs:"1rem",sm:"1.8rem"}} alignItems="center">
            <Image src="images/logoWhite.svg" w="8rem" h="20px" />
            <Flex py={{xs:"2rem",sm:"3.3rem"}} pb={{xs:"0rem"}}>
              <Image
                src="images/icon-facebook.svg"
                boxSize="1.4rem"
                ml="0.5rem"
              />
              <Image
                src="images/icon-youtube.svg"
                boxSize="1.4rem"
                ml="0.5rem"
              />
              <Image
                src="images/icon-twitter.svg"
                boxSize="1.4rem"
                ml="0.5rem"
              />
              <Image
                src="images/icon-pinterest.svg"
                boxSize="1.4rem"
                ml="0.5rem"
              />
              <Image
                src="images/icon-instagram.svg"
                boxSize="1.4rem"
                ml="0.5rem"
              />
            </Flex>
          </Flex>
          <Flex
            ml={{sm:"2rem"}}
            sx={{
              li: {
                listStyle: "none",
                padding: "0.5rem",
              },
            }}
            flexDirection="column"
            p={{xs:"0rem",sm:"1rem"}}
            alignItems={{xs:"center",sm:"flex-start"}}
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
            p={{xs:"0rem",sm:"1rem"}}
            ml={{sm:"2rem"}}
            alignItems={{xs:"center",sm:"flex-start"}}
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
          alignItems={{xs:"center",sm:"flex-end"}}
          border="2px solid white"
          p={{xs:"0rem",sm:"2.5rem"}}
          w={{xs:"100%",sm:"50%"}}
        >
          <Button variant="primary" display="block">
            request invite
          </Button>
          <Text p="1.5rem" textAlign="center">&#169; Easybank. All Rights Reserved</Text>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Footer;
