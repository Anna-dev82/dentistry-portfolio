"use strict";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const BeforeAfterSlider = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = "touches" in e ? e.touches[0].clientX : e.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPos(Math.max(0, Math.min(100, position)));
    };

    return (
        <section className="py-24 px-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Результаты лечения</h2>
            <div 
                ref={containerRef}
                onMouseMove={handleMove}
                onTouchMove={handleMove}
                className="relative w-full max-w-4xl mx-auto h-[500px] rounded-[40px] overflow-hidden cursor-col-resize select-none shadow-2xl"
            >
                <div className="absolute inset-0 bg-slate-200">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic font-serif text-4xl">ПОСЛЕ</div>
                </div>
                
                <motion.div 
                    className="absolute inset-0 bg-slate-300"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-slate-500 italic font-serif text-4xl">ДО</div>
                </motion.div>

                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-sky-600 rounded-full" />
                            <div className="w-1 h-1 bg-sky-600 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};