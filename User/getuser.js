const { User } = require("../Database/Database.js"); // Assuming your user schema/model is in a separate file

function getUserById(req, res) {
  const customId = req.params.id; // Assuming your custom ID parameter is named "customId"

  User.findOne({ id: customId }) // Assuming your custom ID field name is "id"
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
}

async function searchUsersByFirstName(req, res) {
  try {
    const searchQuery = req.query.firstname; // Assuming the search query is provided as a query parameter named "firstName"

    if (!searchQuery) {
      return res.status(400).json({ error: "Search query is required" });
    }

    // Search users by first name that starts with the provided query string
    const users = await User.find({
      first_name: { $regex: new RegExp(`^${searchQuery}`, "i") },
    }).limit(10);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", message: error });
  }
}

module.exports = { getUserById, searchUsersByFirstName };
