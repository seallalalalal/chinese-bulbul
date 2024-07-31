"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function App() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/characteristic");
  }, []);
  return <>root page</>;
}
