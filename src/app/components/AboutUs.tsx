import Image from "next/image";
import aboutImg from "../../../public/assets/images/about_us/person.jpg";
import partsImg from "../../../public/assets/images/about_us/parts.jpg";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section>
      <div className="md:flex item-center justify-between lg:my-20 my-5 md:my-10">
        <div className="relative md:w-7/12">
          <figure>
            <Image src={aboutImg} width={521} height={457} alt="about" />
          </figure>
          <figure className="hidden md:block absolute top-56 right-20 border-8 border-white rounded-lg">
            <Image src={partsImg} width={300} height={332} alt="about" />
          </figure>
        </div>
        <div className="md:w-5/12 mx-3">
            <h4 className="font-bold text-xl text-primary">About Us</h4>
            <h2 className="text-3xl font-bold my-5">We are qualified & of experience in this field</h2>
            <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            <p className="my-4">The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
         <Button variant='secondary'>Get More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
