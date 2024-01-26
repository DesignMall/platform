import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./pages/landingPage"
import Services from "./pages/ServicePage"
import Clothing from "./pages/Services/clothing"
import ThreeDCanv from "./pages/Canvas/Three"
import Projects from "./pages/Projects"
export default function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/canvas" element={<ThreeDCanv />} />
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  </>
}
