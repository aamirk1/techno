import { ServiceInfo } from "../User";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-16 my-10 font-mono md-mx:px-6" id="Services">
      <h1 className="text-4xl font-bold sm-mx:text-3xl xs-mx:text-2xl text-center mb-5 text-white">
        <span className="text-primaryColor">03. &nbsp;</span>Services
      </h1>
      <div className="flex flex-wrap justify-around gap-4 md-mx:gap-2 md-mx:justify-between sm-mx:justify-center">
        {ServiceInfo.map((service: any, index: number) => (
          <ServiceCard key={index} title={service.title} services={service.services} />
        ))}
      </div>
    </div>
  );
};

export default Services;
