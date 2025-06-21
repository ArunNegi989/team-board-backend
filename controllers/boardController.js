const Board = require('../models/Board');
const Task = require('../models/Task');

// GET /boards
const getBoards = async (req, res) => {
  try {
    const boards = await Board.find().sort({ createdAt: -1 });
    res.json(boards);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch boards' });
  }
};

// POST /boards
const createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Board name is required' });

    const board = new Board({ name });
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create board' });
  }
};

// GET /boards/:id/tasks
const getTasksByBoard = async (req, res) => {
  try {
    const tasks = await Task.find({ boardId: req.params.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// POST /boards/:id/tasks
const createTaskInBoard = async (req, res) => {
  try {
    const { title, description, status, priority, assignedTo, dueDate } = req.body;

    if (!title) return res.status(400).json({ error: 'Title is required' });

    const task = new Task({
      title,
      description,
      status,
      priority,
      assignedTo,
      dueDate,
      boardId: req.params.id
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

module.exports = {
  getBoards,
  createBoard,
  getTasksByBoard,
  createTaskInBoard
};
