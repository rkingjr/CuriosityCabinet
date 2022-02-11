const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comment3: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comment4: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        comment5: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'image',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
);

module.exports = Image;