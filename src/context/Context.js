import { createContext, useRef, useState } from "react";
export const Context = createContext();

export default function ContextProvider(props) {

  const [allBlogs] = useState({})
  const [popular] = useState({})
  const [technology] = useState({})

  const [searchVal, setSearchVal] = useState("")
  return (
    <Context.Provider value={{searchVal, setSearchVal, allBlogs, popular, technology}}>{props.children}</Context.Provider>
  );
}
