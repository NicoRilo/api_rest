import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTareas(datos.slice(0, 10));
      })
      .catch(error => console.error("Error cargando:", error));
  }, []);


  const agregarTarea = (nuevoTitulo) => {
    const nuevaTareaObjeto = {
      title: nuevoTitulo,
      completed: false,
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevaTareaObjeto)
    })
      .then(respuesta => respuesta.json())
      .then(tareaCreada => {
        const tareaFinal = { ...tareaCreada, id: Date.now() };
        setTareas([tareaFinal, ...tareas]);
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', fontFamily: 'sans-serif', background: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Mi Lista de Tareas</h1>
      
      <TaskForm onAddTask={agregarTarea} />
      <TaskList tareas={tareas} />
    </div>
  );
}

export default App;