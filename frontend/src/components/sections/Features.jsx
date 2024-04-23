import { MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Separator } from "../ui/separator";

const features = [
  {
    id: "locate-business",
    Icon: MapPin,
    info: "Locate business in specific area",
  },
  { id: "ai-bot", Icon: Sparkles, info: "AI Bot to help in business " },
  {
    id: "register-business",
    Icon: ShieldCheck,
    info: "Register Your business to get more customers",
  },
];

export default function Features() {
  return (
    <section className="my-section space-y-8">
      <h1 className="h1 text-center">Features We Provide</h1>
      <Separator />
      <main className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.id}
            className="p-4 flex flex-col items-center gap-4 bg-card text-card-foreground rounded shadow w-full h-full"
          >
            <f.Icon size="96" />
            <p className="text-center">{f.info}</p>
          </div>
        ))}
      </main>
    </section>
  );
}

{
  /* //   <h1 className="h1 text-center">Features We Provide</h1>
      <Separator />
      <main className="grid grid-rows-3 md:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.id}
            className="p-4 flex flex-col items-center gap-4 bg-card text-card-foreground rounded shadow w-full h-full"
          >
            <f.Icon size="96" />
            <p className="text-center">{f.info}</p>
          </div>
        ))}
      </main> */
}
