const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Update this line to be very specific
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}));

app.use(express.json());
// 1. Database Connections
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aaswi@2005', 
    database: 'quiz_portal'
});

// 2. Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("❌ CONNECTION ERROR:", err.message);
        return;
    }
    console.log("✅ SUCCESS: Connected to Local MySQL!");
});

// Ensure there is a '/' before 'api' and another before 'questions'
app.get('/questions', (req, res) => {
    db.query("SELECT * FROM questions", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});
// Change '/api/questions' to just '/questions'
app.get('/questions', (req, res) => {
    db.query("SELECT * FROM questions", (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});


app.listen(5000, () => console.log("🚀 Server active on http://localhost:5000"));