import Top from "./Body/Top";
import CatOne from "./Body/CatOne";
import CatTwo from "./Body/CatTwo";
import CatThree from "./Body/CatThree";
import Bottom from "./Body/Bottom";

import { useContext, useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Context } from "../../context/Context";

export default function Body() {
  const {
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
    loading,
    setLoading,
    progress,
    setProgress
  } = useContext(Context);

  useEffect(async () => {
    setProgress(30)
    const res1 = await fetch(`http://localhost:5000/blogs?limit=3&page=1`);
    const data1 = await res1.json();
    setRecent(data1.blogs);

    const res2 = await fetch(
      `http://localhost:5000/blogs?limit=3&category=featured`
    );
    const data2 = await res2.json();
    setFeatured(data2.blogs);

    const res3 = await fetch(
      `http://localhost:5000/blogs?limit=3&category=popular`
    );
    const data3 = await res3.json();
    setPopular(data3.blogs);

    const res4 = await fetch(
      `http://localhost:5000/blogs?limit=8&category=technology`
    );
    const data4 = await res4.json();
    setTechnology(data4.blogs);

    const res5 = await fetch(
      `http://localhost:5000/blogs?limit=4&category=business`
    );
    const data5 = await res5.json();
    setBusiness(data5.blogs);

    const res6 = await fetch(
      `http://localhost:5000/blogs?limit=4&category=world`
    );
    const data6 = await res6.json();
    setWorld(data6.blogs);
    setLoading(false);
    setProgress(100)
  }, []);
  return (
    <main className="main-body">
      <LoadingBar
        color="#0070ff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Top />
      <hr className="hr" />
      <CatOne />
      <hr className="hr" />
      <CatTwo />
      <hr className="hr" />
      <CatThree />
      <Bottom />
    </main>
  );
}
