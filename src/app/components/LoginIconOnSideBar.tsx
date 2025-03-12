import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { BiSolidUserAccount } from "react-icons/bi";
async function LoginIconOnSideBar() {
  const session = await auth();
  return (
    <Link
      href={session?.user ? "/dashboard" : "/signin"}
      className="w-full h-full relative flex items-center flex-col justify-center gap-1"
    >
      {session?.user ? (
        <Image
          src={session?.user.image as string}
          alt="profile image"
          width={10}
          height={10}
          className="rounded-full w-6 h-6 text-accent bg-accentWhite group-hover:animate-icon-to-right group-hover:cursor-pointer"
        />
      ) : (
        <BiSolidUserAccount className="w-6 h-6 text-accent bg-accentWhite group-hover:animate-icon-to-right group-hover:cursor-pointer" />
      )}
      <p className="text-accent text-xs font-semibold">Profile</p>
    </Link>
  );
}

export default LoginIconOnSideBar;
