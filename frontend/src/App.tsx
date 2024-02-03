import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Landing from "./pages/landingPage"
import Services from "./pages/ServicePage"
import Clothing from "./pages/Services/clothing"
import ThreeDCanv from "./pages/Canvas/3D/Three"
import Projects from "./pages/Projects"
import Sport from "./pages/Services/sport"
import Clubs from "./pages/Services/teams/clubs"
import Nationals from "./pages/Services/teams/national"
import PlayerChoice from "./pages/Canvas/2D/team"
export default function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/canvas" element={<ThreeDCanv />} />
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/sport/:category?" element={<Sport />}>
          <Route index element={<Navigate to='/sport/:category?/clubs' />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="national" element={<Nationals />} />
          <Route path="playerChoice" element={<PlayerChoice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
