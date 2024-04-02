const { User } = require("../Database/Database.js"); // Assuming your user model is named "User"

async function getCollectionCount(req, res) {
  try {
    // Retrieve the count of documents in the User collection
    const count = await User.countDocuments();

    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = getCollectionCount;
