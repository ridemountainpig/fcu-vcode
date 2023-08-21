"use client";

import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Clipboard, Check } from "lucide-react";
import SyntaxHighlighterComponent from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Toaster, toast } from "sonner";

function SyntaxHighlighter(props) {
    const { language, code } = props;
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        setCopied(true);
        toast.success("Successfully copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <>
            <Toaster position="top-center" className="lg:hidden" />
            <Toaster position="bottom-right" className="hidden lg:block" />
            <div className="relative">
                <CopyToClipboard text={code} onCopy={handleCopy}>
                    <button
                        className="absolute right-4 top-4 rounded-lg bg-white p-2 text-slate-500 duration-100 hover:bg-slate-50"
                        disabled={copied}
                    >
                        {copied ? (
                            <Check className="h-4 w-4 animate-clipboard text-slate-400" />
                        ) : (
                            <Clipboard className="h-4 w-4" />
                        )}
                    </button>
                </CopyToClipboard>
                <SyntaxHighlighterComponent
                    language={language}
                    style={atomOneLight}
                    wrapLines={true}
                    showLineNumbers={true}
                    lineNumberStyle={{ color: "rgb(148, 163, 184)" }}
                    className="rounded-br-md rounded-bl-md border-x border-b border-slate-200 font-mono text-sm leading-5 tracking-wider"
                    customStyle={{
                        padding: "1rem 2rem 1rem 2rem",
                        backgroundColor: "#F6F6F6",
                    }}
                >
                    {code}
                </SyntaxHighlighterComponent>
            </div>
        </>
    );
}

export default SyntaxHighlighter;
