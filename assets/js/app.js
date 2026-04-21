// Theme Engine
(function initTheme() {
  const saved = localStorage.getItem("fh_theme") || "light";
  if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("fh_theme", isDark ? "dark" : "light");
}

// Data Fetcher
async function loadData() {
  try {
    const res = await fetch("data/api.json");
    return await res.json();
  } catch (e) { console.error("Data fail", e); }
}

// Shared Components
function renderNav() {
  const nav = document.getElementById("nav");
  if(!nav) return;
  nav.innerHTML = `
    <nav class="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🔥</span>
          <h1 class="font-extrabold text-xl tracking-tighter">FireHorse<span class="text-indigo-500">.id</span></h1>
        </div>
        <div class="hidden md:flex gap-8 font-medium">
          <a href="index.html" class="hover:text-indigo-500 transition">Home</a>
          <a href="support.html" class="hover:text-indigo-500 transition">Support</a>
          <a href="privacy.html" class="hover:text-indigo-500 transition">Privacy</a>
          <a href="terms.html" class="hover:text-indigo-500 transition">Terms</a>
        </div>
        <button onclick="toggleTheme()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
          🌓
        </button>
      </div>
    </nav><div class="h-20"></div>`;
}

function renderFooter() {
  const footer = document.getElementById("footer");
  if(!footer) return;
  footer.innerHTML = `
    <footer class="mt-20 border-t border-white/10 py-10 text-center opacity-60">
      <p class="text-sm font-medium">© 2026 FireHorse.id — Crafting Digital Spirituality</p>
    </footer>`;
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
});
