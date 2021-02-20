/** @jsxImportSource @emotion/react */
import React from "react";

/**
 * An image to sit on the hero page
 */
export function HeroImage({ Src }: { Src: JSX.Element }) {
  return (
    <div
      style={{
        display: 'flex',
        height: "100%",
        marginRight: "50px",
        flex: "0 0 400px",
        minWidth: "300px",
      }}
    >s
      <Src />
    </div>
  );
}
