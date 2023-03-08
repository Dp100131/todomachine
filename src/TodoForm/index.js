import React from "react";
import './TodoForm.css'

function TodoForm({addTodo, setOpenModal, openModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    function onCancel() {

        setOpenModal(!openModal);
        
    }

    function onAdd(event) {

        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(!openModal)
        
    }

    return(

        <form onSubmit={onAdd}>

            <label>Escribe tu nuevo TODO</label>

            <textarea 

                /* value={newTodoValue} */

                onChange={(event) => {

                    setNewTodoValue(event.target.value)

                }}
                
                placeholder="Escribe tu tarea aquí..."
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button
                className="TodoForm-button TodoForm-button--add"
                type="submit">
                    Añadir
                </button>
            </div>
        </form>

    )
    
}

export {TodoForm}