// Import required modules
const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose(); // Use verbose for more detailed stack traces

// Initialize Express app
const app = express();

// Define the port. Use environment variable if set, otherwise default to 9000.
const PORT = process.env.PORT || 9000;

// Database setup
const DB_PATH = path.join(__dirname, 'hueneu.db');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the hueneu SQLite database.');
    // The database.js script handles table creation. 
    // We can add a check here if needed, but it's primarily for initialization.
  }
});

// Middleware
// Parse JSON request bodies (for API requests)
app.use(express.json());
// Parse URL-encoded request bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// API Routes
// POST endpoint for contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
  stmt.run(name, email, message, function(err) {
    if (err) {
      console.error('Error inserting contact form data:', err.message);
      return res.status(500).json({ error: 'Failed to save message. Please try again later.' });
    }
    console.log(`A new contact message has been inserted with rowid ${this.lastID}`);
    res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.', id: this.lastID });
  });
  stmt.finalize();
});

// Serve the React application for all other GET requests (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Closed the database connection.');
    process.exit(0);
  });
});
