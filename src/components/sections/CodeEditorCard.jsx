import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { audioFx } from '../../utils/audio';

const snippets = {
  cpp: {
    filename: 'parth.cpp',
    lang: 'C++',
    raw: `#include <iostream>
using namespace std;

int main() {
    string name = "Parth Tantak";
    string year = "2nd Year B.Tech IT";
    string city = "Pune, MH";

    cout << "hello, world." << endl;
    cout << name << " is learning C++ & DSA." << endl;
    return 0;
}`,
    render: (typedLength) => {
      const code = snippets.cpp.raw;
      const visible = code.slice(0, typedLength);
      return (
        <pre className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-800 overflow-x-auto whitespace-pre">
          <code>
            <HighlightCpp text={visible} />
          </code>
        </pre>
      );
    },
  },
  js: {
    filename: 'parth.js',
    lang: 'JavaScript',
    raw: `const developer = {
  name: "Parth Tantak",
  role: "2nd Year B.Tech IT",
  location: "Pune, MH",
  skills: ["C++", "JavaScript", "HTML/CSS"],
  status: "Building logic & shipping code",
  greet() {
    return \`Hello! \${this.name} here.\`;
  }
};

console.log(developer.greet());`,
    render: (typedLength) => {
      const code = snippets.js.raw;
      const visible = code.slice(0, typedLength);
      return (
        <pre className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-800 overflow-x-auto whitespace-pre">
          <code>
            <HighlightJs text={visible} />
          </code>
        </pre>
      );
    },
  },
  py: {
    filename: 'parth.py',
    lang: 'Python',
    raw: `class Student:
    def __init__(self, name: str, major: str):
        self.name = name
        self.major = major
        self.skills = ["C++", "Python", "DSA"]

    def get_info(self):
        return f"{self.name} | {self.major}"

parth = Student("Parth Tantak", "B.Tech IT '29")
print(parth.get_info())`,
    render: (typedLength) => {
      const code = snippets.py.raw;
      const visible = code.slice(0, typedLength);
      return (
        <pre className="font-mono text-xs sm:text-sm leading-relaxed text-zinc-800 overflow-x-auto whitespace-pre">
          <code>
            <HighlightPy text={visible} />
          </code>
        </pre>
      );
    },
  },
};

// C++ Syntax Highlighting Helper
const HighlightCpp = ({ text }) => {
  return (
    <>
      {text.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && '\n'}
          <HighlightCppLine line={line} />
        </React.Fragment>
      ))}
    </>
  );
};

const HighlightCppLine = ({ line }) => {
  if (line.includes('#include')) {
    return (
      <>
        <span className="text-purple-700 font-semibold">#include</span>{' '}
        <span className="text-amber-800">&lt;iostream&gt;</span>
      </>
    );
  }
  if (line.includes('using namespace')) {
    return (
      <>
        <span className="text-purple-700 font-semibold">using namespace</span> std;
      </>
    );
  }
  if (line.includes('int main()')) {
    return (
      <>
        <span className="text-blue-700 font-semibold">int</span>{' '}
        <span className="text-emerald-700 font-semibold">main</span>() {'{'}
      </>
    );
  }
  if (line.includes('string ')) {
    const parts = line.split('=');
    return (
      <>
        {parts[0].replace('string', '') && (
          <>
            <span className="text-blue-700 font-semibold">string</span>
            <span>{parts[0].replace('string', '')}</span>
          </>
        )}
        = <span className="text-amber-800">{parts[1] || ''}</span>
      </>
    );
  }
  if (line.includes('return 0;')) {
    return (
      <>
        {'    '}<span className="text-purple-700 font-semibold">return</span> 0;
      </>
    );
  }
  if (line.includes('cout')) {
    const isFirstCout = line.includes('"hello, world."');
    return (
      <>
        {'    '}cout &lt;&lt;{' '}
        <span className="text-amber-800">
          {isFirstCout ? '"hello, world."' : 'name'}
        </span>{' '}
        {isFirstCout ? '&lt;&lt; endl;' : '<span className="text-amber-800">" is learning C++ & DSA."</span> &lt;&lt; endl;'}
      </>
    );
  }
  return <span>{line}</span>;
};

// JavaScript Syntax Highlighting Helper
const HighlightJs = ({ text }) => {
  return (
    <>
      {text.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && '\n'}
          {line.includes('const ') || line.includes('let ') ? (
            <>
              <span className="text-purple-700 font-semibold">const</span>
              {line.replace('const', '')}
            </>
          ) : line.includes('greet()') ? (
            <>
              {'  '}<span className="text-emerald-700 font-semibold">greet</span>() {'{'}
            </>
          ) : line.includes('return ') ? (
            <>
              {'    '}<span className="text-purple-700 font-semibold">return</span>
              <span className="text-amber-800">{line.replace('    return', '')}</span>
            </>
          ) : line.includes('console.log') ? (
            <>
              <span className="text-blue-700 font-semibold">console</span>.
              <span className="text-emerald-700 font-semibold">log</span>
              <span className="text-zinc-800">{line.replace('console.log', '')}</span>
            </>
          ) : (
            <span className="text-zinc-800">{line}</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

// Python Syntax Highlighting Helper
const HighlightPy = ({ text }) => {
  return (
    <>
      {text.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && '\n'}
          {line.includes('class ') ? (
            <>
              <span className="text-purple-700 font-semibold">class</span>
              <span className="text-blue-700 font-semibold">{line.replace('class', '')}</span>
            </>
          ) : line.includes('def ') ? (
            <>
              <span className="text-purple-700 font-semibold">    def </span>
              <span className="text-emerald-700 font-semibold">
                {line.replace('    def ', '').split('(')[0]}
              </span>
              <span>({line.split('(')[1]}</span>
            </>
          ) : line.includes('return ') ? (
            <>
              {'        '}<span className="text-purple-700 font-semibold">return</span>
              <span className="text-amber-800">{line.replace('        return', '')}</span>
            </>
          ) : line.includes('print(') ? (
            <>
              <span className="text-blue-700 font-semibold">print</span>
              <span className="text-zinc-800">{line.replace('print', '')}</span>
            </>
          ) : (
            <span className="text-zinc-800">{line}</span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export const CodeEditorCard = () => {
  const [activeLang, setActiveLang] = useState('cpp');
  const [typedLength, setTypedLength] = useState(snippets.cpp.raw.length);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentSnippet = snippets[activeLang];

  // Animated Typing effect when switching tabs
  useEffect(() => {
    setTypedLength(0);
    setIsTyping(true);
    let index = 0;
    const fullText = currentSnippet.raw;

    const interval = setInterval(() => {
      index += 4;
      if (index >= fullText.length) {
        setTypedLength(fullText.length);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setTypedLength(index);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [activeLang]);

  const handleCopy = () => {
    audioFx.playClick();
    navigator.clipboard.writeText(currentSnippet.raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (langKey) => {
    if (langKey === activeLang) return;
    audioFx.playClick();
    setActiveLang(langKey);
  };

  return (
    <div className="relative w-full max-w-md font-sans">
      {/* Floating Status Tag Badge */}
      <div className="absolute -top-3.5 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-[#de6430] text-white text-xs font-mono font-bold shadow-md">
        {`{ status: "learning" }`}
      </div>

      {/* Code Window Card */}
      <div className="bg-white dark:bg-[#16181D] border border-stone-300 dark:border-white/10 rounded-[20px] p-5 shadow-lg space-y-4 pt-7 backdrop-blur-md">
        {/* Window Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-white/10 font-mono text-xs text-zinc-500 dark:text-[#94A3B8]">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>

          {/* Interactive Language Selector Tabs */}
          <div className="flex items-center gap-1 bg-stone-100 dark:bg-[#111216] p-0.5 rounded-lg border border-stone-200/80 dark:border-white/10">
            {Object.keys(snippets).map((key) => {
              const isActive = activeLang === key;
              return (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-[#1C1F26] text-zinc-900 dark:text-[#F8FAFC] shadow-2xs border border-stone-200 dark:border-white/10'
                      : 'text-zinc-600 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-[#F8FAFC]'
                  }`}
                >
                  {snippets[key].lang}
                </button>
              );
            })}
          </div>

          {/* Copy Code Button */}
          <button
            onClick={handleCopy}
            title="Copy Code Snippet"
            className="p-1.5 rounded-lg border border-stone-200 dark:border-white/10 text-zinc-600 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-[#F8FAFC] hover:bg-stone-100 dark:hover:bg-[#1C1F26] transition-all cursor-pointer relative group"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied && (
              <span className="absolute -top-8 right-0 px-2 py-0.5 bg-zinc-900 text-white text-[10px] rounded font-mono shadow-xs">
                Copied!
              </span>
            )}
          </button>
        </div>

        {/* Code Content Area */}
        <div className="min-h-[220px] relative">
          {currentSnippet.render(typedLength)}
          <span className="inline-block w-2 h-4 bg-[#de6430] animate-pulse ml-0.5 align-middle" />
        </div>
      </div>

      {/* Floating Overlapping PT Logo Card */}
      <div className="absolute -bottom-6 -right-4 w-24 h-24 sm:w-28 sm:h-28 bg-zinc-900 text-white rounded-3xl shadow-2xl flex items-center justify-center font-mono font-extrabold text-3xl tracking-tighter border border-stone-800 z-20 hover:scale-105 transition-transform duration-300">
        PT
      </div>
    </div>
  );
};
