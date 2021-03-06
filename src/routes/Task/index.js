const Task = require('@controllers/Task');

const taskRoutes = app => {
  /* Add your routes here */
  app.get('/tasks', Task.findAllController);
  app.get('/task/:taskId', Task.findOneController);
  app.post('/task/create', Task.createController);
  app.put('/task/:taskId/update', Task.updateController);
  app.delete('/task/:taskId/delete', Task.deleteController);
}

module.exports = taskRoutes;