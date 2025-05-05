// import './App.css';
import { User } from './components/User';
import { Button } from './components/Button';
import { UserInfo } from './components/UserInfo';
import { Admin } from './components/Admin';
import type { Info, AdminInfo } from './types';

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
      <Admin admin={ admin } />
    </div>
  )
};

export default App;