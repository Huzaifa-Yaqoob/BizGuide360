import { SquareArrowOutUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "../common/BlogCard";
import { Button } from "../ui/button";

const data = [
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
];

export default function LatestBlogs() {
  return (
    <section className="my-section m-2 space-y-8">
      <div>
        <h3 className="h3 text-center">
          Latest Blogs{" "}
          <Button variant="link" size="icon">
            <SquareArrowOutUpRight />
          </Button>
        </h3>
      </div>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full "
      >
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          {data.map((dat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <BlogCard data={dat} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}