import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <h2
        className="text-2xl text-accent hover:text-darkOrange font-bold uppercase hoverEffect
       relative group overflow-hidden"
      >
        Shoppingo
        <span
          className="absolute left-0 bottom-0 w-full h-px bg-darkOrange
         -translate-x-[105%] group-hover:translate-x-0 hoverEffect"
        ></span>
      </h2>
    </Link>
  );
}

export default Logo;
