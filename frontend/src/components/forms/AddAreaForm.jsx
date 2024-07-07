import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addAreaFormSchema } from "@/lib/zod/areaSchema";
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
import useAddArea from "@/hooks/useAddArea";
import { Button } from "../ui/button";

export default function AddAreaForm() {
  const { isLoading, error, addArea, resetError } = useAddArea();
  const form = useForm({
    resolver: zodResolver(addAreaFormSchema),
    defaultValues: {
      area: "",
    },
  });

  useEffect(() => {
    if (!isEmptyObject(error) && error.area) {
      console.log(error.category);
      form.setError("area", { message: error.area }, { shouldFocus: true });
    }
  }, [error]);

  async function onSubmit(values) {
    const ok = await addArea(values);
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
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area</FormLabel>
              <FormControl>
                <Input placeholder="Area" {...field} />
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
