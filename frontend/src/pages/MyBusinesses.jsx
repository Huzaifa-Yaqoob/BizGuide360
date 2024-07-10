import AddButton from "@/components/dialogs/AddButton";

export default function MyBusiness() {
  return (
    <section className="flex-grow p-4">
      <div className="bg-accent text-accent-foreground rounded p-2 flex items-center justify-between">
        <h3 className="h5">123</h3>
        <AddButton type={"business"} />
      </div>
    </section>
  );
}
