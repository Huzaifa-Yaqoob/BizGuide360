import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthButton from "../dialogs/AuthButton";
import Otp from "../dialogs/Otp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavLinks() {
  const user = useSelector((state) => state.userData);

  return (
    <ul className="flex flex-col md:flex-row items-center gap-8">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-muted"
              : isActive
              ? "text-primary underline underline-offset-4"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ai-bot"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-muted"
              : isActive
              ? "text-primary underline underline-offset-4"
              : ""
          }
        >
          AI Bot
        </NavLink>
      </li>
      <li>
        {user.status === "LOGIN" ? (
          <NavLink to="/profile">
            <Avatar>
              <AvatarImage src="/defaultAvatar.jpeg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavLink>
        ) : (
          <>
            <AuthButton />
            <Otp />
          </>
        )}
      </li>
    </ul>
  );
}
