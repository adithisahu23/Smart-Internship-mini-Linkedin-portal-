const express = require("express");
const Application = require("../models/Application");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:jobId", auth, async (req, res) => {
  const application = await Application.create({
    jobId: req.params.jobId,
    studentId: req.user.id
  });
  res.json(application);
});

module.exports = router;
