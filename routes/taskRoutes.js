const express = require('express');
const {
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const Task = require('../models/Task');

const router = express.Router();

router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
