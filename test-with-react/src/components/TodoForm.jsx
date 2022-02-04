import React, { useState } from 'react';
import styles from './todoForm.module.css';

const TodoForm = () => {
  // style destructuring
  const { addButton, addInput } = styles;

  const [addTodo, setAddTodo] = useState('');

  const onChange = (e) => {
    setAddTodo(e.target.value);
  };

  return (
    <form>
      <input
        className={addInput}
        onChange={onChange}
        value={addTodo}
        data-testid="addInput"
        type="text"
        placeholder="what you want to do"
      />
      <button className={addButton} type="submit" data-testid="addButton">
        add
      </button>
    </form>
  );
};

export default TodoForm;
