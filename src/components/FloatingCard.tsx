import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingCardProps {
    color: "blue" | "orange" | "dark" | "light" | "purple";
    icon?: LucideIcon;
    label: string;
    variant?: "default" | "portal";
    className?: string;
    animationClass?: string;
}

const colorStyles = {
    blue: "bg-[#2541FF] text-white dark:bg-blue-600",
    orange: "bg-[#DF7A25] text-white dark:bg-orange-600",
    dark: "bg-[#2B233C] text-[#DF7A25] dark:bg-slate-800 dark:text-orange-400",
    light: "bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    purple: "bg-[#A6ADE0] text-slate-800 dark:bg-[#3B2D50] dark:text-slate-200",
};

export const FloatingCard = ({
    color,
    icon: Icon,
    label,
    variant = "default",
    className,
    animationClass = "animate-float-slow",
}: FloatingCardProps) => {
    const isPortal = variant === "portal";

    return (
        <motion.div
            whileHover={{ scale: 1.05, zIndex: 50, transition: { duration: 0.2, ease: "easeOut" } }}
            className={clsx(
                "flex items-center gap-3 sm:gap-4 rounded-full p-4 sm:p-5 lg:px-8 shadow-xl shadow-[#707A99]/10 dark:shadow-none transition-transform duration-300 w-full hover:shadow-2xl hover:shadow-[#707A99]/20",
                colorStyles[color],
                animationClass,
                isPortal ? "min-w-[260px] lg:min-w-[280px]" : "min-w-[180px] sm:min-w-[220px] lg:min-w-[250px]",
                className
            )}
        >
            {isPortal ? (
                <div className="flex items-center gap-3 w-full overflow-hidden">
                    <div className="w-1.5 h-12 lg:h-16 rounded-full bg-[#E17B27] shrink-0" />
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-white/20 dark:bg-black/20 shrink-0 flex items-center justify-center">
                        <Image
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4"
                            alt="John Doe Avatar"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col text-left py-1 overflow-hidden min-w-0 flex-1">
                        <span className="font-semibold text-sm lg:text-[15px] text-[#2F253C] dark:text-white leading-tight mb-0.5 truncate">{label} - Portal</span>
                        <p className="text-[#636F9D] dark:text-slate-300 text-[10px] lg:text-[11px] leading-tight font-medium max-w-[170px] mix-blend-color-burn dark:mix-blend-normal truncate lg:whitespace-normal">
                            Hey! Could you please review a document for me?
                        </p>
                        <span className="text-[#636F9D]/80 dark:text-slate-400 text-[9px] lg:text-[10px] font-medium mt-1 truncate">MAT-2233 - 2 h ago</span>
                    </div>
                </div>
            ) : (
                <>
                    {Icon && (
                        <div className="shrink-0 flex items-center justify-center">
                            <Icon size={28} className="lg:w-8 lg:h-8" strokeWidth={2} />
                        </div>
                    )}
                    <span className="font-semibold text-lg lg:text-2xl mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">{label}</span>
                </>
            )}
        </motion.div>
    );
};
