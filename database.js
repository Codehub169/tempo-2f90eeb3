const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Define the database file path. It will be created if it doesn't exist.
const DB_PATH = path.join(__dirname, 'hueneu.db');

// Connect to the SQLite database.
// The database will be created if it doesn't exist.
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
    return;
  }
  console.log(`Connected to/created database at ${DB_PATH}`);

  // SQL statement to create the 'contacts' table if it doesn't already exist.
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;

  // Run the SQL statement to create the table.
  db.run(createTableSql, (err) => {
    if (err) {
      console.error('Error creating contacts table', err.message);
    } else {
      console.log("'contacts' table created or already exists.");
    }

    // Close the database connection after setup.
    db.close((err) => {
      if (err) {
        console.error('Error closing database', err.message);
      } else {
        console.log('Database initialized and connection closed.');
      }
    });
  });
});
