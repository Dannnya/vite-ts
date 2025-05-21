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
import { Suspense, useState } from 'react';
import { Card } from './components/Card';
import { ThemeProvider } from './components/Theme';
import { Home } from './components/UseTransitionHook/Home';
import { Posts } from './components/UseTransitionHook/Posts';
import { Contact } from './components/UseTransitionHook/Contact';
// import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'posts':
        return <Posts />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

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

      <div className='tabs'>
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('contact')}>Contact</button>
        <button onClick={() => setActiveTab('posts')}>Posts</button>
      </div>

      <div>{renderContent()}</div>

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

      <ThemeProvider>
        <Card />
      </ThemeProvider>
    </div>
  )
};

export default App;