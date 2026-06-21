"use strict";

import { motion } from "framer-motion";
import { GlassCard } from "@/shared/ui/GlassCard";
import { ChevronRight } from "lucide-react";

const services = [
    { title: "Лечение", desc: "Безболезненное сохранение зубов любой сложности" },
    { title: "Имплантация", desc: "Восстановление улыбки за один визит" },
    { title: "Протезирование", desc: "Эстетичные коронки и виниры" },
    { title: "Ортодонтия", desc: "Исправление прикуса в любом возрасте" },
    { title: "Детская стоматология", desc: "Лечение без страха и слез" },
    { title: "Профгигиена", desc: "Здоровье десен и белизна зубов" }
];

export const ServicesSlider = () => {
    return (
        <section className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="px-10 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-5xl font-bold text-slate-900">Наши услуги</h2>
                    <p className="text-slate-500 mt-4 uppercase tracking-[0.2em]">Premium Care</p>
                </div>
            </div>

            <motion.div 
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                className="flex gap-8 px-10 cursor-grab active:cursor-grabbing"
            >
                {services.map((service) => (
                    <motion.div key={service.title} className="min-w-[400px]">
                        <GlassCard className="p-10 h-[300px] flex flex-col justify-between group">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mt-4 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                            
                            <div className="flex items-center text-sky-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Подробнее <ChevronRight className="ml-2 w-4 h-4" />
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};