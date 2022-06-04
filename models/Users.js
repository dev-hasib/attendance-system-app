const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 15,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    minlength: 8,
  },
  roles: [String],
  accountStatus: String,
});

const User = model("User", userSchema);

module.exports = User;
