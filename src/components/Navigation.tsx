"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard/page-one", label: "Page One" },
    { href: "/dashboard/page-two", label: "Page Two" },
    { href: "/dashboard/page-three", label: "Page Three" },
    { href: "/dashboard/page-four", label: "Page Four" },
  ];

  return (
    <div className="flex space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === item.href
              ? "bg-blue-100 text-blue-700"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
