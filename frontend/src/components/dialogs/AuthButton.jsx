import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";

export default function AuthButton() {
  const authDialogStatus = useSelector((state) => state.authStatus.value);
  const [isRegisterForm, setRegisterForm] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (authDialogStatus === "Register" || authDialogStatus === "Register2") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [authDialogStatus]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} className="shadow active:scale-90">
          Register
        </Button>
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
