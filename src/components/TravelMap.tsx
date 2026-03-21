"use client";
import { useEffect, useRef } from "react";

const CITIES = [
  { lat: 39.9042, lng: 116.4074, name: "北京", name_en: "Beijing",       emoji: "🏯", visited: true  },
  { lat: 31.2304, lng: 121.4737, name: "上海", name_en: "Shanghai",      emoji: "🌆", visited: true  },
  { lat: 22.3193, lng: 114.1694, name: "香港", name_en: "Hong Kong",     emoji: "🌃", visited: true  },
  { lat: 35.6762, lng: 139.6503, name: "东京", name_en: "Tokyo",         emoji: "⛩️", visited: true  },
  { lat: 37.5665, lng: 126.9780, name: "首尔", name_en: "Seoul",         emoji: "🏙️", visited: true  },
  { lat:  1.3521, lng: 103.8198, name: "新加坡", name_en: "Singapore",   emoji: "🦁", visited: true  },
  { lat: 13.7563, lng: 100.5018, name: "曼谷", name_en: "Bangkok",       emoji: "🛕", visited: true  },
  { lat: 25.2048, lng:  55.2708, name: "迪拜", name_en: "Dubai",         emoji: "🏗️", visited: true  },
  { lat: 48.8566, lng:   2.3522, name: "巴黎", name_en: "Paris",         emoji: "🗼", visited: true  },
  { lat: 51.5074, lng:  -0.1278, name: "伦敦", name_en: "London",        emoji: "🎡", visited: true  },
  { lat: 40.7128, lng: -74.0060, name: "纽约", name_en: "New York",      emoji: "🗽", visited: true  },
  { lat: 34.0522, lng:-118.2437, name: "洛杉矶", name_en: "Los Angeles", emoji: "🎬", visited: true  },
];

export default function TravelMap() {
  const ref    = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    // Inject leaflet CSS once
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id   = "leaflet-css";
      link.rel  = "stylesheet";
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

      // Dark minimal tile
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 18,
      }).addTo(map);

      // City markers
      CITIES.forEach(({ lat, lng, name, name_en, emoji }) => {
        const icon = L.divIcon({
          className: "",
          html: `
            <div style="
              display:flex;flex-direction:column;align-items:center;
              cursor:pointer;
              filter:drop-shadow(0 2px 8px rgba(0,0,0,.9));
              transition:transform .2s;
            ">
              <div style="
                font-size:22px;line-height:1;
                animation:mappin .6s cubic-bezier(.34,1.56,.64,1) both;
              ">${emoji}</div>
              <div style="
                margin-top:4px;
                font-family:Inter,sans-serif;font-size:9px;font-weight:600;
                letter-spacing:.04em;
                color:rgba(255,255,255,.7);
                text-shadow:0 1px 4px rgba(0,0,0,1);
                white-space:nowrap;
              ">${name}</div>
            </div>`,
          iconSize: [40, 44], iconAnchor: [20, 44],
        });

        L.marker([lat, lng], { icon }).addTo(map)
          .bindPopup(`
            <div style="font-family:Inter,sans-serif;padding:2px 0;">
              <div style="font-size:20px;margin-bottom:6px;">${emoji}</div>
              <div style="font-size:13px;font-weight:700;color:#fff;letter-spacing:-.01em;">${name}</div>
              <div style="font-size:10px;color:rgba(255,255,255,.45);margin-top:2px;letter-spacing:.04em;">${name_en}</div>
            </div>`, {
            className: "dark-popup",
            offset: [0, -40],
          });
      });

      // Pulse rings on each city
      CITIES.forEach(({ lat, lng }) => {
        const pulse = L.divIcon({
          className: "",
          html: `<div style="
            width:10px;height:10px;border-radius:50%;
            background:rgba(255,255,255,.25);
            box-shadow:0 0 0 0 rgba(255,255,255,.3);
            animation:pulse 2.4s ease-out infinite;
          "></div>`,
          iconSize: [10, 10], iconAnchor: [5, 5],
        });
        L.marker([lat, lng], { icon: pulse, interactive: false, zIndexOffset: -100 }).addTo(map);
      });
    });

    return () => {
      if (mapRef.current) { (mapRef.current as { remove: () => void }).remove(); mapRef.current = null; }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes mappin {
          0%   { transform: translateY(-12px) scale(.6); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(255,255,255,.35); }
          70%  { box-shadow: 0 0 0 12px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        .dark-popup .leaflet-popup-content-wrapper {
          background: rgba(8,8,14,.92);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 12px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 12px 40px rgba(0,0,0,.9);
          padding: 12px 16px;
        }
        .dark-popup .leaflet-popup-content { margin: 0; }
        .dark-popup .leaflet-popup-tip-container { display: none; }
        .leaflet-container { background: #05050a !important; }
        .leaflet-tile-pane { filter: brightness(.45) saturate(.2) contrast(1.2); }
      `}</style>
      <div ref={ref} style={{ width: "100%", height: 300, borderRadius: 12, overflow: "hidden" }} />
    </>
  );
}
