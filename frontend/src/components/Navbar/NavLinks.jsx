import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import AuthButton from "../dialogs/AuthButton";
import Otp from "../dialogs/Otp";

export default function NavLinks() {
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
        <AuthButton />
        <Otp />
      </li>
    </ul>
  );
}
