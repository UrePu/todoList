import Link from "next/link";
import { ReactNode } from "react";

interface LinkCommonProps {
  href: string;
  children: ReactNode;
}

const LinkCommon = ({ href, children }: LinkCommonProps) => {
  return (
    <Link
      href={href}
      className={
        "inline-block rounded-md bg-white px-4 py-2 text-black hover:bg-gray-300 transition-colors"
      }
    >
      {children}
    </Link>
  );
};

export default LinkCommon;
