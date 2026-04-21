// Theme Engine
(function() {
    const saved = localStorage.getItem("fh_theme") || "dark";
    if (saved === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("fh_theme", isDark ? "dark" : "light");
}

// Data Fetching
async function loadData() {
    try {
        const response = await fetch("api.json");
        if (!response.ok) throw new Error("Data not found");
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Nav Component
function renderNav() {
    return `
    <nav class="nav">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.html" class="flex items-center gap-2 group">
                <span class="text-2xl transition group-hover:rotate-12">🔥</span>
                <span class="font-black text-xl tracking-tighter dark:text-white uppercase">FireHorse<span class="text-indigo-500">.id</span></span>
            </a>
            <div class="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
                <a href="index.html" class="hover:text-indigo-500 transition dark:text-slate-300">Home</a>
                <a href="support.html" class="hover:text-indigo-500 transition dark:text-slate-300">Support</a>
                <a href="privacy.html" class="hover:text-indigo-500 transition dark:text-slate-300">Privacy</a>
                <a href="terms.html" class="hover:text-indigo-500 transition dark:text-slate-300">Terms</a>
                <button onclick="toggleTheme()" class="p-2 bg-indigo-500/10 rounded-xl hover:bg-indigo-500/20 transition">🌓</button>
            </div>
            <div class="md:hidden flex items-center gap-4">
                <button onclick="toggleTheme()" class="text-xl">🌓</button>
                <span class="text-xl">☰</span>
            </div>
        </div>
    </nav>`;
}

// Footer Component
function renderFooter() {
    return `
    <footer class="py-12 border-t border-white/5 text-center">
        <p class="text-sm opacity-40 dark:text-slate-400 font-medium">© 2026 FireHorse.id — Dibuat untuk Hijrah yang Lebih Baik</p>
    </footer>`;
}
