import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { DialogFooter } from "../ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonLoading } from "../common/ButtonLoading";
import ErrorMessage from "../common/ErrorMessage";
import useEditUsername from "@/hooks/useEditUsername";
import { editUsernameFormSchema } from "@/lib/zod/updateUseData";
import isEmptyObject from "@/lib/isEmptyObject";

export default function EditUsername({ setIsOpen }) {
  const { isLoading, error, editUsername } = useEditUsername();
  const { userData: data } = useSelector((state) => state.userData.data);
  const form = useForm({
    resolver: zodResolver(editUsernameFormSchema),
    defaultValues: {
      username: data ? data.username : "",
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const ok = await editUsername(values);
    if (ok) {
      setIsOpen(false);
    }
  }

  function reset() {
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="button" onClick={reset} variant="outline">
            Reset
          </Button>
          <ButtonLoading type="submit" isLoading={isLoading}>
            Ok
          </ButtonLoading>
        </DialogFooter>
      </form>
    </Form>
  );
}
