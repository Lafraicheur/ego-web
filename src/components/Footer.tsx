import { EGoLogo } from "@/components/EGoLogo";
import CircleText from "./CircleText";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">
        <EGoLogo />

        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="text-center text-sm text-gray-500 md:text-left">
            © {new Date().getFullYear()} e-Go — Application de taxi intelligente à Abidjan
          </p>
          <p className="text-xs text-gray-600">
            Une solution <span className="font-semibold text-gray-400">e-SPHERE</span>
          </p>
        </div>

        <div className="absolute right-8 top-0 size-24 origin-center -translate-y-12 md:size-36 md:-translate-y-16">
          <CircleText
            textColor="#FF4C00"
            backgroundColor="#0F0F0F"
          />
        </div>
      </div>
    </footer>
  );
}
