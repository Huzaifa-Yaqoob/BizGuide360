import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AIBot() {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/?login=false" replace />;
  }
  return <div className="flex-grow">AI Bot</div>;
}
