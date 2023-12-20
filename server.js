// // server.js
// const express = require('express');
// const pgp = require('pg-promise')();
// const app = express();
// const port = process.env.PORT || 3002;

// // Replace the following configuration with your actual database credentials and connection details
// const db = pgp({
//   user: 'postgres',
//   password: 'Admin0272',
//   host: 'database-3.cb86aoug6oz9.us-east-1.rds.amazonaws.com',
//   port: 5432,
//   database: 'demo',
//   ssl: true,
// });


// app.use(express.json());

// // Endpoint to get form data
// app.get('/api/getFormData', async (req, res) => {
//   try {
//     // Update the query to include LIMIT 1
//     const formData = await db.one('SELECT * FROM yoga_registration ORDER BY registration_date DESC LIMIT 1');
    
//     res.status(200).json(formData);
//   } catch (error) {
//     console.error('Error fetching form data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Backend server is running on port ${port}`);
// });
