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
    <Section bg="white">
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
          // border="2px solid brown"
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
          // border="2px solid brown"
          p={{ xs: "1.5rem", sm: "1rem" }}
          flexDirection={{ xs: "column", sm: "row" }}
          width={{ xs: "200%", sm: "100%" }}
          mb={{ xs: "1.3rem" }}
        >
          <SecondaryCard
            title=" Receive money in any currency with no fees"
            content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ... "
            img="images/image-currency.jpg"
            author="By claire robinson"
          />
          <SecondaryCard
            title="Treat yourself without worrying about money"
            content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ... "
            img="images/image-restaurant.jpg"
            author="By wilson hutton"
          />
          <SecondaryCard
            title="Take your Easybank card wherever you go"
            content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. Well even show you ...  "
            img="images/image-plane.jpg"
            author="By wilson hutton"
          />
          <SecondaryCard
            title="Our invite-only Beta accounts are now live!"
            content="After a lot of hard work by the whole team. were excited to launch our closed beta. It's easy to request an invite through the site ... "
            img="images/image-confetti.jpg"
            author="By claire robinson"
          />
        </Flex>
      </Flex>
    </Section>
  );
}

export default Articles;
