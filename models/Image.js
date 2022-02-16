const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model { }

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photographer: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        filepath: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
    }
);

module.exports = Image;