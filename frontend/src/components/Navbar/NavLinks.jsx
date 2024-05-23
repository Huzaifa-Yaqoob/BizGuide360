import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeIcon, BotMessageSquare } from "lucide-react";
import AuthButton from "../dialogs/AuthButton";
import Otp from "../dialogs/Otp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavLinks() {
  const user = useSelector((state) => state.userData);

  return (
    <ul className="flex flex-col md:flex-row items-center gap-8">
      <li className={user.status === "LOGIN" ? "md:order-3" : "order-3"}>
        {user.status === "LOGIN" ? (
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              `flex items-center gap-2  + ${
                isPending
                  ? "text-muted"
                  : isActive
                  ? "text-primary underline underline-offset-4"
                  : ""
              }`
            }
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src="/defaultAvatar.jpeg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="md:hidden">Profile</span>
          </NavLink>
        ) : (
          <>
            <AuthButton />
            <Otp />
          </>
        )}
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `flex items-center gap-2  + ${
              isPending
                ? "text-muted"
                : isActive
                ? "text-primary underline underline-offset-4"
                : ""
            }`
          }
        >
          <HomeIcon /> <span>Home</span>
        </NavLink>
      </li>
      <li className="order-1">
        <NavLink
          to="/ai-bot"
          className={({ isActive, isPending }) =>
            `flex items-center gap-2  + ${
              isPending
                ? "text-muted"
                : isActive
                ? "text-primary underline underline-offset-4"
                : ""
            }`
          }
        >
          <BotMessageSquare /> <span>Ai Bot</span>
        </NavLink>
      </li>
    </ul>
  );
}
