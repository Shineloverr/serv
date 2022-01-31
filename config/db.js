import Sequelize from "sequelize";


const sequelize = new Sequelize('testapp', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

export default sequelize;