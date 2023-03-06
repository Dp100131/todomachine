import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {

    const {
            error, 
            loading, 
            searchedTodos, 
            onComplete, 
            onDelete,
            openModal,
            setOpenModal
        } = React.useContext(TodoContext);

    return (

        <React.Fragment>

            <TodoCounter />

            <TodoSearch />

            <TodoList>

            {error && <p>Desesperate, hubo un error...</p>}
            {loading && <p>Estamos cargando, no desesperes...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer todo!</p>}

                {searchedTodos.map(todo => (

                    <TodoItem 

                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete = {() => onComplete(todo.text)}
                        onDelete = {() => onDelete(todo.text)}
                    />

                ))}

            </TodoList>

            

            {openModal && (

                <Modal>
                    <TodoForm />
                </Modal>

            )}

            <CreateTodoButton />

        </React.Fragment>

    );

}

export {AppUI};