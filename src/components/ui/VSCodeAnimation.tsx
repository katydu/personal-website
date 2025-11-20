import React, { useState, useEffect, useMemo } from 'react';

const VSCodeAnimation = () => {
    const [visibleCount, setVisibleCount] = useState(0);

    const tokens = useMemo(() => [
        { text: 'def', color: 'text-pink-400' },
        { text: ' ', color: '' },
        { text: 'intro', color: 'text-yellow-300' },
        { text: '():', color: 'text-slate-400' },
        { text: '\n    ', color: '' },
        { text: 'user', color: 'text-teal-300' },
        { text: ' = ', color: 'text-slate-400' },
        { text: '"Min Ting"', color: 'text-green-300' },
        { text: '\n    ', color: '' },
        { text: 'print', color: 'text-blue-300' },
        { text: '(', color: 'text-slate-400' },
        { text: 'f"Hello, {user}!"', color: 'text-green-300' },
        { text: ')', color: 'text-slate-400' },
        { text: '\n\n', color: '' },
        { text: 'if', color: 'text-pink-400' },
        { text: ' ', color: '' },
        { text: '__name__', color: 'text-blue-300' },
        { text: ' == ', color: 'text-slate-400' },
        { text: '"__main__"', color: 'text-green-300' },
        { text: ':', color: 'text-slate-400' },
        { text: '\n    ', color: '' },
        { text: 'intro', color: 'text-yellow-300' },
        { text: '()', color: 'text-slate-400' },
    ], []);

    const totalChars = tokens.reduce((acc, t) => acc + t.text.length, 0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const runAnimation = (currentIndex: number) => {
            if (currentIndex < totalChars) {
                timeout = setTimeout(() => {
                    setVisibleCount(currentIndex + 1);
                    runAnimation(currentIndex + 1);
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setVisibleCount(0);
                    runAnimation(0);
                }, 3000);
            }
        };
        runAnimation(0);
        return () => clearTimeout(timeout);
    }, [totalChars]);

    const renderTokens = () => {
        let charCount = 0;
        return tokens.map((token, index) => {
            const start = charCount;
            const end = charCount + token.text.length;
            charCount += token.text.length;
            if (visibleCount >= end) return <span key={index} className={token.color}>{token.text}</span>;
            else if (visibleCount > start) {
                const slice = visibleCount - start;
                return <span key={index} className={token.color}>{token.text.slice(0, slice)}</span>;
            }
            return null;
        });
    };

    return (
        <div className="absolute right-0 top-1/4 md:right-10 lg:right-0 xl:right-0 w-full max-w-[500px] opacity-20 lg:opacity-40 transform rotate-[-5deg] z-0 pointer-events-none transition-all duration-1000 select-none">
            <div className="bg-[#112240] rounded-t-lg p-2 flex items-center gap-2 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-500 font-mono">hello.py</div>
            </div>
            <div className="bg-[#0a192f]/90 p-6 rounded-b-lg font-mono text-sm md:text-base shadow-2xl border border-slate-700/30 backdrop-blur-sm">
                <pre className="whitespace-pre-wrap break-words">
                    {renderTokens()}
                    <span className="animate-pulse text-teal-300">|</span>
                </pre>
            </div>
        </div>
    );
};

export default VSCodeAnimation;
