import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function DeleteAccount() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          type="button"
          className="extraSmall text-muted-foreground hover:text-destructive"
          size="xs"
        >
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account. You will not be able
            to get your data back.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">No</Button>
          </DialogClose>
          <Button variant="destructive">Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
