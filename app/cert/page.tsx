"use client";

import Image from "next/image";
import Link from "next/link";

const certs = [
    {
        src: "/assets/certs/cert1.jpg",
        title: "Sijil Talaqqi Al-Quran",
        desc: "Pengajian talaqqi bersama guru bertauliah sehingga khatam 30 juzuk.",
    },
    {
        src: "/assets/certs/cert2.jpg",
        title: "Sijil Tajwid",
        desc: "Penguasaan hukum tajwid dan makhraj huruf secara bertalaqqi.",
    },
    {
        src: "/assets/certs/cert3.jpg",
        title: "Pengalaman Mengajar",
        desc: "Berpengalaman mengajar kelas kanak-kanak & dewasa secara berkumpulan dan personal.",
    },
];

export default function CertPage() {
    return (
        <main className="min-h-screen bg-emerald-50 p-6">

            {/* Header */}
            <section className="max-w-3xl mx-auto text-center space-y-2 mb-8">
                <h1 className="text-2xl font-bold text-emerald-700">
                    Sijil & Kelayakan Guru
                </h1>
                <p className="text-gray-500 text-sm">
                    Bukti kelayakan & pengalaman mengajar Al-Quran
                </p>

                <Link
                    href="/kelas-mengaji-hannan"
                    className="text-emerald-600 text-sm underline"
                >
                    ← Kembali
                </Link>
            </section>

            {/* Certificates */}
            <section className="max-w-3xl mx-auto grid gap-6">
                {certs.map((cert) => (
                    <div
                        key={cert.title}
                        className="bg-white rounded-2xl shadow-md p-4 space-y-4"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                            <Image
                                src={cert.src}
                                alt={cert.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h2 className="font-semibold text-gray-800">
                                {cert.title}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {cert.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

        </main>
    );
}
