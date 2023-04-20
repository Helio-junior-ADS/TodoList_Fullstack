const connection = require("./connection");


const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTasks = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString(); 

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'

  const [createdTask] = await connection.execute(query, [title, 'PENDENTE', dateUTC ])
  return {insertId:createdTask.insertId};
};

const deleteTasks = async (id) => {
  const [removedTasks] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
  return removedTasks;
}

const updateTasks = async (id, task) => {
  const {title, status} = task;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'

  const [updatedTasks] = await connection.execute(query, [title, status, id]);
  return updatedTasks;
}



module.exports = {
  getAll,
  createTasks,
  deleteTasks,
  updateTasks
};
