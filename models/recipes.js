module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Recipe;
};