import './App.css';
import { Route, Routes } from 'react-router';
import MainLayout from './MainLaout';
import ChatList from './components/ChatList';
import Chat from './pages/Chat/Chat';
import Authform from './components/auth/AuthForm';
import Verify from './pages/Verify/Verify';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Authform />} />
        <Route path='/signin' element={<Authform mode="Sign In"/>}/>
        <Route path='/signup' element={<Authform mode="Sign Up"/>}/>
        <Route path='/verify' element={<Verify/>} />

        <Route path='/chat' element={<Chat />} />
        <Route path='/favorites' element={<ChatList />} />
        <Route path='/archive' element={<ChatList />} />
        <Route path='/settings' element={<ChatList />} />
      </Route>
    </Routes>
  );
}

export default App;