import { FaWallet, FaClockRotateLeft } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { PiChartBar } from "react-icons/pi";
import Container from "./Container";

function Facilities() {
  const data = [
    {
      title: "Free delivery",
      description: "When ordering above $500",
      icon: (
        <GoRocket className="text-darkOrange w-10 h-10 min-w-[60px] min-h-[60px]" />
      ),
    },

    {
      title: "90 Days Return",
      description: "If goods have problems",
      icon: (
        <FaClockRotateLeft className="text-darkOrange w-10 h-10 min-w-[60px] min-h-[60px] " />
      ),
    },
    {
      title: "Secure Payment",
      description: "100% secure payment",
      icon: (
        <FaWallet className="text-darkOrange w-10 h-10 min-w-[60px] min-h-[60px]" />
      ),
    },
    {
      title: "24/7 Support",
      description: "Dedicated support",
      icon: (
        <PiChartBar className="text-darkOrange w-10 h-10 min-w-[60px] min-h-[60px]" />
      ),
    },
  ];
  return (
    <Container className="gap-y-10 py-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-y-8 ">
      {data.map((facility) => (
        <div
          key={facility.title}
          className="shrink flex flex-col md:flex-row items-center lg:gap-4 md:justify-center"
        >
          {facility.icon}
          <div className="flex flex-col items-center md:items-start md:p-4">
            <h3 className="text-accent font-bold text-xl">{facility.title} </h3>
            <p className="text-accent/40 text-lg">{facility.description} </p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Facilities;
