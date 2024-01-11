const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    students: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Students",
    },
  },
  {
    versionKey: false,
  }
);

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentors" },
    previousMentor: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Mentors",
      default: [],
    },
  },
  {
    versionKey: false,
  }
);
const Mentor = mongoose.model("Mentors", mentorSchema);
const Student = mongoose.model("Students", studentSchema);

module.exports = { Mentor, Student };
