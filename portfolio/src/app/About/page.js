"use client";

import React from "react";
import styles from "../../app/page.module.css";
import styled from "styled-components";
import Link from "next/link";

const NavBar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.a`
  color: inherit;
  font-family: "Nohemi-Regular", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.48px;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const NavLinks = styled.a`
  color: inherit;
  font-family: "Nohemi-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const HeaderRoleSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 5px;
`;

const H1 = styled.h1`
  color: inherit;
  font-family: "Nohemi-Regular", Helvetica;
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
  font-family: "Nohemi-Regular", Helvetica;
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
  font-family: "Nohemi-Regular", Helvetica;
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
  font-family: "Nohemi-Regular", Helvetica;
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
  width: 30%;

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
  font-family: "Nohemi-Regular", Helvetica;
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

const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease;

  @media (max-width: 700px) {
    margin-bottom: 5rem;
  }
`;

const LogoDivSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 0px;
  }
`;

const LogoSmall = styled.a`
  color: inherit;
  font-family: "Nohemi-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.48px;
  line-height: normal;
  cursor: pointer;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const FooterLinks = styled.a`
  color: inherit;
  font-family: "Nohemi-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  cursor: pointer;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
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
  font-family: "Nohemi-Regular", Helvetica;
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
    margin-bottom: 10rem;
  }

  @media (max-width: 480px) {
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
    <main className={styles.main}>
      <div className={styles.description}>
        <NavBar>
          <Link href="/" passHref>
            <LogoDiv>
              <Image
                className={styles.logo}
                src={`${assetPrefix}/saraheddeb.svg`}
                alt="Sarah Eddeb Logo"
                width={38}
                height={38}
                priority
              />
              <Logo>Sarah Eddeb</Logo>
            </LogoDiv>
          </Link>
          <NavLinksDiv>
            <Link href="/#work" passHref>
              <NavLinks href="#work">Work</NavLinks>
            </Link>
            <Link href="/Abour" passHref>
              <NavLinks href="#about">About</NavLinks>
            </Link>
            <NavLinks href="#contact">Contact</NavLinks>
          </NavLinksDiv>
        </NavBar>
      </div>

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
            I’m Sarah Eddeb, a seasoned creative with a rich background in both
            graphic design and coding. My journey began long before university,
            where I developed my skills in design and development, setting the
            stage for a career that bridges tech and artistry. As a computer
            science graduate, I’ve immersed myself in UI/UX design, full-stack
            web development, and visual identity design. With six years of
            freelancing and a track record of impactful projects, I bring a
            wealth of experience to every challenge. Today, I specialize in
            freelance projects that span UI/UX, frontend development, and
            occasional visual identity work, continually refining my craft to
            deliver innovative and engaging solutions.
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

      

      <Footer>
        <Link href="/" passHref>
          <LogoDivSmall>
            <Image2
              className={styles.logo}
              src={`${assetPrefix}/saraheddeb.svg`}
              alt="Sarah Eddeb Logo"
              width={26}
              height={26}
              priority
            />
            <LogoSmall>Sarah Eddeb | 2024 ©</LogoSmall>
          </LogoDivSmall>
        </Link>
        <a href="mailto:saraheddeb@gmail.com?subject=Hello&body=I wanted to reach out to you regarding...">
          <FooterLinks>saraheddeb@gmail.com</FooterLinks>
        </a>
      </Footer>
    </main>
  );
};

export default About;
