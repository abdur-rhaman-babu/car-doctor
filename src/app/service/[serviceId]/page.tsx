import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import detailsBanner from "../../../../public/assets/images/checkout/checkout.png";
import { CgAdidas } from "react-icons/cg";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDetailsProps {
  params: {
    serviceId: string;
  };
}

interface Facility {
  name: string;
  details: string;
}

interface ServiceData {
  title: string;
  img: string;
  price: string;
  description: string;
  facility: Facility[];
}

const ServiceDetails = async ({ params }: ServiceDetailsProps) => {
  const { serviceId } = params;
  const serviceCollection = await dbConnect(
    collectionNameObj.servicesCollention
  );
  const data = (await serviceCollection.findOne({
    _id: new ObjectId(serviceId),
  })) as ServiceData | null;

  if (!data) {
    return <div className="text-center text-red-500">Service not found</div>;
  }

  const { title, img, price, description, facility } = data;

  return (
    <div>
      {/* Banner Section */}
      <section className="flex justify-center mt-2 w-full">
        <figure className="relative">
          <Image src={detailsBanner} width={1400} height={300} alt="banner" />
          <div className="overlay-bg absolute h-full w-full top-0 flex items-center justify-center">
            <h1 className="text-white font-bold lg:text-4xl text-2xl">
              Service Details
            </h1>
          </div>
        </figure>
      </section>

      {/* Service Details Section */}
      <div className="md:flex items-start justify-between my-5 gap-6 px-3 lg:container mx-auto">
        <div className="lg:w-8/12">
          <Image
            src={img}
            width={1000}
            height={400}
            alt={title}
            className="rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{title}</h1>
          <p className="text-gray-600 mt-2">{description}</p>

          <div>
            <ul className="grid lg:grid-cols-2 gap-5 my-4">
              {facility.map((fac, index) => (
                <li
                  key={index}
                  className="border-t-2 border-primary bg-gray-100 max-w-4xl p-8 rounded-lg"
                >
                  <h3 className="font-semibold text-lg">{fac.name}</h3>
                  <p className="text-gray-500 text-sm">{fac.details}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div >
          <div className="bg-black text-white p-5 rounded-lg">
          <h1 className="font-bold text-2xl text-left">Download</h1>
          <div className="flex items-center justify-between gap-3 my-3">
            <CgAdidas />
            <div>
              <h1>Our Brochure</h1>
              <p>Download</p>
            </div>
            <p className="bg-primary p-3  rounded-lg">
              <ArrowRight />
            </p>
          </div>
          <div className="flex items-center justify-between gap-3 my-3">
            <CgAdidas />
            <div>
              <h1>Company Details</h1>
              <p>Download</p>
            </div>
            <p className="bg-primary p-3  rounded-lg">
              <ArrowRight />
            </p>
          </div>
          </div>
          <h1 className="font-bold text-2xl my-4">Price: ${price}</h1>
          <Button variant='secondary' className="w-full py-2">Proceed Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
