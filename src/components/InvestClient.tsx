"use client";
import dynamic from "next/dynamic";
const InvestInner = dynamic(() => import("./InvestSection"), { ssr: false });
export default function InvestClient() { return <InvestInner />; }
