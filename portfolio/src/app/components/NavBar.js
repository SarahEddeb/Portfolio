"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import styles from "../../app/page.module.css";
import Link from "next/link";

const NavBarDiv = styled.div`
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

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Logo = styled.a`
  color: inherit;
  font-family: "Nohemi", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.48px;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 550px) {
    display: none !important;
  }
`;

const NavLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const NavLinks = styled.a`
  color: inherit;
  font-family: "Nohemi", Helvetica;
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


const NavBar = () => {
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  return (
    <div className={styles.description}>
      <NavBarDiv>
        <Link href="/">
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
          <Link href="/About">
            <NavLinks href="#about">About</NavLinks>
          </Link>
          <NavLinks href="#contact">Contact</NavLinks>
        </NavLinksDiv>
      </NavBarDiv>
    </div>
  );
};

export default NavBar;
