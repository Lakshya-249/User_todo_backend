const { User } = require("../Database/Database.js");

async function filterUsers(req, res) {
  try {
    const page = parseInt(req.query.page) || 1; // Current page number, default to 1 if not provided
    const limit = parseInt(req.query.limit) || 20; // Number of users per page, default to 20 if not provided
    const skip = (page - 1) * limit; // Number of users to skip

    let filter = {};

    // Check if domain filter is provided
    if (req.query.domain) {
      const domains = req.query.domain.split(",");
      filter.domain = { $in: domains };
    }

    // Check if gender filter is provided
    if (req.query.gender) {
      const genders = req.query.gender.split(",");
      filter.gender = { $in: genders };
    }

    // Check if availability filter is provided
    if (req.query.available) {
      filter.available = req.query.available === "true";
    }

    // Query users based on filters with pagination
    const users = await User.find(filter).skip(skip).limit(limit);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = filterUsers;
