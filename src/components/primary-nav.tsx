"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";

export function SiteNav({ label, className }: { label: string; className: string }) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={label}>
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
