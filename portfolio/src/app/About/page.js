"use client";

import React, { Suspense } from "react";
import styles from "../../app/page.module.css";
import styled from "styled-components";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const H2 = styled.h2`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.56px;
  line-height: normal;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const H3 = styled.h3`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 78px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const H4 = styled.h4`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;
  gap: 10px;

  cursor: pointer;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-bottom: 10rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 7rem;
  }
`;

const BodyText = styled.p`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.54px;
  line-height: 35px;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const AboutSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15rem;
  margin-bottom: 15rem;

  transition: all 0.3s ease;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 7rem;

    margin-bottom: 10rem;
  }

  @media (max-width: 480px) {
    margin-top: 7rem;

    margin-bottom: 7rem;
  }
`;
const AboutSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
`;
const AboutSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 992px) {
    margin-top: 2rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
    width: 100%;
  }
`;

const AboutFacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const AboutFactsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const About = () => {
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  return (
    <Suspense fallback={<Loading />}>
      <main className={styles.main}>
        <Loading delay={1500}/>

        <NavBar />

        <AboutSection>
          <AboutSectionLeft>
            <H4>ABOUT ME</H4>
            <H3>Sarah’s Backstory</H3>
            <AboutFactsDiv>
              <AboutFacts>
                <H2>20+</H2>
                <H4>PROJECTS</H4>
              </AboutFacts>
              <AboutFacts>
                <H2>15+</H2>
                <H4>CLIENTS</H4>
              </AboutFacts>
            </AboutFactsDiv>
          </AboutSectionLeft>
          <AboutSectionRight>
            <BodyText>
              I’m Sarah Eddeb, a seasoned creative with a rich background in
              both graphic design and coding. My journey began long before
              university, where I developed my skills in design and development,
              setting the stage for a career that bridges tech and artistry. As
              a computer science graduate, I’ve immersed myself in UI/UX design,
              full-stack web development, and visual identity design. With six
              years of freelancing and a track record of impactful projects, I
              bring a wealth of experience to every challenge. Today, I
              specialize in freelance projects that span UI/UX, frontend
              development, and occasional visual identity work, continually
              refining my craft to deliver innovative and engaging solutions.
            </BodyText>
          </AboutSectionRight>
        </AboutSection>

        <section id="contact" />
        <ContactSection>
          <H3>Let’s Connect</H3>
          <a href="mailto:saraheddeb@gmail.com?subject=Hello&body=I wanted to reach out to you regarding...">
            <H2>saraheddeb@gmail.com</H2>
          </a>
        </ContactSection>

        <Footer />
      </main>
    </Suspense>
  );
};

export default About;
