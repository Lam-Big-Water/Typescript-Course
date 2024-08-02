import { useState, useEffect, useReducer, useRef, useCallback } from 'react';
import './App.css';

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

type ActionType =
  | { type: 'ADD'; text: string }
  | { type: 'Remove'; id: number }

const App = () => {


  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setPayload(data);
      });
  }, []);


  const [todos, dispatch] = useReducer(
    (state: Todo[], action: ActionType) => {
      switch (action.type) {
        case "ADD":
          return [
            ...state,
            {
              id: state.length,
              text: action.text,
              done: false,
            }
          ]
        case "Remove":
          return state.filter(({ id }) => id !== action.id)
        default:
          throw new Error()
      }
    },
    []
  );

  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD',
        text: newTodoRef.current.value
      });
      newTodoRef.current.value = "";
    }
  }, [])

  return (
    <div>
      <Heading title='Hook' />

      <div>{JSON.stringify(payload)}</div>

      <Heading title='useReducer' />
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() =>
              dispatch ({
                type: 'Remove',
                id: todo.id,
              })
            }>
            Remove
          </button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>

  )
}

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>


export default App