const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const boardRoutes = require('./routes/boardRoutes');
const taskRoutes = require('./routes/taskRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/boards', boardRoutes);
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Team Collaboration Board API is running');
});

const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
