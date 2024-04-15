import mongoose from "mongoose";
const userData = new mongoose.Schema({
  videoid: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  creationdate: {
    type: String,
    required: true
  }
});
//userdetail is the modelname.using these userdetail we can able to create,read,update,delete datas in userdetails collection
const Workout = mongoose.model("workout", userData);

export default Workout;
