import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MapPin, Search, Store } from "lucide-react";
import Select, { components } from "react-select";
import { searchBusiness } from "@/lib/zod/businessSearchForm";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const { Control } = components;

export default function SearchBusinessForm() {
  const form = useForm({
    resolver: zodResolver(searchBusiness),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-background rounded shadow p-4 min-w-80 flex flex-col gap-4"
      >
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
        <Button type="submit" className="shadow w-full">
          <Search size={"24"} />
        </Button>
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
