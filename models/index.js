const User = require('./User');
const Image = require('./Image');
const Comments = require('./Comments');

User.hasMany(Image, {
  foreignKey: 'user_id',
});

Image.belongsTo(User, {
  foreignKey: 'user_id',
});

Image.hasOne(Comments, {
  foreignKey: 'image_id',
});

Comments.belongsTo(Image, {
  foreignKey: 'image_id',
});

module.exports = { User, Image, Comments };
