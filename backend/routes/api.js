const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Project = require('../models/Project');

// POST /api/messages
router.post('/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const saved = await Message.create({ name, email, message });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/projects
// sample: returns seeded projects or empty array
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().limit(20);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;