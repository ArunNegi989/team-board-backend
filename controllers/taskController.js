const Task = require('../models/Task');

// PUT /tasks/:id
const updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Task not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

// DELETE /tasks/:id
const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = {
  updateTask,
  deleteTask
};
