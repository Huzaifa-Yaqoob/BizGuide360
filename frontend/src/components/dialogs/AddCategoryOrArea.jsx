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

export default function AddCategoryOrArea({ type }) {
  console.log(type === "category" && "ass");
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
        {/* {} */}
      </DialogContent>
    </Dialog>
  );
}
