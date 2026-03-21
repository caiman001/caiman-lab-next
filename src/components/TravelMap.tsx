"use client";
import { useEffect, useRef } from "react";

const CITIES = [
  [39.9042,116.4074,"北京 Beijing","🏯"],
  [31.2304,121.4737,"上海 Shanghai","🌆"],
  [22.3193,114.1694,"香港 Hong Kong","🌃"],
  [35.6762,139.6503,"东京 Tokyo","⛩️"],
  [37.5665,126.9780,"首尔 Seoul","🏙️"],
  [1.3521,103.8198,"新加坡 Singapore","🦁"],
  [13.7563,100.5018,"曼谷 Bangkok","🛕"],
  [25.2048,55.2708,"迪拜 Dubai","🏗️"],
  [48.8566,2.3522,"巴黎 Paris","🗼"],
  [51.5074,-0.1278,"伦敦 London","🎡"],
  [40.7128,-74.0060,"纽约 New York","🗽"],
  [34.0522,-118.2437,"洛杉矶 Los Angeles","🎬"],
] as const;

export default function TravelMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    import("leaflet").then((L) => {
      // Fix default icon paths
      const DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34],
      });
      L.Marker.prototype.options.icon = DefaultIcon;

      const map = L.map(ref.current!, {
        center: [30, 60], zoom: 2, zoomControl: false,
        attributionControl: false, scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        subdomains: "abcd", maxZoom: 18,
      }).addTo(map);

      CITIES.forEach(([lat, lng, name, emoji]) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="font-size:16px;line-height:1;text-shadow:0 1px 6px rgba(0,0,0,.8);">${emoji}</div>`,
          iconSize: [20, 20], iconAnchor: [10, 10],
        });
        L.marker([lat, lng], { icon }).addTo(map)
          .bindPopup(`<div style="font-size:12px;font-family:Inter,sans-serif;color:#e8e8e8;">${name}</div>`, {
            className: "dark-popup",
          });
      });
    });
    return () => {
      if (mapRef.current) {
        (mapRef.current as { remove: () => void }).remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <style>{`.dark-popup .leaflet-popup-content-wrapper{background:#111;border:1px solid #1c1c1c;box-shadow:0 8px 24px rgba(0,0,0,.7)}.dark-popup .leaflet-popup-tip{background:#111}`}</style>
      <div ref={ref} style={{ width: "100%", height: 260, borderRadius: 8, overflow: "hidden" }} />
    </>
  );
}
