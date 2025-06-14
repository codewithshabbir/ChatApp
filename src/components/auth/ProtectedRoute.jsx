import { Navigate } from "react-router";
import { useUser } from "../../context/UserContext";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-xl font-bold">Loading...</h1>
  </div>
);

const ProtectedRoute = ({ children }) => {
  const { user, dataLoading } = useUser();
  if(dataLoading) return <Loader/>
  console.log(user);
  
  if (!user) {
    return <Navigate to={'/signin'} replace/>
  }
  return children;
};

export default ProtectedRoute;
