const express = require("express");
const { getUserById, searchUsersByFirstName } = require("./User/getuser");
const addUser = require("./User/adduser");
const updateUser = require("./User/updateuser");
const deleteUser = require("./User/deleteuser");
const filterUsers = require("./User/filteruser");
const getCollectionCount = require("./User/getusercout");
const createTeam = require("./Team/createteam");
const getTeamById = require("./Team/getTeam");
const router = express.Router();

router.get("/users", filterUsers);
router.get("/users/:id", getUserById);
router.post("/users", addUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/user/name", searchUsersByFirstName);
router.get("/usercount", getCollectionCount);

router.post("/team", createTeam);
router.get("/team/:id", getTeamById);

module.exports = router;
