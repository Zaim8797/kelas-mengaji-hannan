"use client";

import { useRef } from "react";


export default function PosterPage() {
  const posterRef = useRef<HTMLDivElement>(null);

  const savePoster = async () => {
    if (!posterRef.current) return;

    try {
      const domtoimage = (await import("dom-to-image-more")).default;
      const dataUrl = await domtoimage.toPng(posterRef.current, {
        quality: 1,
        width: posterRef.current.offsetWidth * 2,
        height: posterRef.current.offsetHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
          width: posterRef.current.offsetWidth + 'px',
          height: posterRef.current.offsetHeight + 'px'
        }
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "kelas-mengaji-poster.png";
      link.click();
    } catch (err) {
      console.error("Failed to save poster:", err);
      alert("Gagal menyimpan poster. Sila cuba lagi.");
    }
  };

  const sharePoster = async () => {
    if (!posterRef.current) return;

    try {
      const domtoimage = (await import("dom-to-image-more")).default;
      const blob = await domtoimage.toBlob(posterRef.current, {
        quality: 1,
        width: posterRef.current.offsetWidth * 2,
        height: posterRef.current.offsetHeight * 2,
        style: {
          transform: 'scale(2)',
          transformOrigin: 'top left',
          width: posterRef.current.offsetWidth + 'px',
          height: posterRef.current.offsetHeight + 'px'
        }
      });

      const file = new File([blob], "kelas-mengaji-poster.png", {
        type: "image/png",
      });

      // Check if sharing is supported
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: "Kelas Mengaji Al-Quran",
            text: "Jom join kelas mengaji!",
          });
        } catch (err) {
          if ((err as Error).name !== "AbortError") {
            console.error("Share failed:", err);
            alert("Gagal berkongsi. Sila cuba lagi.");
          }
        }
      } else {
        // Fallback: Download instead
        const domtoimage = (await import("dom-to-image-more")).default;
        const dataUrl = await domtoimage.toPng(posterRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "kelas-mengaji-poster.png";
        link.click();
        alert("Perkongsian tidak disokong. Poster telah dimuat turun.");
      }
    } catch (err) {
      console.error("Failed to process poster:", err);
      alert("Gagal memproses poster. Sila cuba lagi.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Poster */}
      <div
        ref={posterRef}
        className="bg-white shadow-lg rounded-lg p-6 text-center w-[300px] md:w-[500px]"
      >
        <h1 className="text-2xl font-bold mb-4">Kelas Mengaji Al-Quran</h1>
        <img
          src="/assets/poster/poster.png"
          alt="Poster Kelas"
          className="w-full rounded-lg mb-4"
          crossOrigin="anonymous"
        />
        <p>Tarikh: TBD</p>
        <p>Tempat: Google Meet</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={savePoster}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Simpan Poster
        </button>
        <button
          onClick={sharePoster}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Kongsi Poster
        </button>
      </div>
    </div>
  );
}