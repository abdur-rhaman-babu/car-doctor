import services from "@/data";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section>
        <SectionTitle title="Service" subTitle="Our Service Area" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col p-4 shadow-sm">
            <div className="mb-4">
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={500}
                objectFit="cover"
                className="rounded-lg"
              />

              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <p className="text-primary font-bold">Price: ${service.price}</p>
              <ArrowRight className="text-primary w-6 h-6" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
