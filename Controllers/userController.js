import asyncHandler from "express-async-handler";
import User from "../Models/User.js";
import Diet from "../Models/Diet.js";
import Workout from "../Models/Workout.js";

const createAccount = asyncHandler(async (req, res) => {
  const { username, email, password, address, mobile } = req.body;

  const userdata = new User({
    username: username,
    email: email,
    password: password,
    address: address,
    mobile: mobile
  });
  await userdata.save();
  res.json({
    status: 200,
    message: "Account Created Successfully"
  });
});

const addWorkout = asyncHandler(async (req, res) => {
  const { videoid, level, creationDate } = req.body;

  const userdata = new Workout({
    videoid: videoid,
    level: level,
    creationdate: creationDate
  });
  await userdata.save();
  res.json({
    status: 200,
    message: "Workout Added Successfully"
  });
});

const addDiet = asyncHandler(async (req, res) => {
  const {
    dishname,
    dishimageurl,
    quantity,
    calories,
    protein,
    carbohyderates,
    fat,
    category,
    level,
    creationDate
  } = req.body;

  const userdata = new Diet({
    dishname: dishname,
    dishimageurl: dishimageurl,
    quantity: quantity,
    calories: calories,
    protein: protein,
    carbohyderates: carbohyderates,
    fat: fat,
    category: category,
    level: level,
    creationdate: creationDate
  });
  await userdata.save();
  res.json({
    status: 200,
    message: "Diet Added Successfully"
  });
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.query;
  console.log(req.query);
  const userData = await User.find({ email: email, password: password });
  console.log(userData);
  if (userData) {
    return res.json({ status: 200, data: userData });
  }
  return res.json({ status: 401, message: "invalid email or password" });
});

const getAllDietPlans = asyncHandler(async (req, res) => {
  const userData = await Diet.find({});
  res.status(200).send(userData);
});
const getAllUsers = asyncHandler(async (req, res) => {
  const userData = await User.find({});
  res.status(200).send(userData);
});
const getAllWorkoutPlans = asyncHandler(async (req, res) => {
  const userData = await Workout.find({});
  res.status(200).send(userData);
});
const updateDiet = asyncHandler(async (req, res) => {
  const {
    id,
    dishname,
    dishimageurl,
    quantity,
    calories,
    protein,
    carbohyderates,
    fat,
    category,
    level,
    creationDate
  } = req.body;
  console.log(req.body);
  await Diet.updateOne(
    { _id: id },
    {
      $set: {
        dishname: dishname,
        dishimageurl: dishimageurl,
        quantity: quantity,
        calories: calories,
        protein: protein,
        carbohyderates: carbohyderates,
        fat: fat,
        category: category,
        level: level,
        creationdate: creationDate
      }
    }
  );
  res.json({ status: 200, message: "Diet Updated Successfully" });
});

const updateWorkout = asyncHandler(async (req, res) => {
  const { id, videoid, level, creationDate } = req.body;
  console.log(req.body);
  await Workout.updateOne(
    { _id: id },
    {
      $set: {
        videoid: videoid,
        level: level,
        creationdate: creationDate
      }
    }
  );
  res.json({ status: 200, message: "Workout Updated Successfully" });
});

const updateProfile = asyncHandler(async (req, res) => {
  const { id, username, email, password, address, mobile } = req.body;
  console.log(req.body);
  await User.updateOne(
    { _id: id },
    {
      $set: {
        username: username,
        email: email,
        password: password,
        address: address,
        mobile: mobile
      }
    }
  );
  res.json({ status: 200, message: "Workout Updated Successfully" });
});
const deleteDiet = asyncHandler(async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  await Diet.deleteOne({ _id: id });
  res.json({ status: 200 });
});
const deleteWorkout = asyncHandler(async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  await Workout.deleteOne({ _id: id });
  res.json({ status: 200 });
});
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.query;
  console.log(req.query);
  await User.deleteOne({ _id: id });
  res.json({ status: 200 });
});
export {
  createAccount,
  userLogin,
  getAllDietPlans,
  addDiet,
  deleteDiet,
  updateDiet,
  addWorkout,
  getAllWorkoutPlans,
  updateWorkout,
  deleteWorkout,
  getAllUsers,
  deleteUser,
  updateProfile
};
