import express from "express";
import {
  addDiet,
  addWorkout,
  createAccount,
  deleteDiet,
  deleteUser,
  deleteWorkout,
  getAllDietPlans,
  getAllUsers,
  getAllWorkoutPlans,
  updateDiet,
  updateProfile,
  updateWorkout,
  userLogin
} from "../Controllers/userController.js";
const router = express.Router();
router.post("/createaccount", createAccount);
router.get("/userlogin/", userLogin);
router.get("/getalldietplans", getAllDietPlans);
router.get("/getallworkoutplans", getAllWorkoutPlans);
router.get("/getallusers", getAllUsers);
router.post("/adddiet", addDiet);
router.post("/addworkout", addWorkout);
router.put("/editdiet", updateDiet);
router.put("/editworkout", updateWorkout);
router.put("/editprofile", updateProfile);
router.delete("/deletediet", deleteDiet);
router.delete("/deleteworkout", deleteWorkout);
router.delete("/deleteuser", deleteUser);

export default router;
