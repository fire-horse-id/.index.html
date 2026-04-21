// 🔐 THEME ENGINE (Persisted)
(function(){
  const t = localStorage.getItem("fh_theme");
  if(t === "dark") document.documentElement.classList.add("dark");
})();

function toggleTheme(){
  const root = document.documentElement;
  root.classList.toggle("dark");

  localStorage.setItem("fh_theme",
    root.classList.contains("dark") ? "dark":"light"
  );
}

// 🧠 LOAD API DATA
async function loadData(){
  const res = await fetch("data/api.json");
  return await res.json();
}

// 🔥 NAV COMPONENT (Reusable)
function renderNav(){
  return `
  <nav class="nav flex justify-between p-4 items-center">
    <h1 class="font-bold text-lg">🔥 FireHorse.id</h1>
    <div class="flex gap-6 items-center">
      <a href="index.html">Home</a>
      <a href="privacy.html">Privacy</a>
      <a href="terms.html">Terms</a>
      <a href="support.html">Support</a>
      <button onclick="toggleTheme()">🌙</button>
    </div>
  </nav>`;
}

// 🔥 FOOTER
function renderFooter(){
  return `
  <footer class="text-center p-6 opacity-70">
    © 2026 FireHorse.id — All Rights Reserved
  </footer>`;
}