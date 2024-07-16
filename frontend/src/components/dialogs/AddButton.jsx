import { SquarePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import AddCategoryForm from "../forms/AddCategoryForm";
import AddAreaForm from "../forms/AddAreaForm";
import AddBusinessForm from "../forms/AddBusinessForm";

export default function AddButton({ type }) {
  return (
    <Dialog>
      <DialogTrigger>
        <SquarePlus strokeWidth={2} size={32} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new {type}</DialogTitle>
        </DialogHeader>
        {type === "category" && <AddCategoryForm />}
        {type === "area" && <AddAreaForm />}
        {type === "business" && <AddBusinessForm />}
      </DialogContent>
    </Dialog>
  );
}
