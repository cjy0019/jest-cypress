import { render, screen } from '@testing-library/react';
import App from './App';

describe('Redering Application', () => {
  test('is title exist', () => {
    render(<App />);
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent('TO-DO-LIST');
  });
});
