import React, { useState } from "react";
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
