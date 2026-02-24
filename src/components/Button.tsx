import Link from "next/link";
import clsx from "clsx";

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  return (
    <Link
      className={clsx(
        "rounded-xl bg-[#FF4C00] px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-[#e04400] md:text-2xl",
        className,
      )}
      href={buttonLink}
    >
      {buttonText}
    </Link>
  );
}
