"use client";

import Link from "next/link";

const plans = [
    {
        title: "1-to-1 Personal",
        price: "RM40",
        unit: "/ sesi",
        features: [
            "Google Meet (online)",
            "Fokus sepenuhnya pada seorang murid",
            "Ikut tahap & kelajuan anak",
            "Pembetulan tajwid secara terus",
        ],
        highlight: true,
    },
    {
        title: "Pakej Bulanan",
        price: "RM140",
        unit: "/ 4 sesi",
        features: [
            "4 kelas sebulan",
            "Jimat harga",
            "Jadual tetap setiap minggu",
            "Sesuai untuk konsisten belajar",
        ],
    },
];

export default function HargaPage() {
    return (
        <main className="min-h-screen bg-emerald-50 p-6">

            {/* Header */}
            <section className="max-w-4xl mx-auto text-center space-y-2 mb-10">
                <h1 className="text-2xl font-bold text-emerald-700">
                    Yuran Kelas Mengaji
                </h1>
                <p className="text-gray-500 text-sm">
                    Harga berpatutan dengan bimbingan peribadi & fokus
                </p>

                <Link
                    href="/kelas-mengaji-hannan"
                    className="text-emerald-600 text-sm underline"
                >
                    ← Kembali
                </Link>
            </section>

            {/* Pricing cards */}
            <section className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
                {plans.map((plan) => (
                    <div
                        key={plan.title}
                        className={`rounded-2xl p-6 shadow-lg bg-white flex flex-col
              ${plan.highlight ? "ring-2 ring-emerald-500 scale-[1.02]" : ""}
            `}
                    >
                        <h2 className="text-lg font-semibold text-gray-800">
                            {plan.title}
                        </h2>

                        <div className="mt-3">
                            <span className="text-3xl font-bold text-emerald-700">
                                {plan.price}
                            </span>
                            <span className="text-sm text-gray-500">
                                {plan.unit}
                            </span>
                        </div>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-1">
                            {plan.features.map((f) => (
                                <li key={f}>✅ {f}</li>
                            ))}
                        </ul>

                        <Link
                            href="/adik"
                            className="mt-6 block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl transition"
                        >
                            Daftar Sekarang
                        </Link>
                    </div>
                ))}
            </section>

            {/* Footer note */}
            <p className="text-center text-xs text-gray-400 mt-8">
                * Jadual fleksibel • Slot terhad setiap bulan
            </p>

        </main>
    );
}
