const { User } = require("../Database/Database.js"); // Assuming your user schema/model is in a separate file

function deleteUser(req, res) {
  const userId = req.params.id; // Assuming your user ID parameter is named "id"

  User.findByIdAndDelete(userId)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res
        .status(200)
        .json({ message: "User deleted successfully", user: deletedUser });
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
}

module.exports = deleteUser;
