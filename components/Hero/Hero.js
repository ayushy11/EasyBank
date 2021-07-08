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

// const HeroContainer = styled.div`
//   display: flex;
//   /* background-image: url("/images/bg-intro-mobile.svg"); */
//   /* background-position: 10 -145px; */
//   background-repeat: no-repeat;
//   background-size: cover;

//   @media only screen and (min-width: 600px) {
//     position: relative;
//     justify-content: center;
//     width: 100%;
//     height: 100vh;
//     /* z-index: 100; */
//     overflow: hidden;

//       background-image: url("/images/bg-intro-desktop.svg");
//       background-position: 10px -145px;
//       background-size: cover;
//       background-repeat: no-repeat;
//       height: 1015px;
//       width: 111%;
//       /* z-index: -10; */
//       max-height: 1034px;
//       position: absolute;
//       top: -254px;
//       left: 1rem;
//     &:before {
//       display: block;
//     }
//   }
// `;

function Hero() {
  return (
    <Section bg="#f9f9f9" zIndex="1" px="0rem">
      <Flex
        // border="2px solid purple"
        flexDirection={{ xs: "column", sm: "row-reverse" }}
        maxWidth="1440px"
        position="relative"
        height="100%"
        justifyContent={{ xs: "center", sm: "space-between" }}
        // mb="8rem"
      >
        <Flex
          // border="2px solid green"
          position="relative"
          justifyContent="center"
          w="100%"
          h={{ xs: "50vh", sm: "100vh" }}
          zIndex="100"
          overflow="hidden"
          sx={{
            "@media (min-width: 700px) ": {
              "&:before": {
                bgImage: "../images/bg-intro-desktop.svg",
                content: '""',
                position: "absolute",
                top: "-254px",
                left: "1rem",
                display: "block",
                width: "111%",
                height: "1015px",
                maxHeight: "1034px",
                bgRepeat: "no-repeat",
                bgPosition: "10 -145px",
                bgSize: "cover",
                zIndex: "-10",
              },
            },
            "@media (max-width: 700px) ": {
              "&:before": {
                bgImage: "../images/bg-intro-mobile.svg",
                content: "''",
                position: "absolute",
                display: "block",
                width: "100%",
                height: "320px",
                maxHeight: "500px",
                bgRepeat: "no-repeat",
                bgPosition: "center -7px",
                bgSize: "100% 100%",
                zIndex: "-10",
              },
            },
          }}
        >
          <Image
            // border="2px solid black"
            src="/images/image-mockups.png"
            position="absolute"
            top="-2.3rem"
            w="100%"
            transform={{
              xs: "translate(0px, -90px)",
              sm: "translate(140px, -84px)",
            }}
          />
        </Flex>

        <Flex
          // border="2px solid red"
          flexDirection="column"
          alignItems={{ xs: "center", sm: "flex-start" }}
          // justifyContent="center"
          p="2rem"
          w={{ xs: "100%", sm: "67%" }}
          mt={{ sm: "5rem" }}
          pl={{ xs: "1.8rem", sm: "6rem" }}
        >
          <Heading
            textAlign={{ xs: "center", sm: "left" }}
            fontWeight="500"
            fontSize={{ xs: "2rem", sm: "3rem" }}
            p={{ xs: "0rem", sm: "1.5rem" }}
            color="primaryBlue"
            fontFamily=""
          >
            Next generation digital banking
          </Heading>
          <Text
            textAlign={{ xs: "center", sm: "left" }}
            p={{ xs: "0.8rem", sm: "1.5rem" }}
            color="secondaryBlue"
            fontSize={{ xs: "0.875rem", sm: "1rem" }}
          >
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </Text>
          <Button variant="primary" display="block" ml="1.3rem">
            request invite
          </Button>
        </Flex>
      </Flex>
    </Section>
  );
}

export default Hero;
