"use client"

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownViewer({ url }: any) {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
        try {
            const res: any = await fetch(url)
            const text = await res.text()
            setMarkdown(text)
        } catch (e: any) {
            setError(e.message)
        }
    })()
  }, []);

  if (error) {
    return <div className="">
        Error: { error }
    </div>
  }

  if (!markdown) {
    return  <div className="prose mx-auto w-full p-4 flex flex-col justify-center items-center">
            <p>Loading ...</p>
        </div>
  }

  return (
    <div className="prose mx-auto p-4 flex flex-col text-left markdown-content">
       <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>      
     </div>
   );
}
