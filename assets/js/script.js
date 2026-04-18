const btn = document.getElementById("themeToggle");
const html = document.documentElement;

function applyTheme(theme) {
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    localStorage.setItem("theme", theme);
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem("theme") || "light");

btn.addEventListener("click", () => {
    applyTheme(html.classList.contains("dark") ? "light" : "dark");
});