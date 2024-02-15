const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Toggle dark mode
app.get('/toggle-dark-mode', (req, res) => {
    // Toggle dark mode status in local storage
    res.send('<script>window.localStorage.setItem("darkMode", String(!(localStorage.getItem("darkMode") === "true"))); window.location.href = "/";</script>');
});

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
