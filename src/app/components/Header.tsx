import Link from "next/link";
import { navBarList } from "../constants";
import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { HiMenuAlt2 } from "react-icons/hi";

function Header() {
  return (
    <header className="w-full h-20 sticky left-0 top-0 z-50 bg-accentWhite border-b-[1px] border-b-lightText/50 text-black">
      <Container className="h-full flex items-center justify-between gap-10 lg:gap-5">
        <Logo />
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarList.map((nl) => (
            <Link className="navBarItem" href={nl.link} key={nl.title}>
              {nl.title}
            </Link>
          ))}
          <Link className="navBarItem" href="/signin" key="Sign in">
            Sign in
          </Link>
          <Link className="navBarItem" href="/studio" key="Studio">
            Studio
          </Link>
        </div>
        <HiMenuAlt2 className="inline-flex md:hidden cursor-pointer text-3xl hover:text-darkOrange hoverEffect" />
      </Container>
    </header>
  );
}

export default Header;
