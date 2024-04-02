const { User, Team } = require("../Database/Database.js");

async function createTeam(req, res) {
  try {
    const { name, members } = req.body;

    // Check if name and members are provided
    if (!name || !members) {
      return res.status(400).json({ error: "Name and members are required" });
    }

    // Check if members array is not empty
    if (!members.length) {
      return res.status(400).json({ error: "At least one member is required" });
    }

    // Check if all members exist
    const users = await User.find({ _id: { $in: members } });
    if (users.length !== members.length) {
      return res
        .status(400)
        .json({ error: "One or more members do not exist" });
    }

    // Create the team
    const team = new Team({
      name,
      members,
    });

    await team.save();

    res.status(201).json({ message: "Team created successfully", team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = createTeam;
