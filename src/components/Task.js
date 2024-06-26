import React from 'react';
import '../styleSheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {text}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );    
}

export default Task;