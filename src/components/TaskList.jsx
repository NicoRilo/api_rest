import TaskItem from './TaskItem';

function TaskList({ tareas }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, border: '1px solid #ccc' }}>
      {tareas.map((item) => (
        <TaskItem key={item.id} tarea={item} />
      ))}
    </ul>
  );
}

export default TaskList;