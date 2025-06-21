const express = require('express');
const {
  getBoards,
  createBoard,
  getTasksByBoard,
  createTaskInBoard
} = require('../controllers/boardController');

const router = express.Router();

router.get('/', getBoards);
router.post('/', createBoard);
router.get('/:id/tasks', getTasksByBoard);
router.post('/:id/tasks', createTaskInBoard);

module.exports = router;
