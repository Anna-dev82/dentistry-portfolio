"use strict";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
    { title: "Консультация", desc: "Знакомство и первичный осмотр" },
    { title: "Диагностика", desc: "3D-снимки и детальный анализ" },
    { title: "План лечения", desc: "Согласование этапов и стоимости" },
    { title: "Лечение", desc: "Бережное проведение процедур" },
    { title: "Контроль", desc: "Гарантия долговечного результата" }
];

export const TreatmentTimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <section ref={containerRef} className="py-24 max-w-3xl mx-auto px-10">
            <h2 className="text-4xl font-bold mb-20 text-center">Путь к здоровой улыбке</h2>
            <div className="relative">
                <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-slate-200" />
                <motion.div 
                    className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-sky-500 origin-top"
                    style={{ scaleY }}
                />

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-14"
                        >
                            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-slate-200 z-10 flex items-center justify-center font-bold text-slate-400">
                                {index + 1}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                            <p className="text-slate-500 mt-2 text-lg">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};