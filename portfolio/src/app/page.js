"use client";

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";

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

const HeaderSection = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 10rem;
  margin-bottom: 15rem;

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
  flex-direction: row;
  align-items: center;
  gap: 100px;
  margin-bottom: 15rem;

  @media (max-width: 1200px) {
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
  transform: rotate(-10deg);
  width: 400px;
  height: 400px;

  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    margin-bottom: 10rem;
  }
`;

const LogoDivSmall = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
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

const ProjectSection = styled.div`
  margin-bottom: 7rem;
  width: 100%;
`;

const ProjectInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ProjectInfoDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 30%;
`;

const ProjectInfoDivRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Label = styled.p`
  color: inherit;
  font-family: "Nohemi-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  padding: 7px 10px;
  background-color: blue;
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
  font-family: "Nohemi-Regular", Helvetica;
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
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NavBar>
          <LogoDiv>
            <Image
              className={styles.logo}
              src="/saraheddeb.svg"
              alt="Sarah Eddeb Logo"
              width={38}
              height={38}
              priority
            />
            <Logo>Sarah Eddeb</Logo>
          </LogoDiv>
          <NavLinksDiv>
            <NavLinks>Work</NavLinks>
            <NavLinks>About</NavLinks>
            <NavLinks>Contact</NavLinks>
          </NavLinksDiv>
        </NavBar>
      </div>

      <HeaderSection>
        <H2>I'm Sarah Eddeb</H2>
        <HeaderRoleSection>
          <HeaderSubSection>
            <H1>UI/UX Designer</H1>
            <H1>&</H1>
          </HeaderSubSection>
          <H1>Frontend Developer</H1>
        </HeaderRoleSection>
        <MainText>
          I combine the world of design and tech to create seamless digital
          experiences
        </MainText>
      </HeaderSection>

      <ProjectSection>
        <H4>WORK</H4>
        <Project>
          <Thumbnail></Thumbnail>
          <ProjectInfoDiv>
            <ProjectInfoDivLeft>
              <ProjectNameDiv>
                <ProjectName>Quick Camera</ProjectName>
                <Image
                  className={styles.logo}
                  src="/arrow-top-right.svg"
                  alt="Arrow Top Right"
                  width={20}
                  height={20}
                  priority
                />
              </ProjectNameDiv>
              <MainText>
                I combine the world of design, tech, and immersion to create
                seamless immersive digital experiences
              </MainText>
            </ProjectInfoDivLeft>
            <ProjectInfoDivRight>
              <Tags>
                <Label>Visual Identity</Label>
                <Label>UI/UX Design</Label>
              </Tags>
            </ProjectInfoDivRight>
          </ProjectInfoDiv>
        </Project>

        <Project>
          <Thumbnail></Thumbnail>
          <ProjectInfoDiv>
            <ProjectInfoDivLeft>
              <ProjectNameDiv>
                <ProjectName>Bubble Connection App</ProjectName>
                <Image
                  className={styles.logo}
                  src="/arrow-top-right.svg"
                  alt="Arrow Top Right"
                  width={20}
                  height={20}
                  priority
                />
              </ProjectNameDiv>
              <MainText>
                I combine the world of design, tech, and immersion to create
                seamless immersive digital experiences
              </MainText>
            </ProjectInfoDivLeft>
            <ProjectInfoDivRight>
              <Tags>
                <Label>UI/UX Design</Label>
              </Tags>
            </ProjectInfoDivRight>
          </ProjectInfoDiv>
        </Project>

        <Project>
          <Thumbnail></Thumbnail>
          <ProjectInfoDiv>
            <ProjectInfoDivLeft>
              <ProjectNameDiv>
                <ProjectName>Quran Journey</ProjectName>
                <Image
                  className={styles.logo}
                  src="/arrow-top-right.svg"
                  alt="Arrow Top Right"
                  width={20}
                  height={20}
                  priority
                />
              </ProjectNameDiv>
              <MainText>
                I combine the world of design, tech, and immersion to create
                seamless immersive digital experiences
              </MainText>
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
      </ProjectSection>

      <DevCreationsSection>
        <DevCreations>
          <DevCreationsSubHeader>
            <H2>For My Dev Creations</H2>
          </DevCreationsSubHeader>
          <H3>Check Out My Github</H3>
        </DevCreations>
        <GithubRotate>
          <Image
            className={styles.logo}
            src="/github.svg"
            alt="Github Logo"
            layout="intrinsic"
            width={400}
            height={400}
            priority
          />
        </GithubRotate>
      </DevCreationsSection>

      <AboutSection>
        <AboutSectionLeft>
          <H4>ABOUT ME</H4>
          <H3>Sarah's Backstory</H3>
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

      <ContactSection>
        <H3>Let's Connect</H3>
        <H2>saraheddeb@gmail.com</H2>
      </ContactSection>

      <Footer>
        <LogoDivSmall>
          <Image
            className={styles.logo}
            src="/saraheddeb.svg"
            alt="Sarah Eddeb Logo"
            width={26}
            height={26}
            priority
          />
          <LogoSmall>Sarah Eddeb | 2024 ©</LogoSmall>
        </LogoDivSmall>
        <FooterLinks>saraheddeb@gmail.com</FooterLinks>
      </Footer>
    </main>
  );
}
