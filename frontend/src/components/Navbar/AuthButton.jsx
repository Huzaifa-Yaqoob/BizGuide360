import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

export default function AuthButton() {
  const [isRegisterForm, setRegisterForm] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="shadow">Register</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="h3 text-center">
            {isRegisterForm ? "Register" : "Log In"}
          </DialogTitle>
        </DialogHeader>
        {isRegisterForm ? <RegisterForm /> : <LoginForm />}
        <div className="flex items-center gap-1">
          <p>
            {isRegisterForm
              ? "Already have an account."
              : "Don`t have an account."}
          </p>
          <Button
            type="button"
            variant={"link"}
            onClick={() => setRegisterForm(!isRegisterForm)}
            className="p-0 m-0"
          >
            {isRegisterForm ? "Log In" : "Register"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
