"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";


const contacts = [
    {
        label: "📱 WhatsApp",
        href: "https://wa.me/601126160844",
        color: "bg-green-500 hover:bg-green-600",
        external: true,
    },
    {
        label: "✈️ Telegram",
        href: "https://t.me/hannanadhir4h",
        color: "bg-sky-500 hover:bg-sky-600",
        external: true,
    },
    {
        label: "📜 Sijil & Kelayakan",
        href: "/cert",
        color: "bg-gray-800 hover:bg-gray-900",
    },
];

export default function AdikMengajiPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center p-6">
            <section className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8 space-y-6 text-center">

                {/* Header */}
                <header className="space-y-2">
                    <h1 className="text-2xl font-bold text-emerald-700">
                        Kelas Mengaji Al-Quran
                    </h1>

                    <p className="text-gray-500 text-sm">Ustazah Hannan</p>

                    <p className="text-gray-400 text-xs">
                        Belajar mengaji dengan lancar bersama bimbingan peribadi
                    </p>
                </header>

                {/* Dynamic Buttons */}
                <div className="flex flex-col gap-4 pt-4">
                    {contacts.map((item) => (
                        <Button
                            key={item.label}
                            asChild
                            className={`w-full ${item.color}`}
                        >
                            <Link
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className="w-full"
                            >
                                {item.label}
                            </Link>
                        </Button>
                    ))}
                </div>

                {/* Footer */}
                <footer className="text-xs text-gray-400 pt-4 border-t">
                    📍 Google Meet <br />
                    ⏰ Isnin – Jumaat | 8pm – 10pm
                </footer>

            </section>
        </main>
    );
}
