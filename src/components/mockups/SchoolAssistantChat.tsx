"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { assistantScript } from "@/content/ai";
import { Crest } from "./SchoolSiteMockup";
import { cn } from "@/lib/utils";

type Msg = { from: "parent" | "bot"; text: string };

function answer(q: string) {
  const s = q.toLowerCase();
  const hit = assistantScript.answers.find((a) => a.match.some((m) => s.includes(m)));
  return hit ? hit.reply : assistantScript.fallback;
}

/** Interactive, scripted "school website assistant". No network calls. */
export function SchoolAssistantChat({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: assistantScript.greeting }]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [msgs, typing, reduced]);

  const ask = (q: string) => {
    const text = q.trim();
    if (!text || typing) return;
    setMsgs((m) => [...m, { from: "parent", text }]);
    setInput("");
    setTyping(true);
    timer.current = window.setTimeout(
      () => {
        setTyping(false);
        setMsgs((m) => [...m, { from: "bot", text: answer(text) }]);
      },
      reduced ? 150 : 1000,
    );
  };

  const asked = new Set(msgs.filter((m) => m.from === "parent").map((m) => m.text));

  return (
    <div
      className={cn(
        "flex h-[520px] w-full flex-col overflow-hidden rounded-[14px] border border-line bg-chalk text-ink shadow-[0_40px_80px_-30px_rgba(14,17,22,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-ivy px-4 py-3 text-paper">
        <span className="flex size-9 items-center justify-center rounded-full bg-paper">
          <Crest className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-[14px] font-semibold">{assistantScript.schoolName}</p>
          <p className="flex items-center gap-1.5 text-[12px] text-paper/75">
            <span className="size-1.5 rounded-full bg-[#7BE0A8]" /> Admissions assistant · replies instantly
          </p>
        </div>
      </div>

      <div
        ref={listRef}
        data-lenis-prevent
        className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-paper/50 px-4 py-4 text-[14px] leading-snug"
        role="log"
        aria-live="polite"
        aria-label="Conversation with the school assistant"
      >
        <AnimatePresence initial={false}>
          {msgs.map((m, i) => (
            <motion.div
              key={i}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5",
                m.from === "parent" ? "self-end rounded-br-md bg-ink text-paper" : "self-start rounded-bl-md border border-line bg-chalk",
              )}
            >
              <span className="sr-only">{m.from === "parent" ? "You: " : "Assistant: "}</span>
              {m.text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-1 self-start rounded-2xl rounded-bl-md border border-line bg-chalk px-4 py-3"
              aria-label="Assistant is typing"
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="size-1.5 rounded-full bg-slate"
                  animate={reduced ? undefined : { opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-t border-line p-3">
        <div className="no-scrollbar mb-2.5 flex gap-2 overflow-x-auto">
          {assistantScript.suggestions
            .filter((s) => !asked.has(s))
            .map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                data-cursor="Ask"
                className="shrink-0 rounded-full border border-line px-3 py-1.5 text-[13px] transition-colors hover:border-ivy hover:bg-ivy hover:text-paper"
              >
                {s}
              </button>
            ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex items-center gap-2"
        >
          <label htmlFor="assistant-input" className="sr-only">
            Ask the school assistant a question
          </label>
          <input
            id="assistant-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a question…"
            autoComplete="off"
            className="h-11 flex-1 rounded-full border border-line bg-paper/60 px-4 text-[14px] outline-none placeholder:text-slate focus:border-ink/40"
          />
          <button
            type="submit"
            aria-label="Send question"
            className="flex size-11 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-edge hover:text-ink disabled:opacity-40"
            disabled={!input.trim() || typing}
          >
            <ArrowUp className="size-4" />
          </button>
        </form>
        <p className="mt-2 text-center text-[11px] text-slate">{assistantScript.disclaimer}</p>
      </div>
    </div>
  );
}
