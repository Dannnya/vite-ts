import { User } from './components/User';
import { Button } from './components/Button';
import { UserInfo } from './components/UserInfo';
import { Admin } from './components/Admin';
import { Counter } from './components/Counter';
import type { Info, AdminInfo } from './types';
import { Todo } from './components/Todo';
import { Form } from './components/Form';
import { CounterComponent } from './components/CounterComponent';
import { Fetch } from './components/Fetch';
import { UserList } from './components/UserList';
import { FormHook } from './components/FormHook';
import { FetchTodos } from './components/FetchTodos';
import { Suspense } from 'react';
// import './App.css';

function App() {
  const user: Info = {
    id: 1,
    name: 'qwe',
    email: 'qwe@gmail.com',
  };

  const admin: AdminInfo = {
    id: 2,
    name: 'qweqweqwe',
    email: 'qweqweqwe@gmail.com',
    role: 'admin',
    lastLogin: new Date(),
  }

  return (
    <div>
      <User name='qwe' age={1000} isStudent={true} />
      <Button label='click' onClick={() => console.log('Clicked')} disabled={false} />
      <UserInfo user={ user } />
      <Admin admin={admin} />
      <Counter />

      <Todo />

      <Form />

      <CounterComponent />

      <Fetch />

      <UserList />
      <br/>
      <FormHook />

      <Suspense>
        <FetchTodos />
      </Suspense>
    </div>
  )
};

export default App;