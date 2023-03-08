import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "./useTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";

function AppUI() {

    const {

            error, 
            loading, 
            searchedTodos, 
            onComplete, 
            onDelete,
            openModal,
            setOpenModal,
            totalTodos, 
            completedTodos,
            searchValue, 
            setSearchValue

        } = React.useContext(TodoContext);

    return (

        <React.Fragment>

            <TodoHeader>

                <TodoCounter
                
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}

                />

                <TodoSearch
                
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}

                />

            </TodoHeader>
            

            <TodoList>

                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

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