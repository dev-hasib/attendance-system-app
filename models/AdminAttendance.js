const { model, Schema } = require("mongoose");

const adminAttendanceSchema = new Schema({
  timeLimits: Number,
  status: String,
  createdAt: Date,
});
const AdminAttendance = model("AdminAttendance", adminAttendanceSchema);

module.exports = AdminAttendance;
