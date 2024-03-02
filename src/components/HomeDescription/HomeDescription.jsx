import s from "./style.module.css";
import React from "react";
import Typewriter from "typewriter-effect";

export function HomeDescription({ description }) {
  return (
    <div className={s.container}>
      <Typewriter
        options={{
          strings: description,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
