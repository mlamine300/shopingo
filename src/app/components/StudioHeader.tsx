import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

function StudioHeader(props: any) {
  return (
    <div>
      <div className="p-5 bg-accent text-gray-100 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold hover:text-darkOrange hoverEffect"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioHeader;
