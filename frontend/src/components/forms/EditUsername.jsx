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

import { editUsernameFormSchema } from "@/lib/zod/updateUseData";

export default function EditUsername() {
  const { userData: data } = useSelector((state) => state.userData.data);
  const form = useForm({
    resolver: zodResolver(editUsernameFormSchema),
    defaultValues: {
      username: data ? data.username : "",
    },
  });

  console.log(data);

  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function reset() {
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <Button type="submit">Edit</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
