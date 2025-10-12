import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="sm:max-w-[1800px] sm:mx-auto sm:p-4 px-3 w-full text-white whitespace-nowrap overflow-hidden">
        <Header/>

        <div className="sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
          <EditorPanel/>
          <OutputPanel/>
        </div>
      </div>
    </div>
  );
}