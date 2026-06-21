"use strict";

import { ReactNode } from "react";

interface TextProps {
    children: ReactNode;
    className?: string;
}

export const H1 = ({ children, className = "" }: TextProps) => (
    <h1 className={`text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] ${className}`}>
        {children}
    </h1>
);

export const H2 = ({ children, className = "" }: TextProps) => (
    <h2 className={`text-4xl md:text-5xl font-bold tracking-tight leading-tight ${className}`}>
        {children}
    </h2>
);

export const BodyText = ({ children, className = "" }: TextProps) => (
    <p className={`text-lg md:text-xl text-slate-500 leading-relaxed ${className}`}>
        {children}
    </p>
);