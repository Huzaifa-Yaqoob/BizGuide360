import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Select, { components } from "react-select";
import { MapPin, Store } from "lucide-react";
import { addBusinessFormSchema } from "@/lib/zod/businessSchema";
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
import useAddBusiness from "@/hooks/useAddBusiness";
import { Button } from "../ui/button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const { Control } = components;

export default function AddAreaForm() {
  const { isLoading, error, addBusiness, resetError } = useAddBusiness();
  const form = useForm({
    resolver: zodResolver(addBusinessFormSchema),
    defaultValues: {
      title: "",
      category: "",
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
    const ok = await addBusiness(values);
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="My Business" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Category</FormLabel>
              <FormControl>
                <Select
                  options={options}
                  components={{ Control: CustomControlCategory }}
                  placeholder="Category..."
                  unstyled
                  isClearable
                  onChange={field.onChange}
                  value={field.value}
                  classNames={{
                    control: () => "py-1",
                    placeholder: () => "text-muted-foreground",
                    menu: () => "bg-popover shadow mt-2 border rounded p-2",
                    menuList: () => "space-y-1",
                    option: (state) =>
                      `rounded py-1 px-2 ${
                        state.isSelected
                          ? "bg-primary text-primary-foreground"
                          : state.isFocused
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }`,
                    clearIndicator: () => "hover:text-destructive",
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Area</FormLabel>
              <FormControl>
                <Select
                  components={{ Control: CustomControlArea }}
                  options={options}
                  placeholder="Area..."
                  isClearable
                  unstyled
                  onChange={field.onChange}
                  value={field.value}
                  classNames={{
                    control: () => "py-1",
                    placeholder: () => "text-muted-foreground",
                    menu: () => "bg-popover shadow mt-2 border rounded p-2",
                    menuList: () => "space-y-1",
                    option: (state) =>
                      `rounded py-1 px-2 ${
                        state.isSelected
                          ? "bg-primary text-primary-foreground"
                          : state.isFocused
                          ? "bg-accent text-accent-foreground"
                          : ""
                      }`,
                    clearIndicator: () => "hover:text-destructive",
                  }}
                />
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

const CustomControlCategory = ({ children, ...props }) => (
  <Control
    {...props}
    className="flex items-center gap-2 px-2 py-1 rounded-lg border-2 border-input focus-within:ring-2 ring-ring ring-offset-1"
  >
    <Store size={"24"} />
    {children}
  </Control>
);

const CustomControlArea = ({ children, ...props }) => (
  <Control
    {...props}
    className="flex items-center gap-2 py-1 px-2 rounded-lg border-2 border-input focus-within:ring-2 ring-ring ring-offset-1"
  >
    <MapPin size={"24"} />
    {children}
  </Control>
);
