import { createContext, useRef, useState } from "react";
export const Context = createContext();

export default function ContextProvider(props) {
  const [show, setShow] = useState(false);

  const [recent, setRecent] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [popular, setPopular] = useState([]);
  const [world, setWorld] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [business, setBusiness] = useState([]);

  const [searchVal, setSearchVal] = useState("");

  return (
    <Context.Provider
      value={{
        searchVal,
        setSearchVal,
        recent,
        setRecent,
        featured,
        setFeatured,
        popular,
        setPopular,
        world,
        setWorld,
        technology,
        setTechnology,
        business,
        setBusiness,
        show,
        setShow,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
