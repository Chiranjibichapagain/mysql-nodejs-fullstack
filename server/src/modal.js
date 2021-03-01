const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default:false,
  }
});

module.exports = mongoose.model("Todo", todoSchema);