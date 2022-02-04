import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import TodoForm from '../components/TodoForm';

describe('TodoForm', () => {
  // input과 버튼 있는지 확인한다.

  it('is button and input exist', () => {
    render(<TodoForm />);
    const addButton = screen.getByTestId('addButton');
    const addInput = screen.getByPlaceholderText('what you want to do');

    expect(addInput).toHaveTextContent('');
    expect(addButton).toHaveTextContent('add');
  });

  it('change input state', () => {
    render(<TodoForm />);
    const addInput = screen.getByPlaceholderText('what you want to do');

    userEvent.type(addInput, 'e2e test 하기');
    expect(addInput).toHaveValue('e2e test 하기');
  });
});
