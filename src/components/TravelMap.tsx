"use client";
import { useEffect, useRef } from "react";

const CITIES = [
  { lat: 39.9042, lng: 116.4074, name: "北京", name_en: "Beijing",       emoji: "🏯" },
  { lat: 31.2304, lng: 121.4737, name: "上海", name_en: "Shanghai",      emoji: "🌆" },
  { lat: 22.3193, lng: 114.1694, name: "香港", name_en: "Hong Kong",     emoji: "🌃" },
  { lat: 35.6762, lng: 139.6503, name: "东京", name_en: "Tokyo",         emoji: "⛩️" },
  { lat: 37.5665, lng: 126.9780, name: "首尔", name_en: "Seoul",         emoji: "🏙️" },
  { lat:  1.3521, lng: 103.8198, name: "新加坡", name_en: "Singapore",   emoji: "🦁" },
  { lat: 13.7563, lng: 100.5018, name: "曼谷", name_en: "Bangkok",       emoji: "🛕" },
  { lat: 25.2048, lng:  55.2708, name: "迪拜", name_en: "Dubai",         emoji: "🏗️" },
  { lat: 48.8566, lng:   2.3522, name: "巴黎", name_en: "Paris",         emoji: "🗼" },
  { lat: 51.5074, lng:  -0.1278, name: "伦敦", name_en: "London",        emoji: "🎡" },
  { lat: 40.7128, lng: -74.0060, name: "纽约", name_en: "New York",      emoji: "🗽" },
  { lat: 34.0522, lng:-118.2437, name: "洛杉矶", name_en: "Los Angeles", emoji: "🎬" },
];

export default function TravelMap() {
  const ref    = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css"; link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    import("leaflet").then((L) => {
      const map = L.map(ref.current!, {
        center: [28, 40], zoom: 2,
        zoomControl: false, attributionControl: false,
        scrollWheelZoom: false, dragging: true,
        minZoom: 1, maxZoom: 8,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 18,
      }).addTo(map);

      CITIES.forEach(({ lat, lng, name, name_en, emoji }) => {
        const icon = L.divIcon({
          className: "",
          html: `
            <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;filter:drop-shadow(0 2px 6px rgba(0,0,0,.9));">
              <div style="font-size:20px;line-height:1;">${emoji}</div>
              <div style="margin-top:4px;font-family:Inter,sans-serif;font-size:10px;font-weight:600;letter-spacing:.04em;color:rgba(255,255,255,.85);text-shadow:0 1px 4px rgba(0,0,0,1);white-space:nowrap;">${name}</div>
            </div>`,
          iconSize: [40, 40], iconAnchor: [20, 40],
        });

        L.marker([lat, lng], { icon }).addTo(map)
          .bindPopup(`
            <div style="font-family:Inter,sans-serif;padding:2px 0;">
              <div style="font-size:18px;margin-bottom:5px;">${emoji}</div>
              <div style="font-size:13px;font-weight:700;color:#fff;letter-spacing:-.01em;">${name}</div>
              <div style="font-size:10px;color:rgba(255,255,255,.45);margin-top:2px;letter-spacing:.04em;">${name_en}</div>
            </div>`, {
            className: "dark-popup",
            offset: [0, -38],
          });
      });
    });

    return () => {
      if (mapRef.current) { (mapRef.current as { remove: () => void }).remove(); mapRef.current = null; }
    };
  }, []);

  return (
    <>
      <style>{`
        .dark-popup .leaflet-popup-content-wrapper {
          background: rgba(8,8,14,.92); backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.14); border-radius: 12px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 12px 40px rgba(0,0,0,.9);
          padding: 12px 16px;
        }
        .dark-popup .leaflet-popup-content { margin: 0; }
        .dark-popup .leaflet-popup-tip-container { display: none; }
        .leaflet-container { background: #080808 !important; }
        .leaflet-tile-pane { filter: brightness(.92) saturate(.32) contrast(1.18); }
      `}</style>
      <div ref={ref} style={{ width: "100%", height: 300, borderRadius: 12, overflow: "hidden" }} />
    </>
  );
}
