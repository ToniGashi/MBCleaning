"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation, siteConfig, telHref } from "@/lib/site";

export function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    menuRef.current?.removeAttribute("open");
  }, [pathname]);

  return (
    <details className="mobile-menu" ref={menuRef}>
      <summary aria-label="Open menu">
        <span aria-hidden="true" />
      </summary>
      <nav className="mobile-menu-panel" aria-label="Mobile navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
        {siteConfig.phone ? (
          <a className="mobile-menu-call" href={telHref()}>
            Call {siteConfig.phoneDisplay}
          </a>
        ) : null}
      </nav>
    </details>
  );
}
