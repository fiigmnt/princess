import React from "react";
import Head from "next/head";

export default function Video() {
  return (
    <>
      <Head>
        <title>PRINCESS SETS</title>
      </Head>
      <div style={{ backgroundColor: "black" }}>
        <h1 style={{ color: "white", textAlign: "center", padding: 0, margin: 0 }}>NEWSCAFE</h1>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <video src="/video/newscafe.mp4" controls />
        </div>
      </div>
    </>
  );
}
