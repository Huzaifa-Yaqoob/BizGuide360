import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { registerFormSchema } from "@/lib/zod/authFormsSchema";
import { DialogFooter } from "../ui/dialog";
import useRegister from "@/hooks/useRegister";
import { ButtonLoading } from "../common/ButtonLoading";
import { reset, addValues } from "@/store/states/registerForm";
import isEmptyObject from "@/lib/isEmptyObject";
import ErrorMessage from "../common/ErrorMessage";

export default function RegisterForm() {
  const formData = useSelector((state) => state.registerForm.value);
  const dispatch = useDispatch();
  const { isLoading, error, register, resetErrors } = useRegister();

  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    if (!isEmptyObject(formData)) {
      for (const key in formData) {
        form.setValue(key, formData[key]);
      }
    }
  }, [formData]);

  useEffect(() => {
    if (isEmptyObject(error)) return;
    if (error.email) {
      form.setError("email", { message: error.email }, { shouldFocus: true });
    }
    if (error.username) {
      form.setError("username", { message: error.username });
    }
    if (error.password) {
      form.setError("password", { message: error.password });
    }
  }, [error]);

  async function onSubmit(data) {
    dispatch(addValues(data));
    await register(data);
  }

  return (
    <div className="space-y-2">
      <>
        {!isEmptyObject(error) && error.msg && <ErrorMessage msg={error.msg} />}
      </>
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
                <FormDescription>
                  Email can not be changed after registering.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
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
              variant={"outline"}
              className="shadow w-full"
              onClick={() => {
                form.reset();
                resetErrors();
                dispatch(reset());
              }}
            >
              Reset
            </Button>
            <ButtonLoading isLoading={isLoading} className="shadow w-full">
              Register
            </ButtonLoading>
          </DialogFooter>
        </form>
      </Form>
    </div>
  );
}
