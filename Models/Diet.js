import mongoose from "mongoose";
const userData = new mongoose.Schema({
  dishname: {
    type: String,
    required: true
  },
  dishimageurl: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  calories: {
    type: String,
    required: true
  },
  protein: {
    type: String,
    required: true
  },
  carbohyderates: {
    type: String,
    required: true
  },
  fat: {
    type: String,
    required: true
  },
  category: {
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
const Diet = mongoose.model("diet", userData);

export default Diet;
