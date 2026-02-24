import clsx from "clsx";
import Image from "next/image";

type Props = {
  className?: string;
};

export function EGoLogo({ className }: Props) {
  return (
    <div className={clsx("inline-flex items-center", className)} aria-label="e-Go">
      <Image
        src="/logo.png"
        alt="e-Go"
        width={120}
        height={40}
        className="h-auto w-16 md:w-28"
        priority
      />
    </div>
  );
}
