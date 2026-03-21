"use client";
import { useEffect } from "react";
export default function JsReady() {
  useEffect(() => { document.body.classList.add("js-ready"); }, []);
  return null;
}
