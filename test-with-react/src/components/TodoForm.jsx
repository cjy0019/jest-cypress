import React, { useState } from 'react';

const TodoForm = () => {
  const [addTodo, setAddTodo] = useState('');

  const onChange = (e) => {
    setAddTodo(e.target.value);
  };

  return (
    <form>
      <input
        onChange={onChange}
        value={addTodo}
        data-testid="addInput"
        type="text"
        placeholder="add your todo"
      />
      <button type="submit" data-testid="addButton">
        add
      </button>
    </form>
  );
};

export default TodoForm;
