const express = require('express');
const sequelize = require('./utils/db-connection');
const departmentRoutes = require('./routes/departmentRoutes');
const studentRoutes = require('./routes/studentRoutes');
const courseRoute = require('./routes/courseRoutes')

require('./models/index');

const app = express();
app.use(express.json());

app.use('/departments', departmentRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoute)

sequelize.sync({ force: true }).then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
