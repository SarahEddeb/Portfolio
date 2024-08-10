"use client";

import React from "react";
import styles from "../../app/page.module.css";
import styled from "styled-components";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HeaderRoleSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 5px;
`;

const H1 = styled.h1`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 96px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    font-size: 80px;
  }

  @media (max-width: 992px) {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 576px) {
    font-size: 45px;
  }

  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

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

const HeaderSubSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderSection = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 7rem;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 10rem;
  }

  @media (max-width: 480px) {
    margin-top: 3rem;
    margin-bottom: 7rem;
  }
`;

const MainTextDiv = styled.div`
  width: 45%;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const MainText = styled.p`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 24px;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Image2 = styled.img``;

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

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 50px;

  margin-bottom: 15rem;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;
const Label = styled.p`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  padding: 7px 10px;
  background-color: blue;
  background-color: rgba(10, 190, 255, 0.25);

  border-radius: 3px;
  transition: all 0.3s ease;

  align-self: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 576px) {
    flex-dirextion: column;
    justify-content: flex-start;

    gap: 10px;
  }
`;

const MarsMedia = () => {
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  return (
    <main className={styles.main}>
      <NavBar />

      <HeaderSection>
        <HeaderRoleSection>
          <HeaderSubSection>
            <H1>Mars</H1>
            <H1>Media</H1>
          </HeaderSubSection>
        </HeaderRoleSection>
        <Info>
          <MainTextDiv>
            <MainText>
              A complete visual identity redesign for a motion control company
              as they transitioned into broader media production. I updated
              their existing logo by enhancing its brutalist elements and
              integrating their signature orange to create a fresh, modern look.
              The project included designing logos, color scheme, 
              business cards, letterheads, email signatures, and website assets.
            </MainText>
          </MainTextDiv>

          <Tags>
            <Label>Visual Identity</Label>
          </Tags>
        </Info>
      </HeaderSection>

      <ImagesDiv>
        <Image src={`${assetPrefix}/mars1.png`} alt="Arrow Top Right" />
        <Image src={`${assetPrefix}/mars2.png`} alt="Arrow Top Right" />
        <Image src={`${assetPrefix}/mars3.png`} alt="Arrow Top Right" />
        <Image src={`${assetPrefix}/mars4.png`} alt="Arrow Top Right" />
      </ImagesDiv>
      <section id="contact" />
      <ContactSection>
        <H3>Let’s Connect</H3>
        <a href="mailto:saraheddeb@gmail.com?subject=Hello&body=I wanted to reach out to you regarding...">
          <H2>saraheddeb@gmail.com</H2>
        </a>
      </ContactSection>

      <Footer />
    </main>
  );
};

export default MarsMedia;
