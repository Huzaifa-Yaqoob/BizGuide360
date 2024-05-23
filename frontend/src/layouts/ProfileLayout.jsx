import { Outlet } from "react-router-dom";
import ProfileSidePanel from "@/components/sections/ProfileSidePanel";

export default function ProfileLayout() {
  return (
    <div className="md:flex gap-4 flex-grow">
      <ProfileSidePanel />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
