import { twMerge } from "tailwind-merge";

function RowPrice({
  className,
  value,
}: {
  className?: string;
  value: number | 0;
}) {
  const price = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: "USD",
    style: "currency",
  }).format(value);
  return (
    <p
      className={twMerge(
        "text-accent/40 text-lg font-semibold line-through",
        className
      )}
    >
      {price}
    </p>
  );
}

export default RowPrice;
