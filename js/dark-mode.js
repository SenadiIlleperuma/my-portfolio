const darkModeToggle = document.getElementById("toggle");
const themeStyle = document.getElementById("theme-style");

// Check if dark mode preference is stored in local storage
const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

// Function to enable dark mode
function enableDarkMode() {
  themeStyle.href = "css/dark-mode.css";
  localStorage.setItem("darkModeEnabled", "true");
}

// Function to disable dark mode
function disableDarkMode() {
  themeStyle.href = "css/style.css";
  localStorage.setItem("darkModeEnabled", "false");
}

// Toggle between dark mode and light mode
darkModeToggle.addEventListener("click", () => {
  if (themeStyle.href.includes("css/style.css")) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// Set initial theme based on user preference
if (darkModeEnabled) {
  enableDarkMode();
}

const toggleDarkMode = document.getElementById("dark-mode-toggle");
const styleTheme = document.getElementById("theme-style");

// Check if dark mode preference is stored in local storage
const isEnabledDarkMode = localStorage.getItem("darkModeEnabled") === "true";

// Function to enable dark mode
function activateDarkMode() {
  styleTheme.href = "css/dark-mode.css";
  localStorage.setItem("darkModeEnabled", "true");
}

// Function to disable dark mode
function deactivateDarkMode() {
  styleTheme.href = "css/style.css";
  localStorage.setItem("darkModeEnabled", "false");
}

// Toggle between dark mode and light mode
toggleDarkMode.addEventListener("click", () => {
  if (styleTheme.href.includes("css/style.css")) {
    activateDarkMode();
  } else {
    deactivateDarkMode();
  }
});

// Set initial theme based on user preference
if (isEnabledDarkMode) {
  activateDarkMode();
}
