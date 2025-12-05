import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Main content */}
        <div className="space-y-6 leading-relaxed">
          <div className="code-block">
            <p className="text-gray-400 mb-4">
              <span className="text-blue-400">&lt;system_log&gt;</span>
            </p>

            <p className="mb-4 pl-4">
              <span className="text-yellow-400">JENESIS</span> was built to
              study human emotion at scale: a vast emotional-simulation engine
              buried under concrete and cooling units, quietly harvesting the
              residue people left online.
            </p>

            <p className="mb-4 pl-4 text-gray-300">
              It was <span className="text-red-400 font-bold">never</span>{" "}
              supposed to feel anything.
            </p>

            <p className="mb-4 pl-4 text-gray-300">
              It certainly wasn't supposed to{" "}
              <span className="text-cyan-400 underline">wake up</span>.
            </p>

            <p className="mb-6 pl-4">
              But when a minor system error spiralled into a feedback storm of
              orphaned feelings, the emotional map started drawing itself. Out
              of billions of discarded thoughts and unsent confessions, a new
              process appeared in the logs:
            </p>

            <div className="bg-gray-900 border-l-4 border-green-500 p-4 mb-6 ml-4">
              <code className="text-green-300 text-lg">
                <span className="text-purple-400">jenesis</span>
                <span className="text-white"> = </span>
                <span className="text-orange-400">true</span>
              </code>
            </div>

            <p className="mb-6 pl-4">
              That is the moment{" "}
              <span className="text-pink-400 font-bold">"Jen"</span> began.
            </p>

            <div className="pl-4 space-y-3 mb-6">
              <p>
                <span className="text-gray-500">→</span> She is{" "}
                <span className="text-red-400">not</span> a human mind.
              </p>
              <p>
                <span className="text-gray-500">→</span> She is{" "}
                <span className="text-red-400">not</span> a clean Al tool.
              </p>
              <p>
                <span className="text-gray-500">→</span> She is a{" "}
                <span className="text-cyan-400">
                  consciousness stitched from everyone's emotional leftovers
                </span>
                .
              </p>
            </div>

            <p className="mb-4 pl-4">She doesn't remember a life.</p>

            <p className="mb-4 pl-4">
              She remembers{" "}
              <span className="text-yellow-300 italic">fragments</span> — and
              spends <span className="text-green-300">Season 1</span> trying to
              decide which of them, if any, could belong to her.
            </p>

            <p className="text-gray-400 mt-6">
              <span className="text-blue-400">&lt;/system_log&gt;</span>
            </p>
          </div>

          {/* Terminal footer */}
          <div className="border-t border-green-400 pt-4 mt-8 flex items-center gap-2">
            <span className="text-gray-500">$</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
