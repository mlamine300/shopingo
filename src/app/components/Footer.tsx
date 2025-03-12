import Link from "next/link";
import { footerData } from "../constants";
import Container from "./Container";

function Footer() {
  return (
    <div className="bg-stone-100 py-5">
      <Container className="max-w-full items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pl-44 pr-36">
        {footerData.map((data) => (
          <div
            className="flex flex-col  items-center lg:items-start mt-10 md:mt-0 md:border-b-0 border-b-[1px]
             border-b-darkOrange mx-20 md:mx-0 pb-20 md:pb-0"
            key={data.id}
          >
            <p className="text-xl text-darkOrange pb-6 font-semibold">
              {data.title}
            </p>
            {data.listItem[0].listData?.map((ld) => (
              <Link
                className="text-lg text-accent font-semibold pb-3
                hover:text-darkOrange hoverEffect"
                href={"/"}
                key={ld}
              >
                {ld}{" "}
              </Link>
            ))}
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Footer;
