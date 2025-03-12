import { twMerge } from "tailwind-merge";

function FormatedPrice({
  className,
  value,
}: {
  className?: string;
  value: number;
}) {
  const valueStr = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return (
    <h3 className={twMerge("text-darkOrange font-bold text-xl", className)}>
      &#36;{valueStr}
    </h3>
  );
}

export default FormatedPrice;
