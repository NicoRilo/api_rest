function TaskItem({ tarea }) {
  const colorEstado = tarea.completed ? 'green' : 'darkorange';
  const textoEstado = tarea.completed ? 'Completada' : 'Pendiente';

  return (
    <li style={{ 
      padding: '15px', 
      borderBottom: '1px solid #ccc', 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#fff'
    }}>
      <span style={{ fontSize: '16px' }}>{tarea.title}</span>
      <b style={{ color: colorEstado }}>{textoEstado}</b>
    </li>
  );
}

export default TaskItem;