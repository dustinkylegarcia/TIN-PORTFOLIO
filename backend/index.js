require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect DB
connectDB(process.env.MONGODB_URI);

app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('MERN Portfolio API running'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));