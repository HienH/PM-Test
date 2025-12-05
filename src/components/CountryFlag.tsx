import Image from "next/image";

interface CountryFlagProps {
  flagUrl: string;
  label: string;
  size?: number;
}

export function CountryFlag({ flagUrl, label, size = 24 }: CountryFlagProps) {
  return (
    <Image
      src={flagUrl}
      alt={`${label} flag`}
      width={size}
      height={size}
      className="rounded-full object-cover"
      unoptimized
    />
  );
}
