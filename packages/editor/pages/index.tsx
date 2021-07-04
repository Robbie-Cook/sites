import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Component, useState } from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Quill"), {
  ssr: false,
});

export default function Home() {
  const [htmlString, setHtmlString] = useState("");

  function updateHtmlString(str: string) {
    setHtmlString(str);
    if (typeof window !== "undefined") {
      localStorage?.setItem("text", str);
    }
  }

  return (
    <div>
      <h1>Markdown editor</h1>
      <p>
        By <a href="https://robbie.digital">Robbie Cook</a>
      </p>
      <div className={styles.container}>
        <DynamicComponentWithNoSSR
          defaultValue={
            typeof window !== "undefined"
              ? localStorage?.getItem("text") ?? ""
              : ""
          }
          onChange={updateHtmlString}
        />
        <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
      </div>
    </div>
  );
}
