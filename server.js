require('dotenv').config();

const express = require('express');
const app = express();
const sequelize = require('./config/database');
const User = require('./models/User'); // Import User model
const Admin = require('./models/Admin'); // Import Admin model
const History = require('./models/History');
// Middleware to parse JSON requests
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const disasterRoutes = require('./routes/disasterRoutes');
const adminRoutes = require('./routes/adminRoutes');
const trainingRoutes = require('./routes/trainingRoutes');
const historyRoutes = require('./routes/historyRoutes');



app.use('/auth', authRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/disasters', disasterRoutes);
app.use('/api', adminRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/history', historyRoutes);




// Sync database and start the server
sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

sequelize.sync({ force: false }) // Set to true only if you want to recreate tables
  .then(() => console.log('Database & tables created!'))
  .catch((error) => console.error('Error creating database tables:', error));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
