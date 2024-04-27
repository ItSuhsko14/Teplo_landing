import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Header from "../components/Header/Header";
import AboutProject from "../components/AboutProject/AboutProject";
import Stat from "../components/Stat/Stat";
import Telegram from "../components/Telegram/Telegram";
const IndexPage: React.FC<PageProps> = () => {
  

  return (
    <main className="main">
      <Header />
      <AboutProject />
      <Stat />
      <Telegram />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
