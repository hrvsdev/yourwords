import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Body from "./components/Home/Body";
import Category from "./components/Home/Category";
import Other from "./components/Other";
import Blog from "./components/Home/Blog/Blog";
import { AnimatePresence } from "framer-motion";
import Search from "./components/Home/Search/Search";
import CategoryBody from "./components/CategoryBody";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Body />} />
            <Route path="/search" element={<Search />} />
            <Route path="category/:category" element={<Category />} />
          </Route>
          <Route path="/category" element={<CategoryBody />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/follow" element={<Other />} />
          <Route path="/contact" element={<Other />} />
          <Route path="/privacy-policy" element={<Other />} />
          <Route path="/terms-of-use" element={<Other />} />
          <Route path="*" element={"Error"} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
