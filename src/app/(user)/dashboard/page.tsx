import Container from "@/app/components/Container";
import { auth, signOut } from "@/auth";

import Image from "next/image";
import { redirect } from "next/navigation";

async function DashBoardPage() {
  const session = await auth();
  if (!session?.user) redirect("/signin");
  return (
    <Container>
      <form
        className="flex flex-col gap-4 p-8"
        action={async () => {
          "use server";

          signOut();
          redirect("/");
        }}
      >
        <h3 className="text-accent text-lg font-semibold  ">
          Welcome to your Dashboard
        </h3>
        <div className="flex flex-row gap-2  items-center">
          <Image
            width={10}
            height={10}
            src={session?.user?.image as string}
            alt="img"
            className="rounded-full w-8 h-8"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-accent font-semibold">
              {session?.user?.name}{" "}
            </h3>
            <h3 className="text-accent">{session?.user?.email} </h3>
          </div>
        </div>
        <button
          className="text-sm font-semibold text-accent rounded-md border-accent/50
       border-[1px] w-fit h-fit px-4 py-2 hover:bg-accent hover:text-accentWhite hoverEffect"
        >
          Sign Out
        </button>
      </form>
    </Container>
  );
}

export default DashBoardPage;
