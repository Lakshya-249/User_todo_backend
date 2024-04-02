const { User } = require("../Database/Database.js");

function addUser(req, res) {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  } = req.body;

  // Check if all required fields are present
  if (
    !id ||
    !first_name ||
    !last_name ||
    !email ||
    !gender ||
    !avatar ||
    !domain ||
    available === undefined
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Proceed to add user if all required fields are present
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
}

module.exports = addUser;
