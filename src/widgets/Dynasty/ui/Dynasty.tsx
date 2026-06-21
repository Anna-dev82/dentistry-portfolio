"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/shared/ui/GlassCard";
import { H2, BodyText } from "@/shared/ui/Typography";

const stats = [
    { label: "Опыта работы", value: "20+ лет" },
    { label: "Довольных пациентов", value: "1000+" },
    { label: "Современные методики", value: "Top Tech" },
    { label: "Семейный подход", value: "Focus" }
];

export const Dynasty = () => {
    return (
        <section className="py-24 px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[40px] overflow-hidden aspect-square bg-slate-200 shadow-2xl"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                        Photo: Family of Doctors
                    </div>
                </motion.div>

                <div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <H2>Преемственность <br /> и профессионализм</H2>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <BodyText className="mt-6">
                            Наша клиника основана на принципах семейного доверия. Мы объединяем 
                            многолетний опыт старшего поколения с инновационными цифровыми 
                            технологиями современности.
                        </BodyText>
                    </motion.div>

                    <div className="mt-12 grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6">
                                    <div className="text-2xl font-bold text-sky-600">{stat.value}</div>
                                    <div className="text-sm text-slate-500 mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};