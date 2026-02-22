"use client";

import { useTheme } from "next-themes";
import { Scale, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header
            className="absolute top-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 pointer-events-none"
            aria-label="Site Header"
        >
            <div className="flex items-center gap-3 pointer-events-auto">
                <div className="bg-blue-600 p-2 md:p-2.5 rounded-xl text-white shadow-sm shadow-blue-500/20">
                    <Scale size={24} strokeWidth={2.5} aria-hidden="true" />
                </div>
                <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    PaarvaLegal
                </span>
            </div>

            {mounted && (
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="pointer-events-auto p-2.5 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white dark:hover:bg-slate-700 transition-all text-slate-600 dark:text-slate-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {theme === "dark" ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
                </button>
            )}
        </header>
    );
}
