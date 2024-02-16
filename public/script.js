const themeToggle = document.getElementById('theme-toggle');
const theme = document.getElementById('theme');

// Check if dark mode is enabled in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Function to set the theme
const setTheme = (darkMode) => {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
};

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    const darkMode = !document.body.classList.contains('dark-mode');
    setTheme(darkMode);
});

// Set initial theme based on user preference
setTheme(isDarkMode);

