import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  //use useNavigate in useEffect otherwise i should return jsx component other wise there will be an error
  // const navigate = useNavigate();
  const { user } = useAppContext();
  if (!user) {
    //return navigate("/landing");
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
