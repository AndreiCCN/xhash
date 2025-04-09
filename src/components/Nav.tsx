"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", path: "/" },
  { label: "Block", path: "/blocks" },
  { label: "Transactions", path: "/transactions" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="container flex items-center gap-4 mx-auto pt-6">
      {links.map((link, index) => {
        return (
          <Link
            key={`nav-link-${index}`}
            href={link.path}
            className={`${
              link.path === pathname
                ? "font-bold border-b-2 border-white"
                : "font-medium text-[#909090] hover:text-white"
            } p-3 text-lg transition-all duration-300 ease-in-out`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
