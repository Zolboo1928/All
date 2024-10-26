"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CardInfo from "../../components/cardInfo";

const Info = () => {
  const [dataOfSingleCard, setdataOfSingleCard] = useState(null);
  const path = usePathname();
  useEffect(() => {
    const dataOf1Card = async () => {
      const response = await fetch(`https://dev.to/api/articles/${path}`);
      const pharsing = await response.json();
      setdataOfSingleCard(pharsing);
    };
    dataOf1Card();
  }, []);
  return <CardInfo dataOfSingleCard={dataOfSingleCard} />;
};
export default Info;
