import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import VerifyEmailForm from "../forms/VerifyEmailForm";
import { Button } from "../ui/button";
import { openRegister } from "@/store/states/authStatus";

export default function Otp() {
  const authDialogStatus = useSelector((state) => state.authStatus.value);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authDialogStatus === "VerifyEmail") {
      setOpen(true);
    } else if (authDialogStatus === "Register") {
      setOpen(false);
    }
  }, [authDialogStatus]);

  return (
    <Dialog open={true} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="h3 text-center">Verify Email</DialogTitle>
        </DialogHeader>
        <VerifyEmailForm />
        <p>
          Not my email?{" "}
          <Button
            type="button"
            onClick={() => dispatch(openRegister())}
            variant="link"
            className="p-0"
          >
            Go Back
          </Button>
        </p>
      </DialogContent>
    </Dialog>
  );
}
