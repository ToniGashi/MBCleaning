"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { mailHref, navigation, siteConfig, smsHref, telHref } from "@/lib/site";

export function MobileMenu() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);

  const closeMenu = useEffectEvent(() => {
    menuRef.current?.removeAttribute("open");
    setOpen(false);
  });

  // Closing the details element fires onToggle, which resets `open`.
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onPointerDown = (event: PointerEvent) => {
      const node = menuRef.current;
      if (!node) return;
      if (event.target instanceof Node && !node.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <details
      className="mobile-menu"
      ref={menuRef}
      onToggle={(event) => {
        setOpen(event.currentTarget.open);
      }}
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
        {siteConfig.phone ? (
          <a className="mobile-menu-text" href={smsHref()}>
            Text us
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
