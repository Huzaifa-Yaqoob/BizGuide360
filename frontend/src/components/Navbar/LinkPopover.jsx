import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";

export default function LinkPopover() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button size="icon">{isOpen ? <X /> : <AlignJustify />}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <NavLinks />
      </PopoverContent>
    </Popover>
  );
}
