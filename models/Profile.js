const mongoose = require("mongoose");

const ProfileScheme = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
    required: true,
  },
  githubusername: {
    type: String,
  },
  experiences: [
    {
      title: {
        type: String,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    avarage: {
      type: Number,
      default: 0,
    },
    ratings: [
      {
        rating: {
          type: Number,
          required: true,
        },
        userId: {
          type: String,
          required: true,
          unique: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  tasks: [
    {
      taskName: {
        type: String,
        required: true,
      },
      taskId: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileScheme);
