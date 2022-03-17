import { createContext, useRef, useState } from "react";

export const Context = createContext();

export default function ContextProvider(props) {
  const [searchVal, setSearchVal] = useState("")
  return (
    <Context.Provider value={{searchVal, setSearchVal}}>{props.children}</Context.Provider>
  );
}
