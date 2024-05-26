import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileSidePanel from "@/components/sections/ProfileSidePanel";

export default function ProfileLayout() {
  const status = useSelector((state) => state.userData.status);
  if (status === "") {
    return <Navigate to="/?login=false" replace />;
  }
  return (
    <div className="md:flex gap-4 flex-grow">
      <ProfileSidePanel />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
