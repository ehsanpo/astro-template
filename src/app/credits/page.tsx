import Link from "next/link";

export const metadata = {
  title: "Credits",
  description:
    "This website exists thanks to incredible open-source tools, creative assets, and AI assistance.",
};

export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-basement text-4xl font-bold text-neutral-800 dark:text-neutral-100 md:text-5xl">
            Credits
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-300">
            This website exists thanks to incredible open-source tools, creative
            assets, and AI assistance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            {/* Core Stack */}
            <section>
              <h2 className="my-8 text-center font-basement text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                ⚡ Core Stack
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-orange-500/10 to-purple-600/10 p-8 backdrop-blur-sm transition-transform duration-300 hover:scale-105 dark:border-neutral-700/50">
                  <div className="mb-4 text-4xl">⚡</div>
                  <h3 className="mb-2 font-basement text-xl font-bold">
                    Next.js
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                    React framework for production
                  </p>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    nextjs.org →
                  </a>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 backdrop-blur-sm transition-transform duration-300 hover:scale-105 dark:border-neutral-700/50">
                  <div className="mb-4 text-4xl">⚛️</div>
                  <h3 className="mb-2 font-basement text-xl font-bold">
                    React
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                    Interactive components
                  </p>
                  <a
                    href="https://react.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    react.dev →
                  </a>
                </div>
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-teal-500/10 to-blue-600/10 p-8 backdrop-blur-sm transition-transform duration-300 hover:scale-105 dark:border-neutral-700/50">
                  <div className="mb-4 text-4xl">🎨</div>
                  <h3 className="mb-2 font-basement text-xl font-bold">
                    TailwindCSS
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                    Utility-first CSS framework
                  </p>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    tailwindcss.com →
                  </a>
                </div>
              </div>
            </section>

            {/* State & Animation */}
            <section>
              <h2 className="mb-8 text-center font-basement text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                🎭 State & Animation
              </h2>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="rounded-xl bg-neutral-50 p-6 transition-colors hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50">
                  <h3 className="mb-2 font-semibold">Zustand</h3>
                  <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                    State management
                  </p>
                  <a
                    href="https://zustand-demo.pmnd.rs/"
                    target="_blank"
                    className="text-xs text-primary-500"
                  >
                    View →
                  </a>
                </div>
                <div className="rounded-xl bg-neutral-50 p-6 transition-colors hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50">
                  <h3 className="mb-2 font-semibold">GSAP</h3>
                  <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Professional animations
                  </p>
                  <a
                    href="https://gsap.com/"
                    target="_blank"
                    className="text-xs text-primary-500"
                  >
                    View →
                  </a>
                </div>
                <div className="rounded-xl bg-neutral-50 p-6 transition-colors hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50">
                  <h3 className="mb-2 font-semibold">Framer Motion</h3>
                  <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                    React animations
                  </p>
                  <a
                    href="https://www.framer.com/motion/"
                    target="_blank"
                    className="text-xs text-primary-500"
                  >
                    View →
                  </a>
                </div>
                <div className="rounded-xl bg-neutral-50 p-6 transition-colors hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50">
                  <h3 className="mb-2 font-semibold">PhotoSwipe</h3>
                  <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-400">
                    Gallery lightbox
                  </p>
                  <a
                    href="https://photoswipe.com/"
                    target="_blank"
                    className="text-xs text-primary-500"
                  >
                    View →
                  </a>
                </div>
              </div>
            </section>

            {/* UI Components */}
            <section>
              <h2 className="mb-8 text-center font-basement text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                🧩 UI Components
              </h2>
              <div className="rounded-2xl border border-neutral-200/50 bg-white p-8 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-800/30">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🎛️</div>
                    <div>
                      <h3 className="mb-1 font-semibold">
                        Class Variance Authority
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Component variant management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h3 className="mb-1 font-semibold">TypeScript</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Type-safe development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Creative Assets & Design Tools */}
            <section>
              <h2 className="mb-8 text-center font-basement text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                🎨 Creative Assets & Design Tools
              </h2>
              <div className="space-y-8">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-blue-500/10 to-purple-600/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-neutral-700/50">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🎨</div>
                      <div>
                        <h3 className="mb-2 font-basement text-xl font-bold">
                          Adobe Photoshop
                        </h3>
                        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                          Professional image editing and digital art
                        </p>
                        <a
                          href="https://www.adobe.com/products/photoshop.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-500 hover:text-primary-600"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-neutral-700/50">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🔧</div>
                      <div>
                        <h3 className="mb-2 font-basement text-xl font-bold">
                          Figma
                        </h3>
                        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                          Collaborative interface design and prototyping
                        </p>
                        <a
                          href="https://www.figma.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-500 hover:text-primary-600"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-neutral-700/50">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">🦆</div>
                      <div>
                        <h3 className="mb-2 font-basement text-xl font-bold">
                          Duck Sprite Animation
                        </h3>
                        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                          Adorable duck sprite sheet bringing life to the footer
                        </p>
                        <a
                          href="https://caz-creates-games.itch.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary-500 hover:text-primary-600"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Development Tools */}
            <section>
              <h2 className="mb-8 text-center font-basement text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                💻 Development Tools
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-orange-500/10 to-red-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-neutral-700/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🧠</div>
                    <div>
                      <h3 className="mb-2 font-basement text-xl font-bold">
                        IntelliJ IDEA
                      </h3>
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        Powerful IDE for intelligent development
                      </p>
                      <a
                        href="https://www.jetbrains.com/idea/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary-500 hover:text-primary-600"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-neutral-700/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h3 className="mb-2 font-basement text-xl font-bold">
                        Visual Studio Code
                      </h3>
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        Lightweight yet powerful code editor
                      </p>
                      <a
                        href="https://code.visualstudio.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary-500 hover:text-primary-600"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Assistance */}
            <section>
              <h2 className="mb-8 text-center font-basement text-3xl font-bold text-neutral-800 dark:text-neutral-100">
                🤖 AI Assistance
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:from-purple-500/20 hover:to-indigo-600/20 dark:border-neutral-700/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🐙</div>
                    <div>
                      <h3 className="mb-2 font-basement text-xl font-bold">
                        GitHub Copilot
                      </h3>
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        AI-powered coding assistance
                      </p>
                      <a
                        href="https://github.com/features/copilot"
                        target="_blank"
                        className="font-medium text-primary-500 hover:text-primary-600"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-blue-500/10 to-cyan-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:from-blue-500/20 hover:to-cyan-600/20 dark:border-neutral-700/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="mb-2 font-basement text-xl font-bold">
                        Google Gemini
                      </h3>
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        Image generation & creative support
                      </p>
                      <a
                        href="https://gemini.google.com/"
                        target="_blank"
                        className="font-medium text-primary-500 hover:text-primary-600"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="group rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-green-500/10 to-teal-600/10 p-8 backdrop-blur-sm transition-all duration-300 hover:from-green-500/20 hover:to-teal-600/20 dark:border-neutral-700/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🚀</div>
                    <div>
                      <h3 className="mb-2 font-basement text-xl font-bold">
                        Claude AI
                      </h3>
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        Advanced AI assistance for development
                      </p>
                      <a
                        href="https://www.anthropic.com/claude"
                        target="_blank"
                        className="font-medium text-primary-500 hover:text-primary-600"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center">
            <div className="mb-8 rounded-2xl border border-neutral-200/50 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-8 backdrop-blur-sm dark:border-neutral-700/50">
              <h2 className="gradient-text mb-4 font-basement text-2xl font-bold">
                Thank You! 🙏
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
                Grateful for the incredible open-source community and all the
                creators who make projects like this possible.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-500 px-8 py-4 font-basement font-semibold text-white transition-all hover:scale-105 hover:bg-primary-600"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
