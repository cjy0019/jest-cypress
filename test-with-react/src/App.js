import TodoForm from './components/TodoForm';
import styles from './App.module.css';

function App() {
  const { container } = styles;

  return (
    <div className={container}>
      <h1>TO-DO-LIST</h1>
      <TodoForm />
    </div>
  );
}

export default App;
