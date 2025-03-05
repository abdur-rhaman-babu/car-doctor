import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { Card } from "@/components/ui/card";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Link from "next/link";

interface Service {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: string;
  description: string;
  facility: string[];
}

const getServices = async (): Promise<Service[]> => {
  const serviceCollection = await dbConnect<Service>(
    collectionNameObj.servicesCollention
  );
  return await serviceCollection.find({}).toArray();
};

const Services = async () => {
  const services = await getServices();

  return (
    <section>
      <SectionTitle
        title="Service"
        subTitle="Our Service Area"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {services.map((service) => (
          <Card key={service._id} className="flex flex-col p-4 shadow-sm">
            <div className="mb-4">
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={108}
                objectFit="cover"
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-primary font-bold">Price: ${service.price}</p>
              <Link href={`/service/${service._id}`}>
                <ArrowRight className="text-primary w-6 h-6" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
