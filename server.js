const path = require('path');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT || 8000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// CORS middleware
app.use(cors({
    origin: ['http://localhost:5001', 'http://localhost:3000'],
    credentials: true
}))

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the RandomIdeas API'});
})

const ideasRouter = require('./routes/ideas.js');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
