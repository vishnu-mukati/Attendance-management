const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('attendance', 'root', '0101', {
    host: 'localhost',
    dialect: 'mysql'
});

    (async () => {
        try {
            await sequelize.authenticate();
            console.log('connection to the database has been created');
        } catch (err) {
             console.log(err);
        }
    })();

  module.exports = sequelize;