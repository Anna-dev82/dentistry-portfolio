"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`
                relative overflow-hidden
                bg-white/40 backdrop-blur-xl 
                border border-white/20 
                shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
                rounded-[32px] 
                ${className}
            `}
        >
            {children}
        </motion.div>
    );
};