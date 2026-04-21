// 🔥 NAV COMPONENT (Ultra Modern Glassmorphism)
function renderNav() {
  const navElement = document.getElementById("nav");
  if (!navElement) return;

  navElement.innerHTML = `
  <nav class="fixed top-0 w-full z-50 glass border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="flex items-center gap-2 group cursor-pointer" onclick="window.location.href='index.html'">
        <div class="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">🔥</div>
        <h1 class="font-extrabold text-xl tracking-tighter text-slate-900 dark:text-white">
          FireHorse<span class="text-indigo-500">.id</span>
        </h1>
      </div>

      <div class="hidden md:flex gap-8 items-center font-semibold text-sm tracking-wide">
        <a href="index.html" class="nav-link hover:text-indigo-500 transition-colors">HOME</a>
        <a href="support.html" class="nav-link hover:text-indigo-500 transition-colors">SUPPORT</a>
        <a href="privacy.html" class="nav-link hover:text-indigo-500 transition-colors">PRIVACY</a>
        <a href="terms.html" class="nav-link hover:text-indigo-500 transition-colors">TERMS</a>
        <button onclick="toggleTheme()" class="ml-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-all">
          <span class="dark:hidden">🌙</span><span class="hidden dark:inline">☀️</span>
        </button>
      </div>

      <div class="md:hidden flex items-center gap-4">
         <button onclick="toggleTheme()" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-800">🌓</button>
         <span class="text-2xl">☰</span>
      </div>
    </div>
  </nav>
  <div class="h-24"></div>`;
}
