import NavLinks from "./NavLinks";
import LinkPopover from "./LinkPopover";

export default function Navbar() {
  return (
    <nav className="bg-background shadow my-container sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="">
            <img src="/logo.svg" alt="logo" className="size-12" />
          </span>
          <span className="h5 text-primary hidden md:block">BizGuide360</span>
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <LinkPopover />
        </div>
      </div>
    </nav>
  );
}
