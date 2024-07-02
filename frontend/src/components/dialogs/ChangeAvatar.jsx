import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";
import ChangeAvatarForm from "../forms/ChangeAvatarForm";

export default function ChangeAvatar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="small" variant="outline" className="rounded-full p-1">
          <Pencil size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Avatar</DialogTitle>
        </DialogHeader>
        <ChangeAvatarForm />
      </DialogContent>
    </Dialog>
  );
}
