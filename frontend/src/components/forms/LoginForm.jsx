import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { logInFormSchema } from "@/lib/zod/authFormsSchema";
import { DialogFooter, DialogClose } from "../ui/dialog";
import useLogIn from "@/hooks/useLogIn";
import { ButtonLoading } from "../common/ButtonLoading";
import ErrorMessage from "../common/ErrorMessage";
import isEmptyObject from "@/lib/isEmptyObject";

export default function LoginForm() {
  const { isLoading, error, logIn, resetErrors } = useLogIn();
  const form = useForm({
    resolver: zodResolver(logInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!isEmptyObject(error)) {
      if (error.password) {
        form.setError("password", { type: "custom", message: error.password });
      }
      if (error.email) {
        form.setError("email", { type: "custom", message: error.email });
      }
    }
  }, [error]);

  async function onSubmit(data) {
    await logIn(data);
  }

  function resetHandler() {
    form.reset();
    resetErrors();
  }

  return (
    <div>
      {error.msg && <ErrorMessage msg={error.msg} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="py-2">
            <Button
              type="button"
              onClick={resetHandler}
              variant={"outline"}
              className="shadow w-full"
            >
              Reset
            </Button>
            <ButtonLoading
              isLoading={isLoading}
              type="submit"
              className="shadow w-full"
            >
              Log In
            </ButtonLoading>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
}
