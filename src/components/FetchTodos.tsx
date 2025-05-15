import { use } from 'react';

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json()
};

export const FetchTodos = () => {
    const todos = use(fetchData());
    
    return (
        <div>
            { todos.title }
        </div>
    )
};