// Anti Inspect
document.onkeydown = function(e) {
  if (e.key === "F12") return false;
  if (e.ctrlKey && e.shiftKey && e.key === "I") return false;
};

// Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Anti console
setInterval(() => {
  const devtools = /./;
  devtools.toString = function() {
    document.body.innerHTML = "ٱلْحِمَايَةُ مُفَعَّلَةٌ";
  };
  console.log(devtools);
}, 1000);

// Arabic Obfuscation Mapping
function arabicObfuscate(str) {
  return btoa(str)
    .split("")
    .map(c => String.fromCharCode(0x0600 + c.charCodeAt(0)))
    .join("");
}

// Example usage
const hiddenCode = arabicObfuscate("<div>FireHorse</div>");
console.log(hiddenCode);


// ===== DETECT DEVTOOLS =====
function detectDevTools() {
  const threshold = 160;
  return (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  );
}

// ===== ARABIC GENERATOR =====
function generateArabicNoise(length = 5000) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(0x0600 + Math.random() * 200);
  }
  return result;
}

// ===== CREATE OVERLAY =====
const overlay = document.createElement("div");

overlay.style.position = "fixed";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background = "#000";
overlay.style.color = "#0f0";
overlay.style.fontSize = "10px";
overlay.style.whiteSpace = "pre-wrap";
overlay.style.zIndex = "999999";
overlay.style.display = "none";
overlay.style.padding = "20px";
overlay.style.overflow = "auto";

overlay.innerText = generateArabicNoise(8000);

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(overlay);
});

// ===== WATCHER =====
setInterval(() => {
  if (detectDevTools()) {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  } else {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  }
}, 1000);

// ===== BASIC PROTECTION =====
document.addEventListener("contextmenu", e => e.preventDefault());

document.onkeydown = function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    return false;
  }
};
