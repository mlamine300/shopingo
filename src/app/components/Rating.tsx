import { IoStar } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

function Rating({
  className,
  starClassName,
  rating,
}: {
  starClassName?: string;
  className?: string;
  rating: number;
}) {
  const ratingBase = Number(Math.floor(rating || 0));
  const ratingDecimal = Number((rating - ratingBase).toPrecision(2));
  return (
    <div className={twMerge("flex flex-row", className)}>
      {Array.from({ length: 5 }, (x, i) => i).map((i) => (
        <IoStar
          key={i}
          className={twMerge(
            starClassName,
            `${i < ratingBase ? " text-darkOrange" : i == ratingBase && ratingDecimal > 0 ? " text-yellow-400" : "text-slate-700"}`
          )}
        />
      ))}
    </div>
  );
}

export default Rating;
