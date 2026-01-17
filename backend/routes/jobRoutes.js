const express = require("express");
const Job = require("../models/Job");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  if (req.user.role !== "recruiter")
    return res.status(403).json("Only recruiters can post jobs");

  const job = await Job.create({
    ...req.body,
    postedBy: req.user.id
  });
  res.json(job);
});

router.get("/", async (req, res) => {
  const jobs = await Job.find().populate("postedBy", "name");
  res.json(jobs);
});

module.exports = router;
