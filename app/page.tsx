"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";

export default function PosterPage() {
  const posterRef = useRef<HTMLDivElement>(null);

  const savePoster = async () => {
    if (!posterRef.current) return;
    const canvas = await html2canvas(posterRef.current);
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "poster.png";
    link.click();
  };

  const sharePoster = async () => {
    if (!posterRef.current) return;
    if (!navigator.canShare || !navigator.canShare()) {
      alert("Sharing not supported on this device");
      return;
    }

    const canvas = await html2canvas(posterRef.current);
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], "poster.png", { type: "image/png" });
      try {
        await navigator.share({
          files: [file],
          title: "Kelas Adik",
          text: "Check out this poster!",
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Poster */}
      <div
        ref={posterRef}
        className="bg-white shadow-lg rounded-lg p-6 text-center w-[300px] md:w-[500px]"
      >
        <h1 className="text-2xl font-bold mb-4">Kelas Adik</h1>
        <img
          src="/assets/poster/poster.png"
          alt="Poster Kelas"
          className="w-full rounded-lg mb-4"
        />
        <p>Tarikh: 15 Februari 2026</p>
        <p>Tempat: Dewan Serbaguna</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={savePoster}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Poster
        </button>
        <button
          onClick={sharePoster}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Share Poster
        </button>
      </div>
    </div>
  );
}
