import React from 'react';
import './TodoItem.css';
import {AiOutlineCheck} from "react-icons/ai"
import {BsFillTrash3Fill} from "react-icons/bs"

function TodoItem(props) {

  /* const onComplete = () => {

    alert('Task completed: ' + props.text)

  } */

  /* const onDelete = () => {

    alert('Tast deleted: ' + props.text)

  } */

  return (
    <li className="TodoItem">
      <span

        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      
        onClick = {props.onComplete}

      >
        <AiOutlineCheck/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
      
        className="Icon Icon-delete"

        onClick={props.onDelete}

      >
        <BsFillTrash3Fill/>
      </span>
    </li>
  );
}

export { TodoItem };