import Sequelize from "sequelize";
import sequelize from "../config/db.js"

const User = sequelize.define("user",{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default User;