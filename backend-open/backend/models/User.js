const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userShema = mongoose.Schema({
  email: { type: 'string', required: true, unique: true },
  password: { type: 'string', required: true },
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
