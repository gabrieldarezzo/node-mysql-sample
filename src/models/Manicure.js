const sequelize = require('./sequilize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
    }, {
        timestamps: false
    });

    return User;
}