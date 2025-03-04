// components/Banner.tsx
import Image from "next/image";
import Link from "next/link";
import banner from "../../../public//assets//images/banner/2.jpg";
import { Button } from "@/components/ui/button";
const Banner = () => {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={banner} // Make sure to update the path to your image
          alt="Banner Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50" // Add opacity to the background image
        />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Affordable Price For Car Servicing
        </h1>
        <p className="text-lg text-white text-center mb-6 lg:w-5/12 md:w-9/12">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="flex gap-2 items-center">
          {/* Button 1 */}
          <Link href="/shop">
            <Button variant="secondary">Discover More</Button>
          </Link>
          <Link href="/shop">
            <Button variant="default">Latest Project</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
