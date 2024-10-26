"use client";

import { Header } from "@/components/header";
import { useContext, useState } from "react";

const createPost = () => {
  const [createTitle, setcreateTitle] = useState("");
  const [createDesc, setcreateDesc] = useState("");
  const [isTitleNull, setisTitleNull] = useState(false);
  const [isDescNull, setisDescNull] = useState(false);
  const check = () => {
    switch(createTitle){
      case "":
      setisTitleNull(true);
      break;
      default:
        setisTitleNull(false);
    }
    switch (createDesc){
      case '':
        setisDescNull(true);
        break;
      default:
        setisDescNull(false);
    }
     if (createDesc !== "" && createTitle !== "") {
       alert("SUCCESS");
     }
  };

  return (
    <Header>
      <div className="createPost">
        <p>Title</p>
        <textarea
          onChange={(e) => setcreateTitle(e.target.value)}
          name=""
          id=""
        ></textarea>
        {isTitleNull ? <h3 className="neccessary">neccessary</h3> : null}
        <p>Description</p>
        <textarea
          onChange={(e) => setcreateDesc(e.target.value)}
          name=""
          id=""
        ></textarea>
        {isDescNull ? <h3 className="neccessary">neccessary</h3> : null}
        <button onClick={check}>Publish</button>
      </div>
    </Header>
  );
};

export default createPost;
