"use client";
import { useEffect } from "react";
import { defineMonacoThemes, LANGUAGE_CONFIG } from "../_constants";
import { Editor } from "@monaco-editor/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RotateCcwIcon, TypeIcon } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { EditorPanelSkeleton } from "./EditorPanelSkeleton";
import { useCodeEditorStore } from "@/app/store/useCodeEditorStore";
import useMounted from "@/hooks/UseMounted";

function EditorPanel() {
  const clerk = useClerk();
  const { language, theme, fontSize, editor, setFontSize, setEditor } = useCodeEditorStore();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const mounted = useMounted();

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(newCode);
  }, [language, editor]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [setFontSize]);

  const handleRefresh = () => {
    const defaultCode = LANGUAGE_CONFIG[language].defaultCode;
    if (editor) editor.setValue(defaultCode);
    localStorage.removeItem(`editor-code-${language}`);
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value) localStorage.setItem(`editor-code-${language}`, value);
  };

  const handleFontSizeChange = (newSize: number) => {
    const size = Math.min(Math.max(newSize, 12), 24);
    setFontSize(size);
    localStorage.setItem("editor-font-size", size.toString());
  };

  if (!mounted) return null;

  return (
    <div className="relative px-2 sm:px-0"> {/* Added horizontal padding for mobile */}
      <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] sm:p-6 p-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="sm:flex hidden items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
              <Image src={`/${language}.png`} alt="Logo" width={24} height={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white font-mono sm:block hidden">Code Workspace</h2>
              <p className="text-xs text-gray-400 font-mono sm:block hidden">Write and execute your code</p>
            </div>
          </div>
          {/* Mobile: justify-between | Desktop: original layout */}
            <div className="flex sm:items-center sm:w-auto w-full sm:justify-around justify-between items-start sm:gap-3 gap-2 sm:flex-nowrap flex-wrap">
            {/* Font Size Slider */}
            <div className="flex items-center gap-3 px-3 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-white/5 w-auto">
              <TypeIcon className="size-4 text-gray-400" />
              <div className="flex items-center gap-3 w-full">
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
                  className="w-full sm:w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-400 min-w-[2rem] text-center">
                  {fontSize}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRefresh}
              className="p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-lg ring-1 ring-white/5 transition-colors"
              aria-label="Reset to default code"
            >
              <RotateCcwIcon className="size-5 text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Editor */}
        <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05] w-full overflow-x-auto">
          {clerk.loaded ? (
            <Editor
              height={typeof window !== "undefined" && window.innerWidth < 640 ? "400px" : "600px"}
              language={LANGUAGE_CONFIG[language].monacoLanguage}
              onChange={handleEditorChange}
              theme={theme}
              beforeMount={defineMonacoThemes}
              onMount={(editor) => setEditor(editor)}
              options={{
                minimap: { enabled: false },
                fontSize,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                renderWhitespace: "selection",
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
                cursorBlinking: "smooth",
                smoothScrolling: true,
                contextmenu: true,
                wordWrap: "on",
                lineNumbersMinChars: isMobile ? 2 : 5,
                renderLineHighlight: "all",
                lineHeight: 1.4,
                letterSpacing: 0.5,
                roundedSelection: true,
                scrollbar: {
                  verticalScrollbarSize: 8,
                  horizontalScrollbarSize: 8,
                },
              }}
            />
          ) : (
            <EditorPanelSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditorPanel;
