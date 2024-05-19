import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header/Header";
import AboutProject from "../components/AboutProject/AboutProject";
import Stat from "../components/Stat/Stat";
import HowWeToWork from "../components/HowWeToWork/HowWeToWork";
import Telegram from "../components/Telegram/Telegram";
import Detailed from "../components/Detailed/Detailed";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main">
      <GlobalStyle />
      <Header />
      <AboutProject />
      <Stat />
      <HowWeToWork />
      <Telegram />
      <Detailed />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
