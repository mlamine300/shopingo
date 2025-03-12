import { auth } from "@/auth";
import Container from "./Container";
import LoginIconOnSideBar from "./LoginIconOnSideBar";
import ShoppingIconForSideBar from "./ShoppingIconForSideBar";

async function SideBar() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-4 z-50 fixed right-2 justify-center top-[20%]">
      <Container
        className="bg-accentWhite w-16 h-16  border-accent/60 p-0
         border-lightGreen rounded-lg border-l-[1px] border-b-[1px] shadow-lg shadow-accent group overflow-hidden"
      >
        <LoginIconOnSideBar />
      </Container>
      <Container
        className="bg-accentWhite w-16 h-16  border-accent/60 p-0
         border-lightGreen rounded-lg border-l-[1px] border-b-[1px] shadow-lg shadow-accent group overflow-hidden"
      >
        <ShoppingIconForSideBar />
      </Container>
    </div>
  );
}

export default SideBar;
