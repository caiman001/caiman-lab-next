"use client";
import dynamic from "next/dynamic";
const TravelMapInner = dynamic(() => import("./TravelMap"), { ssr: false });
export default function TravelMapClient() { return <TravelMapInner />; }
