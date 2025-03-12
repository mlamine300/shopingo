import Image from "next/image";
import googleImage from "../../../../public/assets/google.png";
import { auth, signIn } from "@/auth";
function page() {
  return (
    <form
      className="w-full h-[960px]  flex justify-center items-center"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
        const user = await auth();
      }}
    >
      <button
        className="flex flex-row gap-1 items-center bg-green-50
       border-green-500 rounded-lg px-8 py-2 text-accent border-[1px]
        text-lg font-semibold hover:bg-green-500 hover:border-green-50
         hover:text-accentWhite"
      >
        <Image src={googleImage} alt="google" width={25} className="w-8 h-8" />
        Sign in with Google
      </button>
    </form>
  );
}

export default page;
