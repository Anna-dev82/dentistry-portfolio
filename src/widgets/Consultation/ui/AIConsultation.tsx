"use strict";

import { GlassCard } from "@/shared/ui/GlassCard";
import { Send } from "lucide-react";

export const AIConsultation = () => {
    return (
        <section className="py-24 px-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-5xl font-bold leading-tight">Не уверены, <br /> с чего начать?</h2>
                    <p className="mt-6 text-xl text-slate-500">
                        Опишите вашу ситуацию, и наш интеллектуальный помощник 
                        подберет нужного специалиста и сориентирует по этапам.
                    </p>
                </div>

                <GlassCard className="h-[500px] flex flex-col p-0">
                    <div className="p-6 border-b border-white/20 bg-white/20 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="font-medium">AI Assistant Dental</span>
                        </div>
                    </div>
                    
                    <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                        <div className="bg-sky-100/50 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                            Здравствуйте! Какая проблема вас беспокоит?
                        </div>
                        <div className="bg-white/50 p-4 rounded-2xl rounded-tr-none ml-auto max-w-[80%] border border-white/40">
                            Здравствуйте, я хотел бы узнать про имплантацию.
                        </div>
                        <div className="bg-sky-100/50 p-4 rounded-2xl rounded-tl-none max-w-[80%]">
                            Имплантация — одно из наших ведущих направлений. У нас есть...
                        </div>
                    </div>

                    <div className="p-6 bg-white/30 backdrop-blur-lg flex gap-3">
                        <input 
                            placeholder="Напишите ваш вопрос..." 
                            className="flex-1 bg-white/50 border-none rounded-full px-6 focus:ring-2 focus:ring-sky-500 outline-none"
                        />
                        <button className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center text-white">
                            <Send size={18} />
                        </button>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};