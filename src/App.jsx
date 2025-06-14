import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import MainLayout from "./MainLaout";
import ChatList from "./components/ChatList";
import Chat from "./pages/Chat/Chat";
import Authform from "./components/auth/AuthForm";
import Verify from "./pages/Verify/Verify";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useUser } from "./context/UserContext";

function App() {
  const {user} = useUser();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>}/>
        <Route path="/favorites" element={<ChatList />}/>
        <Route path="/archive" element={<ChatList />} />
        <Route path="/settings" element={<ChatList />} />

        {/* Public Routes */}
        <Route path="/" element={user ? <Navigate to={'/chat'} replace/> : <Authform />} />
        <Route path="/signin" element={user ? <Navigate to={'/chat'} replace/> : <Authform mode="Sign In" />} />
        <Route path="/signup" element={user ? <Navigate to={'/chat'} replace/> :<Authform mode="Sign Up" />} />
        <Route path="/verify" element={user ? <Navigate to={'/chat'} replace/> :<Verify />} />
      </Route>
    </Routes>
  );
}

export default App;
