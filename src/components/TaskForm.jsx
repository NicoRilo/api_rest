import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [texto, setTexto] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;

    onAddTask(texto);
    setTexto("");
  };

  return (
    <form onSubmit={enviarFormulario} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: '10px', flex: 1, fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Añadir
      </button>
    </form>
  );
}

export default TaskForm;