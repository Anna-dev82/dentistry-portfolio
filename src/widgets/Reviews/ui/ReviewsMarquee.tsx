"use strict";

import { motion } from "framer-motion";
import { GlassCard } from "@/shared/ui/GlassCard";
import { Star } from "lucide-react";

const reviews = [
    { name: "Анна С.", text: "Лучшая клиника, где я была. Очень внимательный персонал!", rating: 5 },
    { name: "Марк О.", text: "Имплантация прошла быстро и безболезненно. Рекомендую.", rating: 5 },
    { name: "Елена В.", text: "Дочка в восторге от детского кабинета. Больше не боится!", rating: 5 },
    { name: "Сергей П.", text: "Профессиональный подход и современное оборудование.", rating: 5 },
];

export const ReviewsMarquee = () => {
    return (
        <section className="py-24 overflow-hidden bg-slate-50/30">
            <h2 className="text-4xl font-bold mb-16 text-center">Отзывы наших пациентов</h2>
            <div className="flex">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-8 px-4"
                >
                    {[...reviews, ...reviews].map((review, i) => (
                        <GlassCard key={i} className="p-8 min-w-[350px]">
                            <div className="flex gap-1 mb-4 text-amber-400">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                            </div>
                            <p className="text-slate-700 italic">"{review.text}"</p>
                            <div className="mt-6 font-bold text-slate-900">— {review.name}</div>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};