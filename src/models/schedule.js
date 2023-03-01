'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    currenNumber: DataTypes.STRING,
    maxNumber: DataTypes.STRING,
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    doctorId: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};