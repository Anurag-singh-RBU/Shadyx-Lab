import Link from "next/link";
import { Blocks, SquareDashedBottomCode } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import { ConvexHttpClient } from "convex/browser";
import { currentUser } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";
import { SignedIn } from "@clerk/nextjs";
import HeaderProfileBtn from "./HeaderProfileBtn";

async function Header() {
  const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const user = await currentUser();

  const convexUser = await convex.query(api.users.getUser, {
    userId: user?.id || "",
  });

  return (
    <div className="relative z-10 w-full">
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
        bg-[#0a0a0f]/80 backdrop-blur-xl sm:p-6 px-4 py-3 mb-4 sm:rounded-lg 
        font-mono rounded-none w-full gap-3 sm:gap-0">
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"/>
            <div
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all">
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

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
          <div className="flex justify-between items-center w-full gap-3 sm:justify-start sm:gap-4">
            <LanguageSelector hasAccess={Boolean(convexUser?.isPro)}/>

             <div className="flex sm:hidden items-center gap-3">
              <SignedIn>
                <RunButton/>
              </SignedIn>
              <HeaderProfileBtn/>
            </div>
            
          </div>

          <div className="flex justify-between items-center w-full gap-3 sm:justify-start sm:gap-4">
            <ThemeSelector />

            <Link
              href="/snippets"
              className="group flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-300 bg-gray-800/50 
                hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg w-full sm:w-auto">
              <SquareDashedBottomCode className="w-4 h-4 relative z-10 group-hover:rotate-3 transition-transform" />
              <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                Snippets
              </span>
            </Link>


            <div className="sm:flex hidden items-center gap-3">
              <SignedIn>
                <RunButton/>
              </SignedIn>
              <HeaderProfileBtn/>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;
