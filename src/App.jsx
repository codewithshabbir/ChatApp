import './App.css';
import { Route, Routes } from 'react-router';
import MainLayout from './MainLaout';
import ChatList from './components/ChatList';
import Chat from './pages/Chat/Chat';
import SignupForm from './components/auth/SignUp';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<SignupForm />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/favorites' element={<ChatList />} />
        <Route path='/archive' element={<ChatList />} />
        <Route path='/settings' element={<ChatList />} />
      </Route>
    </Routes>
  );
}

export default App;