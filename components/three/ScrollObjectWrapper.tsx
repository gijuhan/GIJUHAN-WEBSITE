"use client";

import dynamic from "next/dynamic";

const ScrollObject = dynamic(() => import("./ScrollObject"), {
  ssr: false,
});

export default function ScrollObjectWrapper() {
  return <ScrollObject />;
}
