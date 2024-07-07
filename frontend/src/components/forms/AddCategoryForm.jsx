import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addCategoryFormSchema } from "@/lib/zod/addCategoryFormSchema";
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
import { DialogFooter } from "../ui/dialog";
import isEmptyObject from "@/lib/isEmptyObject";
import ErrorMessage from "../common/ErrorMessage";
import useAddCategory from "@/hooks/useAddCategory";
import { Button } from "../ui/button";

export default function AddCategoryForm() {
  const { isLoading, error, addCategory, resetError } = useAddCategory();
  const form = useForm({
    resolver: zodResolver(addCategoryFormSchema),
    defaultValues: {
      category: "",
    },
  });

  useEffect(() => {
    if (!isEmptyObject(error) && error.category) {
      console.log(error.category);
      form.setError(
        "category",
        { message: error.category },
        { shouldFocus: true }
      );
    }
  }, [error]);

  async function onSubmit(values) {
    const ok = await addCategory(values);
    if (ok) {
      form.reset();
    }
  }

  function reset() {
    form.reset();
    resetError();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="cat" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="button" onClick={reset} variant="outline">
            Reset
          </Button>
          <ButtonLoading isLoading={isLoading}>Add</ButtonLoading>
        </DialogFooter>
      </form>
    </Form>
  );
}
