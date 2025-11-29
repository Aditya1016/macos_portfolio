import { Dock, Navbar, Welcome } from "#components"
import { Safari, Terminal } from "#windows"
import gsap from "gsap"

import { Draggable } from "gsap/all"
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
    </main>
  )
}

export default App