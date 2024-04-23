import { AspectRatio } from "../ui/aspect-ratio";

const data = {
  heading: "Business Directory ",
  paragraph:
    "A business directory is like a digital yellow pages, but with extra perks. It's a comprehensive listing of businesses, usually organized by category or location. These directories provide essential details about each business, such as contact information, services offered, operating hours, and sometimes customer reviews. They're handy for consumers looking for specific products or services and for businesses seeking exposure and potential customers. Online directories are particularly popular today, offering easy accessibility and searchability for users.",
};

export default function AboutBizGuide360() {
  return (
    <section className="my-container grid grid-row-2 md:grid-rows-1 md:grid-cols-3 gap-4">
      <div className="flex justify-center items-center">
        <img
          src="/BusinessDirectory.jpg"
          alt="logo"
          className="max-w-72 rounded"
        />
      </div>
      <main className="md:col-span-2">
        <h1 className="h2 text-center md:text-start">{data.heading}</h1>
        <p className="p">{data.paragraph}</p>
      </main>
    </section>
  );
}
