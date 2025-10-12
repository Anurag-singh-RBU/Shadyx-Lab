import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button
        className="flex items-center gap-2 sm:px-4 py-2 px-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg
        transition-all duration-200 font-medium shadow-lg shadow-blue-500/20 sm:ml-0 -ml-4 sm:text-md text-sm">
        <LogIn className="w-4 h-4 transition-transform"/>
        <span className="">Login</span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;