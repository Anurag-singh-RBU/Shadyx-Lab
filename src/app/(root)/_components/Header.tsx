import Link from "next/link";
import { Blocks, Sparkles } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";

export const Header = () => {
  return (
    <div className="relative z-10">
      <div
        className="sm:flex sm:items-center sm:justify-between flex justify-between
        bg-[#0a0a0f]/80 backdrop-blur-xl sm:p-6 px-3 py-4 mb-4 sm:rounded-lg font-mono rounded-none w-full"
      >
        {/* Logo (desktop only) */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
            />
            <div
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
            >
              <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            <div className="flex flex-col">
              <span className="block text-lg font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                Shadyx Lab
              </span>
              <span className="block text-xs text-white font-medium">
                Interactive Coding Lab
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Link
            href="https://shadyxui.in"
            className="sm:flex hidden items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
            to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 
            transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
            <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
              Shadyx UI
            </span>
          </Link>

          <div className="flex justify-between items-center w-full sm:w-auto sm:gap-4">
            <ThemeSelector />
            <LanguageSelector />
          </div>

          <RunButton />
        </div>
      </div>
    </div>
  );
};
