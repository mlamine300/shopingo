import { getBannersData } from "@/lib/getData";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import FormatedPrice from "./FormatedPrice";

async function Banner() {
  const banners = await getBannersData();
  const firstBanner = await banners[2];

  const banners2 = [banners[0], banners[1]] as Array<any>;
  console.log(firstBanner);
  return (
    <Container className="p-10 w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-10 bg-accentWhite">
      <div
        className="py-5 lg:py-0 rounded-xl row-span-1 col-span-1 lg:col-span-2 lg:row-span-2
       bg-slate-100 flex justify-center items-center  overflow-hidden relative group"
      >
        <Image
          className="absolute translate-x-2 -translate-y-10 group-hover:scale-105 hoverEffect group"
          src={urlFor(firstBanner?.image).url()}
          alt={firstBanner?.title}
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className="-translate-y-10 w-full lg:h-[60%] px-5 lg:px-10 z-10 md:py-60 md:px-10">
          <p className=" text-white bg-lightGreen w-fit h-fit px-2 lg:px-4 py-1 rounded-full font-bold lg:text-lg text-sm">
            {`Sale ${firstBanner?.price}`}{" "}
          </p>
          <h3 className="text-black font-semibold text-2xl mt-2 lg:text-4xl lg:mt-4">
            {firstBanner?.subtitle}
          </h3>
          <h1 className="text-black font-bold lg:text-[80px] text-[40px]">
            {firstBanner?.title}{" "}
          </h1>
          <p className="text-accent/60 font-bold lg:text-lg text-sm lg:max-w-56 max-w-44">
            {firstBanner?.description}
          </p>
          <button className="bg-lightOrange rounded-full px-8 py-4 text-sm lg:text-lg font-semibold mt-6 lg:mt-12 hover:bg-darkOrange">
            <Link href={"/shop"}>Shop Now</Link>
          </button>
        </div>
      </div>
      {banners2.map((b: any) => (
        <div
          key={b?.title}
          className="px-5 lg:px-10  rounded-xl bg-slate-100 col-span-1 row-span-1 flex items-center overflow-hidden group"
        >
          <div className="text-black">
            <h3 className="font-semibold text-3xl">{b?.subtitle}</h3>
            <h3 className="font-extrabold text-4xl mt-2">{b?.subtitle}</h3>
            <div className="text-accent/60 font-semibold text-lg mt-4">
              From <FormatedPrice value={b?.price} />
            </div>
            <div className=" mt-6 ">
              <Link
                className="underline text-lg font-bold hover:text-darkOrange hoverEffect"
                href="/shop"
              >
                Shop now!
              </Link>
            </div>
          </div>
          <Image
            className="ml-auto group-hover:scale-105 hoverEffect "
            src={urlFor(b?.image).url()}
            alt={b?.title}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
      ))}
    </Container>
  );
}

export default Banner;
