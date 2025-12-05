import Image from "next/image";

interface StockCardProps {
  icon: string;
  symbol: string;
  currentValue: number;
  changeValue: number;
  trendLine: "positive" | "negative";
}

export default function StockCard({
  icon,
  symbol,
  currentValue,
  changeValue,
  trendLine,
}: StockCardProps) {
  const isNegative = changeValue < 0;
  const trendIcon =
    trendLine === "negative" ? "/stock/negative.svg" : "/stock/positive.svg";

  return (
    <div className="flex items-center gap-2 px-8 py-3 bg-white rounded-[40px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2">
        <Image src={icon} alt={`${symbol} icon`} height={22} width={28} />
        <span className="text-sm font-bold font-inter whitespace-nowrap">
          {symbol}
        </span>
      </div>

      <Image src={trendIcon} alt="Price trend" width={32} height={14} />

      <div className="flex flex-col items-end gap-0.5 ml-auto">
        <span className="text-sm font-bold font-inter tabular-nums">
          {currentValue.toFixed(5)}
        </span>
        <span
          className={`text-sm font-bold font-inter tabular-nums ${
            isNegative ? "text-brand-red" : "text-green-500"
          }`}
        >
          {isNegative ? "" : "+"}
          {changeValue.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
