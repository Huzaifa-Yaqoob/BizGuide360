import SearchBusinessForm from "../forms/SearchBusinessForm";

export default function Hero() {
  return (
    <header className="my-section heroImage bg-cover bg-center flex flex-col-reverse md:flex-row justify-between gap-4 items-center">
      <SearchBusinessForm />
      <h1 className="h1 text-primary">Look for Business in any Area</h1>
    </header>
  );
}
