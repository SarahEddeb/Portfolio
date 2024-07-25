"use client";

import Image from "next/image";
import styles from "../app/page.module.css";
import styled from "styled-components";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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

const HeaderSection = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 15rem;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 10rem;
    margin-bottom: 13rem;
  }

  @media (max-width: 480px) {
    margin-top: 12rem;
    margin-bottom: 14rem;
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

const HeaderSubSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderRoleSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  gap: 5px;
`;

const AboutSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
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

const DevCreationsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin-bottom: 15rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;

    gap: 50px;
  }
  @media (max-width: 992px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const DevCreations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  cursor: pointer;
`;

const DevCreationsSubHeader = styled.div`
  padding-left: 10%;

  @media (max-width: 1200px) {
    padding-left: 5px;
  }
`;

const GithubRotate = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25); /* Slightly enlarge the image */
    // transform: rotate(-30deg);
  }
`;

// const Footer = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: row;
//   justify-content: space-between;
//   transition: all 0.3s ease;

//   @media (max-width: 700px) {
//     margin-bottom: 1rem;
//   }

//   @media (max-width: 480px) {
//     align-items: center;
//     justify-content: center;
//   }
// `;

const LogoDivSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const LogoSmall = styled.a`
  color: inherit;
  font-family: "Nohemi", Helvetica;
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
  font-family: "Nohemi", Helvetica;
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
    // font-size: 16px;
    display: none !important;
  }
`;

const ProjectSection = styled.div`
  margin-bottom: 7rem;
  width: 100%;
`;

const ProjectInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
  }
`;

const ProjectInfoDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectBlurbDiv = styled.div`
  width: 70%;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 992px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ProjectInfoDivRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ProjectNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

const ProjectName = styled.h4`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Project = styled.div`
  width: 100%;
  margin-bottom: 5rem;

  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 362px;
  background-color: blue;
  margin-top: 2rem;
  margin-bottom: 2rem;

  border-radius: 10px;
  overflow: hidden;
`;

const ThumbnailQC = styled.div`
  width: 100%;
  height: 362px;
  background-color: #0063f7;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ThumbnailImage = styled.img`
  height: 70%;
  object-fit: contain;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    height: 60%;
  }
  @media (max-width: 992px) {
    height: 55%;
  }

  @media (max-width: 768px) {
    height: 35%;
  }

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the image */
  }
`;

const ThumbnailImageBubble = styled.img`
  width: 100%
  object-fit: contain;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    height: 100%;
    min-width: 100%;
  }

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the image */
  }
`;

const ThumbnailImageQJ = styled.img`
  width: 120%;
  height: auto;

  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    width: 145%;
    height: auto;
  }

  @media (max-width: 562px) {
    height: 100%;
    width: auto;
  }

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the image */
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

export default function Home() {
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  return (
    <main className={styles.main}>
      
      <NavBar />

      <HeaderSection>
        <H2>I’m Sarah Eddeb</H2>
        <HeaderRoleSection>
          <HeaderSubSection>
            <H1>UI/UX Designer</H1>
            <H1>&</H1>
          </HeaderSubSection>
          <H1>Frontend Developer</H1>
        </HeaderRoleSection>
        <MainTextDiv>
          <MainText>
            I combine the world of design and tech to create seamless digital
            experiences
          </MainText>
        </MainTextDiv>
      </HeaderSection>

      <section id="work" />
      <ProjectSection>
        <H4>WORK</H4>
        <Link href="/QuickCamera">
          <Project>
            <ThumbnailQC>
              <ThumbnailImage
                src={`${assetPrefix}/quickcamera_thumbnail.png`}
                alt="Arrow Top Right"
                quality={100}
                unoptimized={true}
              />
            </ThumbnailQC>
            <ProjectInfoDiv>
              <ProjectInfoDivLeft>
                <ProjectNameDiv>
                  <ProjectName>Quick Camera</ProjectName>
                  <Image
                    className={styles.logo}
                    src={`${assetPrefix}/arrow-top-right.svg`}
                    alt="Arrow Top Right"
                    width={20}
                    height={20}
                    priority
                  />
                </ProjectNameDiv>
                <ProjectBlurbDiv>
                  <MainText>
                    A sleek and intuitive interface that transforms the camera
                    rental experience
                  </MainText>
                </ProjectBlurbDiv>
              </ProjectInfoDivLeft>
              <ProjectInfoDivRight>
                <Tags>
                  <Label>Visual Identity</Label>
                  <Label>UI/UX Design</Label>
                </Tags>
              </ProjectInfoDivRight>
            </ProjectInfoDiv>
          </Project>
        </Link>

        <Link href="/BubbleConnection">
          <Project>
            <Thumbnail>
              <ThumbnailImageBubble
                src={`${assetPrefix}/bubble_thumbnail.svg`}
                alt="Arrow Top Right"
                quality={100}
              />
            </Thumbnail>
            <ProjectInfoDiv>
              <ProjectInfoDivLeft>
                <ProjectNameDiv>
                  <ProjectName>Bubble Connection App</ProjectName>
                  <Image
                    className={styles.logo}
                    src={`${assetPrefix}/arrow-top-right.svg`}
                    alt="Arrow Top Right"
                    width={20}
                    height={20}
                    priority
                  />
                </ProjectNameDiv>
                <ProjectBlurbDiv>
                  <MainText>
                    A platform designed to enhance university networking,
                    simplifying connections and interactions for a more
                    connected campus experience.
                  </MainText>
                </ProjectBlurbDiv>
              </ProjectInfoDivLeft>
              <ProjectInfoDivRight>
                <Tags>
                  <Label>UI/UX Design</Label>
                </Tags>
              </ProjectInfoDivRight>
            </ProjectInfoDiv>
          </Project>
        </Link>

        <Link href="/QuranJourney">
          <Project>
            <ThumbnailQC>
              <ThumbnailImageQJ
                src={`${assetPrefix}/quranjourney_thumbnail.png`}
                alt="Arrow Top Right"
                quality={100}
                unoptimized={true}
              />
            </ThumbnailQC>
            <ProjectInfoDiv>
              <ProjectInfoDivLeft>
                <ProjectNameDiv>
                  <ProjectName>Quran Journey</ProjectName>
                  <Image
                    className={styles.logo}
                    src={`${assetPrefix}/arrow-top-right.svg`}
                    alt="Arrow Top Right"
                    width={20}
                    height={20}
                    priority
                  />
                </ProjectNameDiv>
                <ProjectBlurbDiv>
                  <MainText>
                    A web app that transforms Quranic study into an intuitive,
                    organized experience, making every Surah easy to access and
                    explore.
                  </MainText>
                </ProjectBlurbDiv>
              </ProjectInfoDivLeft>
              <ProjectInfoDivRight>
                <Tags>
                  <Label>Visual Identity</Label>
                  <Label>UI/UX Design</Label>
                  <Label>Frontend Dev</Label>
                </Tags>
              </ProjectInfoDivRight>
            </ProjectInfoDiv>
          </Project>
        </Link>
      </ProjectSection>

      <ContactSection>
        <a
          href="https://github.com/SarahEddeb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubRotate>
            <Image
              className={styles.logo}
              src={`${assetPrefix}/github.svg`}
              alt="Github Logo"
              layout="intrinsic"
              width={100}
              height={100}
              priority
              style={{ marginBottom: "3rem" }}
            />
          </GithubRotate>
        </a>
        <H2>For My Dev Creations</H2>
        <a
          href="https://github.com/SarahEddeb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <H3 style={{ marginBottom: "5rem", textAlign: "center" }}>
            Check Out My Github
          </H3>
        </a>
      </ContactSection>

      <section id="about" />
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

      <Footer />
    </main>
  );
}
