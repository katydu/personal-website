import React from 'react';

const SectionHeader = ({ number, title }: { number: string, title: string }) => (
    <div className="flex items-center gap-4 mb-8 w-full section-header opacity-0 translate-y-4">
        <span className="text-teal-300 font-mono text-xl md:text-2xl">{number}.</span>
        <h2 className="text-slate-200 font-bold text-2xl md:text-4xl whitespace-nowrap">{title}</h2>
        <div className="h-[1px] w-full max-w-[300px] bg-slate-700 ml-4"></div>
    </div>
);

export default SectionHeader;
