import AddCategoryOrArea from "@/components/dialogs/AddCategoryOrArea";

const count = 144;

export default function ManageLocation() {
  return (
    <section className="flex-grow p-4">
      <div className="bg-accent text-accent-foreground rounded p-2 flex items-center justify-between">
        <h3 className="h5">123</h3>
        <AddCategoryOrArea type={"area"} />
      </div>
    </section>
  );
}
