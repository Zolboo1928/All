"use client";

import { createContext, useEffect, useState } from "react";
import Card from "../components/card";
import { Header } from "@/components/header";

const Page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dev.to/api/articles");
      const jsonData = await response.json();
      setData(jsonData); 
    };
    fetchData();
  }, []);
  console.log(data); 
  return (
    <Header>
      <div className="page">
        <div>
          <input type="text" />
          <button className="searchbtn">Search</button>
        </div>
        <div className="board">
          {data.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </Header>
  );
};
export default Page;
// like, comments, reading time
