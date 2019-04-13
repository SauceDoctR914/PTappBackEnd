import mongoose from "mongoose";
import validator from "validator";
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  age: {
    type: Number,

    validate(value) {
      if (value < 18) {
        throw new Error("Must be 18 or older to sign up!");
      }
    }

  },
  email: {
    type: String,

    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email Address is invalid");
      }
    },

    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,

    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Can not include password");
      }
    }

  }
});
export default User;