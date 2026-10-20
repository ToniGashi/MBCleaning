"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mailHref, navigation, siteConfig, telHref } from "@/lib/site";

export function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    menuRef.current?.removeAttribute("open");
    setOpen(false);
  }, [pathname]);

  return (
    <details
      className="mobile-menu"
      ref={menuRef}
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label={open ? "Close menu" : "Open menu"}>
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
        {siteConfig.email ? (
          <a className="mobile-menu-email" href={mailHref()}>
            Email {siteConfig.email}
          </a>
        ) : null}
      </nav>
    </details>
  );
}
