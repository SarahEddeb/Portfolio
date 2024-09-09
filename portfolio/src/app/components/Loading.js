"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 576px) {
    height: 110vh;
  }
`;

const LoadingGif = styled.img`
  width: 300px; // Adjust size as needed
  height: 300px; // Adjust size as needed
  position: absolute; /* Position absolute to overlap the GIF */

  @media (max-width: 992px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 576px) {
    width: 150px;
    height: 150px;
  }
`;

const LoadingText = styled.p`
  color: white;
  font-family: "Nohemi", Helvetica;
  font-size: 100px;
  font-weight: 400;

  @media (max-width: 992px) {
    font-size: 75px;
  }

  @media (max-width: 576px) {
    font-size: 50px;
  }
`;

// Wrapper to contain the GIF and text
const LoadingWrapper = styled.div`
  position: relative; /* Position relative to allow absolute positioning of text */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    padding-bottom: 120px;
  }
`;

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Minimum 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <LoadingContainer>
      <LoadingWrapper>
        <LoadingGif
          src={`${assetPrefix}/saraheddeb_logoanimation.gif`}
          alt="Loading..."
        />

        <LoadingText>Loading</LoadingText>
      </LoadingWrapper>
    </LoadingContainer>
  );
};

export default Loading;
