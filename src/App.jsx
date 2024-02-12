
import { Header } from "./sections/components/header/Header.jsx"
import { Introduction } from "./sections/introduction/Introduction.jsx"
import { Tech } from "./sections/tech/Tech.jsx"
import { FeaturedProjects } from "./sections/projects/FeaturedProjects.jsx"
import { MyWords } from "./sections/words/MyWords.jsx"
import { Skills } from "./sections/skills/Skills.jsx"
import { LetsTalk } from "./sections/LetsTalk.jsx"
import { Footer } from "./sections/components/footer/Footer.jsx"

function App() {
  

  return (
    <>
      <Header /> 
      <Introduction />
      <Tech />
      <FeaturedProjects />
      {/* <MyWords /> */}
      <Skills />
      <LetsTalk />
      <Footer />
    </>
  )
}

export default App
