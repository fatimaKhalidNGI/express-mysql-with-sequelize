require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/dbConn');
const userRoutes = require('./routes/userRoutes');

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/user', require('./routes/userRoutes'));

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on Port ${port}`);
    });
}).catch((error) => {
    console.log("Unable to sync DB. Error: ", error);
});