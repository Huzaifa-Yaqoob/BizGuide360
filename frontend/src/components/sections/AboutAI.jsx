import { AspectRatio } from "../ui/aspect-ratio";

const data = {
  heading: "AI Bot for Business Consultancy",
  paragraph:
    "Introducing our new AI Business Consultancy Bot! 🤖💼 Get expert advice on strategy, marketing, finance, and more, instantly. Just ask a question, and our bot will provide tailored solutions based on the latest industry insights. It's like having a virtual consultant at your fingertips 24/7. Try it out today and take your business to the next level!",
};

export default function AboutAI() {
  return (
    <section className="my-container grid md:grid-flow-row-reverse grid-row-2 md:grid-rows-1 md:grid-cols-3 gap-4">
      <div className="flex justify-center items-center md:order-3">
        <img src="/logo.svg" alt="logo" className="max-w-40" />
      </div>
      <main className="md:col-span-2">
        <h1 className="h2 text-center md:text-start">{data.heading}</h1>
        <p className="p">{data.paragraph}</p>
      </main>
    </section>
  );
}
