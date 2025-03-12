import { twMerge } from "tailwind-merge";

interface props {
  children: React.ReactNode;
  className?: string;
}
function Container({ children, className }: props) {
  return (
    <div className={twMerge("max-w-7xl mx-auto px-4", className)}>
      {children}
    </div>
  );
}

export default Container;
