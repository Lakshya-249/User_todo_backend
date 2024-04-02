const { User } = require("../Database/Database.js"); // Assuming your user schema/model is in a separate file

function updateUser(req, res) {
  const userId = req.params.id; // Assuming your user ID parameter is named "id"

  // Extract the fields to update from the request body
  const updatedFields = req.body;

  User.findByIdAndUpdate(userId, updatedFields, { new: true })
    .then((updatedUser) => {
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
}

module.exports = updateUser;
