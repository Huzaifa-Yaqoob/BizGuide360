import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileSidePanel from "@/components/sections/ProfileSidePanel";

export default function ProfileLayout() {
  const isLoggedIn = useSelector((state) => state.userData.isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/?login=false" replace={true} />;
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
