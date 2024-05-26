import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AIBot() {
  const status = useSelector((state) => state.userData.status);
  if (status === "") {
    return <Navigate to="/?login=false" replace />;
  }
  return <div className="flex-grow">AI Bot</div>;
}
