import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_CONTEXT } from "../data/resumeData";

interface Message {
  role: "user" | "ai";
  text: string;
}

const SUGGESTIONS = [
  "How many years of experience does Satish have?",
  "What technologies does Satish work with?",
  "What projects has Satish built?",
  "What companies has Satish worked for?",
  "What is Satish's educational background?",
  "What are Satish's key skills?",
];

const AiChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "👋 Hi! I'm Satish's AI assistant powered by Gemini. I can answer questions about his experience, skills, projects, and background. Add your Gemini API key below to get started!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: string; parts: { text: string }[] }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // prefer build-time env var (REACT_APP_GEMINI_API_KEY) — no client-side input allowed for security
  const savedKey = (process.env.REACT_APP_GEMINI_API_KEY || "");

  const addMessage = (role: "user" | "ai", text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const sendMessage = async (text?: string) => {
    const query = text || input.trim();
    if (!query) return;
    if (!savedKey) {
      addMessage("ai", "⚠️ No Gemini API key found. Set REACT_APP_GEMINI_API_KEY in your .env and rebuild.");
      return;
    }

    setInput("");
    addMessage("user", query);
    setLoading(true);

    const systemPrompt = `You are an AI assistant for Satish Prajapati's portfolio website. Answer questions ONLY based on the resume data below. Be concise, friendly, and professional. If something is not in the resume, say so clearly — do not hallucinate or make up information. Use bullet points when listing multiple items.

RESUME DATA:
${RESUME_CONTEXT}`;

    const newHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: query }] },
    ];

    const messagesForApi = newHistory.map((m, i) => {
      if (i === 0 && m.role === "user") {
        return { role: "user", parts: [{ text: systemPrompt + "\n\nUser question: " + m.parts[0].text }] };
      }
      return m;
    });

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": savedKey,
          },
          body: JSON.stringify({
            contents: messagesForApi,
            generationConfig: { temperature: 0.3, maxOutputTokens: 600 },
          }),
        }
      );
      const data = await res.json();

      if (data.error) {
        addMessage("ai", `❌ API Error: ${data.error.message}`);
        setChatHistory([...chatHistory]);
      } else {
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
        addMessage("ai", reply);
        setChatHistory([
          ...newHistory,
          { role: "model", parts: [{ text: reply }] },
        ]);
      }
    } catch {
      addMessage("ai", "❌ Network error. Please check your API key and try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatText = (text: string) => {
    // Return React nodes so HTML tags are not rendered as plain text
    const lines = text.replace(/\*(.*?)(\n|$)/g, "• $1$2").split("\n");
    return lines.map((line, i) => {
      // Split bold segments **bold** into React <strong> nodes
      const nodes: React.ReactNode[] = [];
      let lastIndex = 0;
      const boldRe = /\*\*(.*?)\*\*/g;
      let m: RegExpExecArray | null;
      let partIndex = 0;
      while ((m = boldRe.exec(line)) !== null) {
        if (m.index > lastIndex) nodes.push(line.slice(lastIndex, m.index));
        nodes.push(
          <strong key={`${i}-b-${partIndex++}`}>
            {m[1]}
          </strong>
        );
        lastIndex = m.index + m[0].length;
      }
      if (lastIndex < line.length) nodes.push(line.slice(lastIndex));
      return <div key={i}>{nodes.length ? nodes : <br />}</div>;
    });
  };

  return (
    <section id="chat" className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">AI Assistant</div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
              Ask Me Anything
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
              Powered by Gemini AI — ask anything about Satish's experience, skills, projects, or background.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 dark:bg-[#252538] px-5 py-4 border-b border-gray-200 dark:border-[#2a2a40] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                SP
              </div>
              <div>
                <div className="font-bold text-sm text-gray-900 dark:text-white">Satish's AI Assistant</div>
                <div className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Powered by Gemini AI
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-5 flex flex-col gap-3 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      msg.role === "ai"
                        ? "bg-gradient-to-br from-violet-600 to-purple-400 text-white"
                        : "bg-gray-100 dark:bg-[#252538] border border-gray-200 dark:border-[#3a3a58] text-gray-500"
                    }`}
                  >
                    {msg.role === "ai" ? "SP" : "👤"}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[85%] ${
                      msg.role === "ai"
                        ? "bg-gray-50 dark:bg-[#252538] border border-gray-200 dark:border-[#2a2a40] text-gray-700 dark:text-gray-300"
                        : "bg-violet-500/15 border border-violet-500/30 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}

              {/* @ts-ignore */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2 items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      SP
                    </div>
                    <div className="bg-gray-50 dark:bg-[#252538] border border-gray-200 dark:border-[#2a2a40] rounded-2xl px-4 py-3 flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-5 py-3 border-t border-gray-100 dark:border-[#2a2a40] flex flex-wrap gap-2">
              {SUGGESTIONS.slice(0, 3).map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="bg-gray-100 dark:bg-[#12121a] border border-gray-200 dark:border-[#2a2a40] text-gray-500 dark:text-gray-400 text-xs px-3 py-1.5 rounded-full hover:border-violet-400 hover:text-violet-500 transition-all"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-5 py-4 border-t border-gray-100 dark:border-[#2a2a40] flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
                placeholder="Ask about Satish's profile..."
                className="flex-1 bg-gray-50 dark:bg-[#12121a] border border-gray-200 dark:border-[#2a2a40] text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-600 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-violet-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => !loading && sendMessage()}
                disabled={loading || !input.trim()}
                className="bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white w-10 h-10 rounded-xl flex items-center justify-center text-base transition-colors flex-shrink-0"
              >
                ➤
              </motion.button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-3">
            Get a free Gemini API key at{" "}
            <a href="https://aistudio.google.com" target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:text-violet-400">
              aistudio.google.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AiChat;
