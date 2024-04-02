const { Team } = require("../Database/Database.js");

async function getTeamById(req, res) {
  try {
    const teamId = req.params.id;

    // Check if team ID is provided
    if (!teamId) {
      return res.status(400).json({ error: "Team ID is required" });
    }

    // Find the team by ID
    const team = await Team.findById(teamId).populate("members");

    // Check if team exists
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.status(200).json({ team });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = getTeamById;
