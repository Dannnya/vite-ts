import { useState } from 'react';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

export const Todo = () => {
    const [todo, setTodo] = useState<Todo[]>([]);

    const addTodo = (task: string) => {
        const newTodo: Todo = {
            id: todo.length + 1,
            task,
            completed: false,
        }

        setTodo(prevTodo => [...prevTodo, newTodo]);
    }
    

    return (
        <div>
            <h3>Todo:</h3>
            <button onClick={() => addTodo('New Todo')}>Add Todo</button>
            <ul>
                {todo.map(item => (
                    <li key={item.id}>{item.task} {item.completed ? 'Completed' : ''}</li>
                ))}
            </ul>
        </div>
    )
};
