"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import styles from "../../app/page.module.css";
import Link from "next/link";

const FooterDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease;

  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 550px) {
    align-items: center;
    justify-content: center;
  }
`;

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

  @media (max-width: 550px) {
    display: none !important;
  }
`;

const Footer = () => {
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  return (
    <FooterDiv>
      <Link href="/">
        <LogoDivSmall>
          <Image
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
      <FooterLinks href="mailto:saraheddeb@gmail.com?subject=Hello&body=I wanted to reach out to you regarding...">
        saraheddeb@gmail.com
      </FooterLinks>
    </FooterDiv>
  );
};

export default Footer;
