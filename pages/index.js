import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { css, useTheme } from "@emotion/react";

import { Box, Typography, Image, Button } from "../components/library";
import { useSome } from "components/Providers/SomeProvider";
import Layout from "components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Articles from "@/components/Articles/Articles";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <Layout title="Easybank">
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </Layout>
  );
  
}
