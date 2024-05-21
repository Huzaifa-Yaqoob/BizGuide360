import { Skull } from "lucide-react";

export default function ErrorMessage({ msg }) {
  return (
    <div className="bg-destructive text-destructive-foreground p-2 rounded flex items-center gap-2">
      <Skull />
      {msg}
    </div>
  );
}
