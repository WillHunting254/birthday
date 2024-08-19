import React from "react";
import trump from "../assets/trump.mp4";
import erdogan from "../assets/erdogan.mp4";
import mj from "../assets/mj.mp4";

export const Messages = () => {
  const text = {
    backgroundColor: "black",
    color: "white",
    padding: 10,
  };
  return (
    <div style={{ paddingTop: 0 }}>
      <h1 style={text}>Doğum günü mesajları</h1>
      <video width={"100%"} controls>
        <source src={erdogan} type="video/mp4" />
      </video>
      <h1 style={text}>Dünya liderlerinle aran iyi galiba</h1>
      <video width={"100%"} height={"100%"} controls>
        <source src={trump} type="video/mp4" />
      </video>
      <h1 style={text}>Adam ölümden dönmüş senin doğum gününü kutlamak için</h1>
      <video width={"100%"} height={"100%"} controls>
        <source src={mj} type="video/mp4" />
      </video>
    </div>
  );
};
