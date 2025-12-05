import StockCard from "@/components/StockCard";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PersonalHome() {
  const t = useTranslations("personalHome");

  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
      <div
        className="relative h-full w-full"
        style={{
          background: `
            linear-gradient(270.43deg, #ED1D25 4.8%, rgba(237, 29, 37, 0) 103.15%),
            linear-gradient(102.87deg, #320002 -27.78%, #900006 2.52%)
          `,
        }}
      >
        {/* Content Container */}
        <div className="h-screen max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="grid lg:grid-cols-2 gap-8 w-full h-full items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 z-10 px-4 md:px-16">
              <div className="max-w-[400px]">
                <h1
                  className="font-gilroy text-6xl lg:text-[70px]"
                  style={{
                    lineHeight: "102%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {t("hero.title")}
                </h1>

                {/* Description */}
                <p className="text-lg lg:text-xl text-white/90 mt-4 ">
                  {t("hero.description")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-8  mt-12">
                  <button
                    className="w-full sm:w-auto bg-white text-red-600 font-semibold hover:bg-gray-100 transition-colors"
                    style={{
                      height: "53px",
                      borderRadius: "55px",
                      minWidth: "164px",
                    }}
                  >
                    {t("hero.buttons.startTrading")}
                  </button>
                  <button
                    className="w-full sm:w-auto text-white font-semibold hover:bg-white/10 transition-colors"
                    style={{
                      height: "53px",
                      borderRadius: "55px",
                      border: "2px solid #FFFFFF",
                      minWidth: "200px",
                    }}
                  >
                    {t("hero.buttons.tryDemo")}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="hidden lg:flex relative justify-start items-center h-full">
              <div
                className="absolute"
                style={{
                  width: "423px",
                  top: "270px",
                  left: "0px",
                }}
              >
                <Image
                  src="/images/phone-bg.png"
                  alt={t("hero.imageAlt")}
                  width={423}
                  height={655}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:absolute inset-x-0 bottom-0 h-auto md:h-[140px] lg:h-[182px] py-4 md:py-0"
        style={{
          backgroundImage: "url(/images/rectangle.png)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex items-center justify-center px-4 sm:px-6">
          <div className="grid grid-cols-1 md:flex md:flex-wrap items-center gap-3 md:gap-4 lg:gap-6 md:justify-center">
            <StockCard
              icon="/stock/usa-euro.svg"
              symbol="USD/EUR"
              trendLine="positive"
              currentValue={0.00014}
              changeValue={-234.45}
            />
            <StockCard
              icon="/stock/gold.svg"
              symbol="XAUUSD"
              trendLine="negative"
              currentValue={0.00014}
              changeValue={-234.45}
            />
            <StockCard
              icon="/stock/usa-euro.svg"
              symbol="USD/EUR"
              trendLine="positive"
              currentValue={0.00014}
              changeValue={-234.45}
            />
            <StockCard
              icon="/stock/gold.svg"
              symbol="XAUUSD"
              trendLine="negative"
              currentValue={0.00014}
              changeValue={-234.45}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
