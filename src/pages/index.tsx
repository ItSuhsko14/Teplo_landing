import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Header from "../components/Header/Header";
import AboutProject from "../components/AboutProject/AboutProject";
import Stat from "../components/Stat/Stat";
const IndexPage: React.FC<PageProps> = () => {
  

  return (
    <main >
      <Header />
      <AboutProject />
      <Stat />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
