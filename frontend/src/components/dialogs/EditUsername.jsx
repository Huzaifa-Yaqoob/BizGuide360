import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import EditUserNameForm from "../forms/EditUsername";

export default function EditUsername() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          type="button"
          className="extraSmall text-muted-foreground hover:text-primary"
          size="xs"
        >
          Edit username
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="h4">Change Username</DialogTitle>
        </DialogHeader>
        <EditUserNameForm />
      </DialogContent>
    </Dialog>
  );
}
