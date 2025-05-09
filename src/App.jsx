import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import MainLayout from './MainLaout';
import ChatList from './components/ChatList';
import Chat from './pages/Chat/Chat';
import Authform from './components/auth/AuthForm';
import Verify from './pages/Verify/Verify';
import { useContext } from 'react';
import { Context } from './context/context';

function App() {
  const user = useContext(Context);

  const PrivateRoute = ({element}) => {
    return user.access_token ? element : <Navigate to="/signin"/>;
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/chat' element={<PrivateRoute element={<Chat />}/>} />
        <Route path='/favorites' element={<ChatList />} />
        <Route path='/archive' element={<ChatList />} />
        <Route path='/settings' element={<ChatList />} />

        {/* Public Routes */}
        <Route path='/' element={<Authform />} />
        <Route path='/signin' element={<Authform mode="Sign In" />} />
        <Route path='/signup' element={<Authform mode="Sign Up" />} />
        <Route path='/verify' element={<Verify />} />
      </Route>
    </Routes>
  );
}

export default App;