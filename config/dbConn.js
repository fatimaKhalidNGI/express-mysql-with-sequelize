const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'my_db_practice',
    'root',
    'fatima123',
    {
        host : 'localhost',
        dialect : 'mysql'
    }
);

const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("Connected to DB");
        
    } catch (error) {
        console.log("DB not connected due to: ", error);
    }
}

connectDB();

module.exports = sequelize;