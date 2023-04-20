const express = require('express');

const router = express.Router();

const tasksControlle = require('./controllers/tasksControlle')
const tasksMiddlewares = require('./middlewares/tasksMiddlewares')

router.get('/tasks',tasksControlle.getAll);
router.post('/tasks',tasksMiddlewares.validateFieldtTitle, tasksControlle.createTasks);
router.delete('/tasks/:id',tasksControlle.deleteTasks);
router.put('/tasks/:id',
  tasksMiddlewares.validateFieldtTitle,
  tasksMiddlewares.validateFieldStatus,
  tasksControlle.updateTasks
);



module.exports = router