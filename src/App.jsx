import { useState } from "react"

import { Introduction } from "./sections/Introduction.jsx"
import { Tech } from "./sections/Tech.jsx"
import { FeaturedProjects } from "./sections/FeaturedProjects.jsx"
import { MyWords } from "./sections/MyWords.jsx"
import { Skills } from "./sections/Skills.jsx"
import { LetsTalk } from "./sections/LetsTalk.jsx"
import { Footer } from "./sections/Footer.jsx"

function App() {
  

  return (
    <>
      <Introduction />
      <Tech />
      <FeaturedProjects />
      <MyWords />
      <Skills />
      <LetsTalk />
      <Footer />
    </>
  )
}

export default App
