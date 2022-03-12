import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Follow from "./components/Follow";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Body from "./components/Home/Body";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Body/>} />
          <Route path=":category" element={<Body />} />
        </Route>
        <Route path="/follow" element={<Follow />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={"Error"} />
      </Routes>
    </>
  );
}
