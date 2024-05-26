import { useSelector } from "react-redux";

export default function BusinessEditForm() {
  const status = useSelector((state) => state.userData.status);
  if (status === "") {
    return <Navigate to="/" replace />;
  }
  return <div className="flex-grow">Business Edit Form</div>;
}
