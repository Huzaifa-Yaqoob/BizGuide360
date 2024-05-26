import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  UserCog,
  BriefcaseBusiness,
  BaggageClaim,
  MapPin,
  Puzzle,
  Handshake,
} from "lucide-react";
import { useSelector } from "react-redux";

const userLinks = [
  { name: "Account Setting", path: "/profile", icon: UserCog },
  {
    name: "My Businesses",
    path: "/profile/my-business",
    icon: BriefcaseBusiness,
  },
  {
    name: "My Claims",
    path: "/profile/my-claims",
    icon: BaggageClaim,
  },
];

const adminLinks = [
  {
    name: "Manage Categories",
    path: "/profile/manage-categories",
    icon: Puzzle,
    admin: true,
  },
  {
    name: "Manage Location",
    path: "/profile/manage-location",
    icon: MapPin,
    admin: true,
  },
  {
    name: "Claims Requests",
    path: "/profile/claim-requests",
    icon: Handshake,
    admin: true,
  },
];

export default function ProfileSidePanel() {
  const { userData: user } = useSelector((state) => state.userData.data);
  const location = useLocation();

  let links = userLinks;

  if (user && user.role === "admin") {
    links = userLinks.concat(adminLinks);
  }

  return (
    <section
      className="md:flex items-center px-8 sticky top-16 z-40 mt-4 md:mt-0"
      style={{ maxHeight: "calc(100svh - 8rem)" }}
    >
      <ul className="flex md:flex-col flex-row gap-4 p-4 bg-secondary rounded-lg">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`px-2 py-1 rounded flex-grow ${
              location.pathname === link.path
                ? "bg-primary text-primary-foreground"
                : "bg-accent"
            }`}
          >
            <li className="flex justify-center md:justify-normal gap-2 items-center">
              <link.icon />
              <span className="hidden md:block whitespace-nowrap">
                {link.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
