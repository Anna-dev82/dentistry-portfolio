"use strict";

import { motion } from "framer-motion";
import { H1, BodyText } from "@/shared/ui/Typography";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-between px-10 overflow-hidden">
            <div className="z-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <H1>
                        Стоматология, которой <br /> 
                        <span className="text-sky-600">доверяют семьями</span>
                    </H1>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <BodyText className="mt-8 max-w-xl">
                        Современное лечение, имплантация и профилактика в комфортной 
                        атмосфере и с вниманием к каждому пациенту.
                    </BodyText>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex gap-4"
                >
                    <button className="px-8 py-4 bg-sky-600 text-white rounded-full font-medium hover:bg-sky-700 transition-colors shadow-lg shadow-sky-200">
                        Записаться на консультацию
                    </button>
                    <button className="px-8 py-4 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-900 rounded-full font-medium hover:bg-white transition-colors">
                        Узнать стоимость
                    </button>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-1/3 aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                {/* Image will be here */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic">
                    Photo: Василий Юрьевич
                </div>
            </motion.div>
        </section>
    );
};